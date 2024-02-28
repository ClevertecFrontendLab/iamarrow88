import {storeActionTypes} from "./redux-constants.ts";
import type {Reducer} from "redux";
import {RouterState} from "redux-first-history/src/reducer.ts";

export interface LoginStateInterface {
    isLogin: boolean,
}
export interface AuthDataInterface {
    password: string;
    code: string;
    email: string;
    isRemembered: boolean
}

export interface statusPageInterface {
    isLoading: boolean,
}

export interface StoreInterface {
    isLogin: boolean;
    authData: AuthDataInterface;
    isLoading: boolean;
    router: Reducer<RouterState> | null;
}

export interface ActionsInterface {
    type: storeActionTypes,
    payload: string
}




