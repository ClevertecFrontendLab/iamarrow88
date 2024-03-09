import {useEffect} from "react";
import {useAuth} from "../../../../../provider/AuthProvider.tsx";
import {Paths} from "../../../../../routes/paths.ts";
import {store} from "@redux/configure-store.ts";
import {StoreActionTypes} from "@redux/config/redux-constants.ts";
import Login from "@components/blocks/auth/login/login.tsx";
import {LoginDataCollector} from "../../../../../customTypes/function-types.ts";
import postRequest from "../../../../../servises/postRequest.ts";
import {API_URLs} from "@constants/common/api-urls.ts";
import {
    saveToken,
    setLoginTrue
} from "@utils/data-handlers/responses/responseHandlers.ts";
import {useNavigate} from "react-router-dom";

const LoginWrapper = () => {
    const { token, updateToken } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate(Paths.MainPage);
        }
    }, [token]);

    const goToNextPage = (currentPageName: string, status: number) => {
        const nextPageUrl = API_URLs[currentPageName].responseCodes[status][0];
        navigate(nextPageUrl);
    }

    const LoginAction: LoginDataCollector = (userMail: string, password: string, isRemembered: boolean) => {
        store.dispatch({ type: StoreActionTypes.emailWrite, payload: userMail });
        store.dispatch({ type: StoreActionTypes.passwordWrite, payload: password });
        store.dispatch({ type: StoreActionTypes.isRememberedWrite, payload: isRemembered });

        postRequest(API_URLs.login.url, { email: userMail, password: password})
            .then((response) => {
                console.log(response);
                if (response.data.accessToken && isRemembered) {
                    saveToken(response.data.accessToken);
                    if (updateToken) updateToken(response.data.accessToken);
                }
                if (response.status === 200) {
                    setLoginTrue();
                }
                goToNextPage('login', response.status);
            })
            .catch((error) => {
                goToNextPage('login', error.response.status);
            })
            .finally(() => store.dispatch({ type: StoreActionTypes.isLoadingFalse }));
    }
    const RecoveryAction = (userMail: string) => {
        store.dispatch({ type: StoreActionTypes.emailWrite, payload: userMail });

        postRequest(API_URLs.checkEmail.url, { email: userMail })
            .then((response) => {
                goToNextPage('checkEmail', response.status);
            })
            .catch((error) => {
                goToNextPage('checkEmail', error.response.status);
            })
    }
    return (
        <Login loginCallback={LoginAction} recoveryCallback={RecoveryAction}/>
    );
};

export default LoginWrapper;
