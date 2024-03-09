type LocationName = string;
type RedirectConditions = {
    location: string,
    prevLocation: string
}

const ErrorsRedirectingConditions: Record<LocationName, RedirectConditions> = {
    '/result/error-login': {
        location: '/result/error-login',
        prevLocation: '/auth'
    },
    '/result/success': {
        location: '/result/success',
        prevLocation: '/auth/registration'
    },
    '/result/error-user-exist': {
        location: '/result/error-user-exist',
        prevLocation: '/auth/registration'
    },
    '/result/error': {
        location: '/result/error',
        prevLocation: '/auth/registration'
    },
    '/result/error-check-email-no-exist': {
        location: '/result/error-check-email-no-exist',
        prevLocation: '/auth'
    },
    '/result/error-check-email': {
        location: '/result/error-check-email',
        prevLocation: '/auth'
    },
    '/auth/confirm-email': {
        location: '/auth/confirm-email',
        prevLocation: '/auth'
    },
    '/auth/change-password': {
        location: '/auth/change-password',
        prevLocation: '/auth/confirm-email'
    },
    '/result/success-change-password': {
        location: '/result/success-change-password',
        prevLocation: '/auth/change-password'
    },
    '/result/error-change-password': {
        location: '/result/error-change-password',
        prevLocation: '/auth/change-password'
    }
};

const pathToRedirect = '/auth';

export {ErrorsRedirectingConditions, pathToRedirect};
