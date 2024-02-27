import {combineReducers, configureStore, EnhancedStore} from '@reduxjs/toolkit';
import { createReduxHistoryContext} from "redux-first-history";
import {createBrowserHistory} from "history";
import {
    ActionsInterface, storeActionTypes
} from "../customTypes/content-types.ts";
import {initialLoginState, initialAuthDataState} from './store.ts';

// let preloadedState: StoreInterface = {
//     isLoggedIn: false,
//     authData: {
//         email: '',
//         password: ''
//     },
//     router: null,
// };

// const storeFromLS = localStorage.getItem('store');
//
// if (storeFromLS) {
//     preloadedState = JSON.parse(storeFromLS);
// }

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({ history: createBrowserHistory(), savePreviousLocations: 1 })

const rootReducer = combineReducers({
    isLoggedIn: changeLogReducer,
    authData: changeAuthData,
    router: routerReducer,
});



function changeLogReducer(state = initialLoginState, action: ActionsInterface): boolean {

    switch (action.type) {
        case storeActionTypes.loginFalse: {
            return false;
        }
        case storeActionTypes.loginTrue: {
            return true;
        }
        default: {
            return state.isLoggedIn || false;
        }
    }
}

function changeAuthData(state = initialAuthDataState, action: ActionsInterface): { email: string, password: string } {
    switch (action.type) {
        case storeActionTypes.emailWrite: {
            return {...state, email: action.payload};
        }
        case storeActionTypes.passwordWrite: {
            return {...state, password: action.payload };
        }
        default: {
            return state;
        }
    }
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare()
            .concat(routerMiddleware)
});

export const history = createReduxHistory(store as EnhancedStore);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
