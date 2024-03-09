import AuthPage from "@pages/auth-page/auth-page.tsx";
import EntryWindow from "@components/blocks/auth/entry-window/entry-window.tsx";
import Login from "@components/blocks/auth/login/login.tsx";
import Registration from "@components/blocks/auth/registration/registration.tsx";
import {Route, Routes} from "react-router-dom";
import {Paths} from "../paths.ts";

export const NotAuthOnlyRoutes = () => (
    <Routes>
        <Route path={Paths.Auth} element={<AuthPage />}>
            <Route index={true} element={<EntryWindow children={<Login />} selectedTab={'/'} />} />
            <Route path={Paths.Registration} element={<EntryWindow children={<Registration />} selectedTab={'registration'} />} />
        </Route>
    </Routes>
)
