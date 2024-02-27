import {RegistrationMapInterface} from "../../customTypes/content-types.ts";

export const registrationMap: RegistrationMapInterface = {
    201: '/result/success',
    409: '/result/error-user-exist',
    other: '/result/error'
}
