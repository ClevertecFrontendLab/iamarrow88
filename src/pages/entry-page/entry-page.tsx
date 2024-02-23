import './entry-page.css';
import {Outlet} from "react-router-dom";

const EntryPage = () => {
    return (
        <div className='entry-page'>
            <div className="content-block">
                <Outlet />
            </div>
        </div>
    );
};

export default EntryPage;
