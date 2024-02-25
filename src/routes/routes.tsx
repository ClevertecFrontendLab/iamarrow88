import { Route, Routes } from 'react-router-dom';
import {Paths} from "./paths.ts";
import {MainPage} from "@pages/main-page";
import EntryPage from "@pages/entry-page/entry-page.tsx";
import Registration from "@components/blocks/auth/registration/registration.tsx";
import Login from "@components/blocks/auth/login/login.tsx";
import Recovery from "@components/blocks/auth/recovery/recovery.tsx";
import ConfirmEmail from "@components/blocks/auth/messages/confirmEmail/confirmEmail.tsx";
import EntryWindow from "@components/blocks/auth/entry-window/entry-window.tsx";
import ErrorWindow from "@components/blocks/auth/messages/error-window/error-window.tsx";
import resultMessages from "@constants/content/resultMessages/resultMessages.ts";

export const routes = (
    <Routes>
        <Route path={Paths.Root}>
            <Route path={Paths.MainPage} element={<MainPage/>} />
            <Route path={Paths.Auth} element={<EntryPage/>}>
                <Route index={true} element={<EntryWindow children={<Login />} /> } />
                <Route path={Paths.Registration} element={<EntryWindow children={<Registration />} />} />
                <Route path={Paths.ConfirmEmail} element={<ConfirmEmail />} />
                <Route path={Paths.ChangePassword} element={<EntryWindow children={<Recovery />} />} />
            </Route>

            <Route path={Paths.Result} element={<EntryPage />}>
                <Route path={Paths.LoginError} element={<ErrorWindow icon={resultMessages.entryAnyError.icon}
                                                                     title={resultMessages.entryAnyError.title}
                                                                     buttonName={resultMessages.entryAnyError.buttonName}
                                                                     description={resultMessages.entryAnyError.description} />} />


                <Route path={Paths.RegistrationSuccess} element={<ErrorWindow icon={resultMessages.RegistrationSuccess.icon}
                                                                              title={resultMessages.RegistrationSuccess.title}
                                                                              buttonName={resultMessages.RegistrationSuccess.buttonName}
                                                                              description={resultMessages.RegistrationSuccess.description} />} />
                <Route path={Paths.RegistrationErrorUserExist} element={<ErrorWindow icon={resultMessages.registrationError409.icon}
                                                                                     title={resultMessages.registrationError409.title}
                                                                                     buttonName={resultMessages.registrationError409.buttonName}
                                                                                     description={resultMessages.registrationError409.description} />} />
                <Route path={Paths.RegistrationOtherErrors} element={<ErrorWindow icon={resultMessages.registrationOtherErrors.icon}
                                                                                  title={resultMessages.registrationOtherErrors.title}
                                                                                  buttonName={resultMessages.registrationOtherErrors.buttonName}
                                                                                  description={resultMessages.registrationOtherErrors.description} />} />
                <Route path={Paths.RecoveryNoExist} element={<ErrorWindow icon={resultMessages.recoveryError404Message.icon}
                                                                          title={resultMessages.recoveryError404Message.title}
                                                                          buttonName={resultMessages.recoveryError404Message.buttonName}
                                                                          description={resultMessages.recoveryError404Message.description} />} />
                <Route path={Paths.ErrorLogin} element={<ErrorWindow icon={resultMessages.recoveryOtherErrorsOrMessages.icon}
                                                                     title={resultMessages.recoveryOtherErrorsOrMessages.title}
                                                                     buttonName={resultMessages.recoveryOtherErrorsOrMessages.buttonName}
                                                                     description={resultMessages.recoveryOtherErrorsOrMessages.description} />} />
                <Route path={Paths.ChangePasswordError} element={<ErrorWindow icon={resultMessages.recoveryServerError.icon}
                                                                              title={resultMessages.recoveryServerError.title}
                                                                              buttonName={resultMessages.recoveryServerError.buttonName}
                                                                              description={resultMessages.recoveryServerError.description} />} />
                <Route path={Paths.ChangePasswordSuccess} element={<ErrorWindow icon={resultMessages.recoverySuccess.icon}
                                                                                title={resultMessages.recoverySuccess.title}
                                                                                buttonName={resultMessages.recoverySuccess.buttonName}
                                                                                description={resultMessages.recoverySuccess.description} />} />

            </Route>
        </Route>


    </Routes>
)
