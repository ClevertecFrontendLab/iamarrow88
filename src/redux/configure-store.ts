import { configureStore } from '@reduxjs/toolkit';
import {createBrowserHistory} from "history";
import {
    initialTypesInterface,
    ActionsInterface,
    StoreInterface
} from "../customTypes/content-types.ts";
import initialState from './store.ts';

let preloadedState: StoreInterface = {
    isLoggedIn: false,
    email: '',
    password: '',
};

const storeFromLS = localStorage.getItem('store');

if (storeFromLS) {
    preloadedState = JSON.parse(storeFromLS);
}



export const store = configureStore({
    reducer: changeLogReducer,
    preloadedState
});


function changeLogReducer(state = initialState, action: ActionsInterface): initialTypesInterface {

    switch (action.type) {
        case "loggin/false": {
            return {...state, isLoggedIn: false};
        }
        case "loggin/true": {
            return { ...state, isLoggedIn: true };
        }
        default: {
            return state;
        }
    }
}

export const history = createBrowserHistory();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
