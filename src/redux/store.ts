import {initialTypesInterface} from "../customTypes/content-types.ts";

const initialState: initialTypesInterface = {
    isLoggedIn: false,
    authData: {
        email: '',
        password: ''
    }
}

export default initialState;
