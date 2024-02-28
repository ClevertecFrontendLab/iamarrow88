import {Navigate, Route, Routes} from 'react-router-dom';
import {Paths} from "./paths.ts";
import {MainPage} from "@pages/main-page";
import AuthPage from "@pages/auth-page/auth-page.tsx";
import Registration from "@components/blocks/auth/registration/registration.tsx";
import Login from "@components/blocks/auth/login/login.tsx";
import ChangePassword from "@components/blocks/auth/change-password/change-password.tsx";
import ConfirmEmail from "@components/blocks/auth/messages/confirm-email/confirm-email.tsx";
import EntryWindow from "@components/blocks/auth/entry-window/entry-window.tsx";
import ErrorWindow from "@components/blocks/auth/messages/error-window/error-window.tsx";
import resultMessages from "@constants/content/resultMessages/resultMessages.ts";

export const routes = (
    <Routes>
        <Route path={Paths.Root} element={<Navigate to={Paths.MainPage}/> }>
        </Route>
            <Route path={Paths.MainPage} element={<MainPage/>} />
            <Route path={Paths.Auth} element={<AuthPage/>}>
                <Route index={true} element={<EntryWindow children={<Login />} selectedTab={'/'} /> } />
                <Route path={Paths.Registration} element={<EntryWindow children={<Registration />} selectedTab={'registration'}/>} />
                <Route path={Paths.ConfirmEmail} element={<ConfirmEmail />} />
                <Route path={Paths.ChangePassword} element={<ChangePassword />} />
            </Route>

            <Route path={Paths.Result} element={<AuthPage />}>
                <Route path={Paths.LoginError} element={<ErrorWindow resultData={resultMessages.entryAnyError} />} />


                <Route path={Paths.RegistrationSuccess} element={<ErrorWindow resultData={resultMessages.RegistrationSuccess} />} />
                <Route path={Paths.RegistrationErrorUserExist} element={<ErrorWindow resultData={resultMessages.registrationError409} />} />
                <Route path={Paths.RegistrationOtherErrors} element={<ErrorWindow resultData={resultMessages.registrationOtherErrors} />} />
                <Route path={Paths.RecoveryNoExist} element={<ErrorWindow resultData={resultMessages.recoveryError404Message} />} />
                <Route path={Paths.ErrorLogin} element={<ErrorWindow resultData={resultMessages.recoveryOtherErrorsOrMessages} />} />
                <Route path={Paths.ChangePasswordError} element={<ErrorWindow resultData={resultMessages.recoveryServerError} />} />
                <Route path={Paths.ChangePasswordSuccess} element={<ErrorWindow resultData={resultMessages.recoverySuccess} />} />
            </Route>
    </Routes>
)
