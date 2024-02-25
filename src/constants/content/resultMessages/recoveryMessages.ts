const recoveryMessages = {
    recoveryPin: {
        from: '/auth/registration',
        icon: 'attention',
        title: 'Введите код  для восстановления аккауанта',
        description: `Мы отправили вам на e-mail {template} шестизначный код. Введите его в поле ниже.`,
        additionalMessage: 'Не пришло письмо? Проверьте папку Спам.',
        url: '/auth/confirm-email',
        autoRequest: true,
        autoUpdate: true,
        redirect: ['','/auth/change-password']
    },
    recoveryIncorrectPin: {
        from: '/auth/confirm-email',
        icon: 'error',
        title: 'Неверный код. Введите код  для восстановления аккауанта',
        description: `Мы отправили вам на e-mail {template} шестизначный код. Введите его в поле ниже.`,
        additionalMessage: 'Не пришло письмо? Проверьте папку Спам.',
        url: '/auth/confirm-email',
        autoRequest: true,
        autoUpdate: true,
        redirect: ['/auth/confirm-email', '/auth/change-password']
    },
    recoveryConfirm: {
        from: '/auth/confirm-email',
        title: 'Восстановление аккауанта',
        additionalMessage: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
        url: '/auth/confirm-email',
        autoRequest: false,
        autoUpdate: false,
        redirect: ['/result/error-change-password', '/result/success-change-password']
    },
}

export default recoveryMessages
