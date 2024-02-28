import {useDispatch} from "react-redux";
import {ReactElement} from "react";
import {storeActionTypes} from "@redux/config/redux-constants.ts";

const SubApp = ({children}: {children: ReactElement}) => {
    function checkIsLogginIn() {
        return !!localStorage.getItem('accessToken');
    }

    const dispatch = useDispatch();
    if (checkIsLogginIn()) {
        dispatch({ type: storeActionTypes.loginTrue})
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default SubApp;
