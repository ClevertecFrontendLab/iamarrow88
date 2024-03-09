import {ApiInterface} from "../../customTypes/api-types.ts";
import {baseURL} from "@constants/common/common-constants.ts";

export const API_URLs: Record<string, ApiInterface> = {
    login: {
        url: `${baseURL}/auth/login`,
        method: 'POST',
        body: {
            'email': '',
            'password': ''
        },
        responseCodes: {
            200: ['/main', 'Ok'],
            400: ['/result/error-login', 'request error'],
            401: ['/result/error-login', 'request error'],
            429: ['/result/error-login', 'too many requests'],
            500: ['/result/error-login', 'server error'],
        }
    },
    registration: {
        url: `${baseURL}/auth/registration`,
        method: 'POST',
        body: {
            'email': '',
            'password': ''
        },
        responseCodes: {
            201: ['/result/success', 'Ok'],
            400: ['/result/error', 'request error'],
            409: ['/result/error-user-exist', 'user already exists'],
            429: ['/result/error', 'too many requests'],
            500: ['/result/error', 'server error'],
        }
    },

    checkEmail: {
        url: `${baseURL}/auth/check-email`,
        method: 'POST',
        body: {
            'email': '',
        },
        responseCodes: {
            200: ['/auth/confirm-email', 'Ok'],
            400: ['/result/error-check-email', 'request error'],
            404: ['/result/error-check-email-no-exist', 'user is not found'],
            429: ['/result/error-check-email', 'too many requests'],
            500: ['/result/error-check-email', 'server error'],
        },
        additionalCondition: {
            404: [ 'message', 'Email не найден', '/result/error-check-email'],
        }
    },
    confirmEmail: {
        url: `${baseURL}/auth/confirm-email`,
        method: 'POST',
        body: {
            'email': '',
            'code': '',
        },
        responseCodes: {
            200: ['/auth/change-password', 'Ok'],
            // 400: ['/result/error-change-password', 'request error'],
            // 429: ['/result/error-change-password', 'too many requests'],
            // 500: ['/result/error-change-password', 'server error'],
        }
    },
    changePassword: {
        url: `${baseURL}/auth/change-password`,
        method: 'POST',
        body: {
            'password': '',
            'confirmPassword': '',
        },
        responseCodes: {
            200: ['/result/success-change-password', 'Ok'],
            400: ['/result/error-change-password', 'request error'],
            429: ['/result/error-change-password', 'too many requests'],
            500: ['/result/error-change-password', 'server error'],
        }
    }
}
