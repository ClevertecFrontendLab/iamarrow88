import './entry-page.css';
import {Outlet} from "react-router-dom";
//{componentName}: {componentName: "Login" | "Registration" | "Recovery"}
const EntryPage = () => {
    return (
        <div className='entry-page'>
            <div className="blur"></div>
            <div className="content-block">
                <Outlet />
            </div>
        </div>
    );
};

export default EntryPage;
