import {useDispatch} from "react-redux";
import {storeActionTypes} from "./customTypes/content-types.ts";
import {ReactElement} from "react";

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
