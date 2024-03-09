import ProtectedRoute from "./ProtectedRoute.tsx";
import {MainPage} from "@pages/main-page";
import Feedbacks from "@pages/feedbacks/feedbacks.tsx";
import {Route, Routes} from "react-router-dom";
import {Paths} from "../paths.ts";

export const AuthOnlyRoutes = () => (
    <Routes>
        <Route path={Paths.Root} element={<ProtectedRoute />}>
            <Route path={Paths.MainPage} element={<MainPage />} />
            <Route path={Paths.Feedbacks} element={<Feedbacks />} />
        </Route>
    </Routes>
)
