import {useDispatch, useSelector} from "react-redux";
import { ReactElement } from "react";
import { StoreActionTypes } from "@redux/config/redux-constants.ts";
import { checkIsLogginIn } from '@utils/utils.ts';
import './subApp.css';
import {StoreInterface} from "@redux/config/redux-types.ts";
import LoaderWrapper from "@components/UI/loader/wrapper/loader-wrapper.tsx";

const SubApp = ({ children }: { children: ReactElement }) => {
    const dispatch = useDispatch();
    if (checkIsLogginIn()) {
        dispatch({ type: StoreActionTypes.loginTrue })
    }

    const isLoading = useSelector((state: StoreInterface) => state.page.isLoading);
    console.log(isLoading);
    return (
        <div className="root-body">
            <>
                {children}
                {isLoading ? <LoaderWrapper className={'visible'}/> : <LoaderWrapper className={''}/>}
            </>
        </div>
    );
};

export default SubApp;
