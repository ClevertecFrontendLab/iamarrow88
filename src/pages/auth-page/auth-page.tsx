import './auth-page.css';
import {Outlet} from "react-router-dom";
//{componentName}: {componentName: "Login" | "Registration" | "ChangePassword"}
const AuthPage = () => {
    return (
        <div className='entry-page'>
            <div className="blur"></div>
            <div className="content-block">
                <Outlet />
            </div>
        </div>
    );
};

export default AuthPage;
