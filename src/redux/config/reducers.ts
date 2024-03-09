import {initialAuthDataState, initialLoginState, initialStatusPage} from "@redux/config/store.ts";
import {
    ActionsInterface,
    UserDataStateInterface, AuthStateInterface,
    PageStateInterface
} from "@redux/config/redux-types.ts";
import {StoreActionTypes} from "@redux/config/redux-constants.ts";

export function changeLogReducer(
    state = initialLoginState,
    action: ActionsInterface
): AuthStateInterface {

    switch (action.type) {
        case StoreActionTypes.loginFalse: {
            return {
                isLogin: false
            };
        }
        case StoreActionTypes.loginTrue: {
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
): UserDataStateInterface {
    switch (action.type) {
        case StoreActionTypes.emailWrite: {
            return {...state, email: action.payload};
        }
        case StoreActionTypes.passwordWrite: {
            return {...state, password: action.payload };
        }
        case StoreActionTypes.isRememberedWrite: {
            return {...state, isRemembered: Boolean(action.payload) };
        }
        case StoreActionTypes.codeWrite: {
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
): PageStateInterface {
    switch (action.type) {
        case StoreActionTypes.isLoadingTrue: {
            return {
                isLoading: true,
            }
        }

        case StoreActionTypes.isLoadingFalse: {
            return {
                isLoading: false,
            }
        }

        default: {
            return {...state};
        }
    }
}

