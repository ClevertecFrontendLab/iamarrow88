import {initialAuthDataState, initialLoginState, initialStatusPage} from "@redux/config/store.ts";
import {
    ActionsInterface,
    AuthDataInterface, LoginStateInterface,
    statusPageInterface
} from "@redux/config/redux-types.ts";
import {storeActionTypes} from "@redux/config/redux-constants.ts";

export function changeLogReducer(
    state = initialLoginState,
    action: ActionsInterface
): LoginStateInterface {

    switch (action.type) {
        case storeActionTypes.loginFalse: {
            return {
                isLogin: false
            };
        }
        case storeActionTypes.loginTrue: {
            return {
                isLogin: true
            };
        }
        default: {
            return {...state};
        }
    }
}

export function changeAuthData(
    state = initialAuthDataState,
    action: ActionsInterface
): AuthDataInterface {
    switch (action.type) {
        case storeActionTypes.emailWrite: {
            return {...state, email: action.payload};
        }
        case storeActionTypes.passwordWrite: {
            return {...state, password: action.payload };
        }
        case storeActionTypes.isRememberedWrite: {
            return {...state, isRemembered: Boolean(action.payload) };
        }
        case storeActionTypes.codeWrite: {
            return {...state, code: action.payload };
        }

        default: {
            return state;
        }
    }
}

export function setStatusPage (
    state = initialStatusPage,
    action: ActionsInterface
): statusPageInterface {
    switch (action.type) {
        case storeActionTypes.isLoadingTrue: {
            return {
                isLoading: true,
            }
        }

        case storeActionTypes.isLoadingFalse: {
            return {
                isLoading: false,
            }
        }

        default: {
            return {...state};
        }
    }
}

