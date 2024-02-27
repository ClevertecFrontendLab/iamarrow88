import {ApiInterface} from "../../customTypes/api-types.ts";

export const API_URLs: Record<string, ApiInterface> = {
    login: {
        url: '/auth/login',
        method: 'POST',
        body: {
            'email': '',
            'password': ''
        },
        responseCodes: {
            200: ['/main', 'Ok'],
            400: ['/result/error-login', 'request error'],
            429: ['/result/error-login', 'too many requests'],
            500: ['/result/error-login', 'server error'],
        }
    },
    registration: {
        url: '/auth/registration',
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
        url: '/auth/check-email',
        method: 'POST',
        body: {
            'email': '',
        },
        responseCodes: {
            200: ['', 'Ok'],
            400: ['', 'request error'],
            404: ['', 'user is not found'],
            429: ['', 'too many requests'],
            500: ['', 'server error'],
        }
    },
    confirmEmail: {
        url: '/auth/confirm-email',
        method: 'POST',
        body: {
            'email': '',
            'code': '',
        },
        responseCodes: {
            200: ['', 'Ok'],
            400: ['', 'request error'],
            429: ['', 'too many requests'],
            500: ['', 'server error'],
        }
    },
    changePassword: {
        url: '/auth/change-password',
        method: 'POST',
        body: {
            'password': '',
            'confirmPassword': '',
        },
        responseCodes: {
            200: ['', 'Ok'],
            400: ['', 'request error'],
            429: ['', 'too many requests'],
            500: ['', 'server error'],
        }
    }
}
