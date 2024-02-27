import {combineReducers, configureStore, EnhancedStore} from '@reduxjs/toolkit';
import { createReduxHistoryContext} from "redux-first-history";
import {createBrowserHistory} from "history";
import {
    initialTypesInterface,
    ActionsInterface, storeActionTypes
} from "../customTypes/content-types.ts";
import initialState from './store.ts';

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



function changeLogReducer(state = initialState, action: ActionsInterface): initialTypesInterface {

    switch (action.type) {
        case storeActionTypes.loginFalse: {
            return {...state, isLoggedIn: false};
        }
        case storeActionTypes.loginTrue: {
            return { ...state, isLoggedIn: true };
        }
        default: {
            return state;
        }
    }
}

function changeAuthData(state = initialState, action: ActionsInterface): initialTypesInterface {
    switch (action.type) {
        case storeActionTypes.emailWrite: {
            return {...state, authData: {
                    ...state.authData, email: action.payload
                }};
        }
        case storeActionTypes.passwordWrite: {
            return {...state, authData: {
                    ...state.authData, password: action.payload
                }};
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
