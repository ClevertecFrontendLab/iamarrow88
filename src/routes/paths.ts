export enum Paths {
    MainPage = '/main', // main page
    Auth = '/auth', //таб "Вход". if (loggedIn) redirect to /main
    Registration = '/auth/registration', // 'Registration' tab. if (!loggedIn)
    ConfirmEmail = '/auth/confirm-email', //ввод кода для восстановления пароля
    ChangePassword = '/auth/change-password', //ввод нового пароля
    CheckEmail = '/auth/check-email', // ссылка "Забыли пароль?", только на табе "Вход" и после ввода e-mail
    Result = '/result', //прямой переход не возможен на этот роут и его дочерние роуты
    LoginError = '/result/error-login', // "Вход" -> ошибка -> “Повторить” -> редирект на страницу /auth
    RegistrationSuccess = '/result/success',
    RegistrationErrorUserExist = '/result/error-user-exist', // status 409 -> “Назад к регистрации” -> /auth/registration
    RegistrationError = '/result/error', //error !== 409 -> “Повторить” -> /auth/registration + new Request
    RecoveryNoExist = '/result/error-check-email-no-exist', // status 404 и message ‘Email не найден’ -> “Попробовать снова” -> /auth
    ErrorLogin = '/result/error-check-email', //с любым другим status, а также status 404 но без message ‘Email не найден' -> “Назад” -> /auth + new Request
    ChangePasswordError = '/result/error-change-password', //ошибка после ввода нового пароля. любой status ->  “Повторить” -> /change-password + new Request
    ChangePasswordSuccess = '/result/success-change-password', //пароль изменен
}
