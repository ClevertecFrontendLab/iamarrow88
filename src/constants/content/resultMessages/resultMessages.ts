import {ErrorMessagesInterface} from "../../../customTypes/content-types.ts";

const errorMessages: Record<string, ErrorMessagesInterface> = {
    entryAnyError: {
        from: '/auth',
        icon: 'warning',
        title: 'Вход не выполнен',
        description: 'Что-то пошло не так. Попробуйте еще раз',
        buttonName: 'Повторить',
        url: '/result/error-login',
        autoRequest: false,
        redirect: '/auth' // if autoRequest: true
    },
    RegistrationSuccess: {
        from: '/auth/registration',
        icon: 'success',
        title: 'Регистрация успешна',
        description: 'Регистрация прошла успешно. Зайдите  в приложение, используя свои e-mail и пароль.',
        buttonName: 'Войти',
        url: '/result/success',
        autoRequest: false,
        redirect: '/auth'
    },
    registrationError409: {
        from: '/auth/registration',
        icon: 'error',
        title: 'Данные не сохранились',
        description: 'Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.',
        buttonName: 'Назад к регистрации',
        url: '/result/error-user-exist',
        autoRequest: false,
        redirect: '/auth/registration'
    },
    registrationOtherErrors: {
        from: '/auth/registration',
        icon: 'error',
        title: 'Данные не сохранились',
        description: 'Что-то пошло не так и ваша регистрация  не завершилась. Попробуйте ещё раз.',
        buttonName: 'Повторить',
        url: '/result/error',
        autoRequest: true,
        requestTo: 'https://marathon-api.clevertec.ru/auth/registration',
        redirect: '/auth/registration' // if autoRequest: true
    },
    recoveryError404Message: {
        from: '/auth',
        icon: 'error',
        title: 'Такой e-mail не зарегистрирован',
        description: 'Мы не нашли в базе вашего e-mail. Попробуйте  войти с другим e-mail.',
        buttonName: 'Попробовать снова',
        url: '/result/error-check-email-no-exist',
        autoRequest: false,
        redirect: '/auth/registration'
    },
    recoveryOtherErrorsOrMessages: {
        from: '/auth',
        icon: 'serverTroubles',
        title: 'Что-то пошло не так',
        description: 'Произошла ошибка, попробуйте отправить форму ещё раз.',
        buttonName: 'Назад',
        url: '/result/error-check-email',
        autoRequest: true,
        requestTo: 'https://marathon-api.clevertec.ru/auth/check-email',
        redirect: '/auth/registration',
    },
    recoveryServerError: {
        from: '/auth/change-password',
        icon: 'error',
        title: 'Данные не сохранились',
        description: `Что-то пошло не так. Попробуйте ещё раз`,
        buttonName: 'Повторить',
        url: '/result/error-change-password',
        autoRequest: true,
        requestTo: 'https://marathon-api.clevertec.ru/auth/change-password',
        redirect: '/auth/change-password'
    },
    recoverySuccess: {
        from: '/auth/change-password',
        icon: 'success',
        title: 'Пароль успешно изменен',
        description: `Теперь можно войти в аккаунт, используя свой логин и новый пароль`,
        buttonName: 'Вход',
        url: '/result/success-change-password',
        autoRequest: false,
        redirect: '/auth/change-password'
    },
}

export default errorMessages;
