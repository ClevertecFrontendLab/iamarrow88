export enum Paths {
    MainPage = 'main/', // main page
    Auth = 'auth/', //таб "Вход". if (loggedIn) redirect to /main
    Registration = 'registration', // 'Registration' tab. if (!loggedIn)
    ConfirmEmail = 'confirm-email', //ввод кода для восстановления пароля
    ChangePassword = 'change-password', //ввод нового пароля
    CheckEmail = 'check-email', // ссылка "Забыли пароль?", только на табе "Вход" и после ввода e-mail
    Result = 'result/', //прямой переход не возможен на этот роут и его дочерние роуты
    LoginError = 'error-login', // "Вход" -> ошибка -> “Повторить” -> редирект на страницу /auth
    RegistrationSuccess = 'success',
    RegistrationErrorUserExist = 'error-user-exist', // status 409 -> “Назад к регистрации” -> /auth/registration
    RegistrationError = 'error', //error !== 409 -> “Повторить” -> /auth/registration + new Request
    RecoveryNoExist = 'error-check-email-no-exist', // status 404 и message ‘Email не найден’ -> “Попробовать снова” -> /auth
    ErrorLogin = 'error-check-email', //с любым другим status, а также status 404 но без message ‘Email не найден' -> “Назад” -> /auth + new Request
    ChangePasswordError = 'error-change-password', //ошибка после ввода нового пароля. любой status ->  “Повторить” -> /change-password + new Request
    ChangePasswordSuccess = 'success-change-password', //пароль изменен
}
