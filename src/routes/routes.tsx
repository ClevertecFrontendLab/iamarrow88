import { Route, Routes } from 'react-router-dom';
import {Paths} from "./paths.ts";
import {MainPage} from "@pages/main-page";
import EntryPage from "@pages/entry-page/entry-page.tsx";
import Login from "@components/blocks/auth/login/login.tsx";
import Registration from "@components/blocks/auth/registration/Registration.tsx";


export const routes = (
    <Routes>
        <Route path={Paths.MainPage} element={<MainPage/>} />
        <Route path={Paths.Auth} element={<EntryPage />}>
            <Route index={true} element={<Login />} />
            <Route path={Paths.Registration} element={<Registration />} />
            <Route path={Paths.ConfirmEmail} element={<Registration />} />
            <Route path={Paths.ChangePassword} element={<Registration />} />
            <Route path={Paths.CheckEmail} element={<Registration />} />
        </Route>
        <Route path={Paths.Result} element={<EntryPage />}>
            <Route index={true} element={<Login />} />
            <Route path={Paths.LoginError} element={<Registration />} />
            <Route path={Paths.RegistrationSuccess} element={<Registration />} />
            <Route path={Paths.RegistrationErrorUserExist} element={<Registration />} />
            <Route path={Paths.RegistrationError} element={<Registration />} />
            <Route path={Paths.RecoveryNoExist} element={<Registration />} />
            <Route path={Paths.ErrorLogin} element={<Registration />} />
            <Route path={Paths.ChangePasswordError} element={<Registration />} />
            <Route path={Paths.ChangePasswordSuccess} element={<Registration />} />
        </Route>
    </Routes>
)
