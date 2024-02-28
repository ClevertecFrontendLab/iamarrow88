import {storeActionTypes} from "./redux-constants.ts";
import type {Reducer} from "redux";
import {RouterState} from "redux-first-history/src/reducer.ts";

export interface AuthStateInterface {
    isLogin: boolean,
}
export interface UserDataStateInterface {
    password: string;
    code: string;
    email: string;
    isRemembered: boolean
}

export interface PageStateInterface {
    isLoading: boolean,
}

export interface StoreInterface {
    auth: AuthStateInterface;
    userData: UserDataStateInterface;
    page: PageStateInterface;
    router: Reducer<RouterState> | null;
}

export interface ActionsInterface {
    type: storeActionTypes,
    payload: string
}




