import {PageStateInterface} from "@redux/config/redux-types.ts";

export const initialLoginState = {
    isLogin: false,
}

export const initialAuthDataState = {
    email: '',
    password: '',
    isRemembered: true,
    code: '',
}


export const initialStatusPage: PageStateInterface = {
    isLoading: false,
}


