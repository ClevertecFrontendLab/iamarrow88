import { useDispatch } from "react-redux";
import { ReactElement } from "react";
import { StoreActionTypes } from "@redux/config/redux-constants.ts";
import { checkIsLogginIn } from '@utils/utils.ts';
import './subApp.css';

const SubApp = ({ children }: { children: ReactElement }) => {


    const dispatch = useDispatch();
    if (checkIsLogginIn()) {
        dispatch({ type: StoreActionTypes.loginTrue })
    }
    return (
        <div className="root-body">
            {children}
        </div>
    );
};

export default SubApp;
