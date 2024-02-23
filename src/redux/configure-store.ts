import { configureStore } from '@reduxjs/toolkit';
import {createBrowserHistory} from "history";
import { initialTypesInterface, ActionsInterface } from "../customTypes/content-types.ts";
import initialState from './store.ts';

export const store = configureStore({
    reducer: changeLogReducer
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
