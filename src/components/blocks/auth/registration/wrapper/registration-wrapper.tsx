import './registration-wrapper.css';
import Registration from "@components/blocks/auth/registration/registration.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {Paths} from "../../../../../routes/paths.ts";
import {useAuth} from "../../../../../provider/AuthProvider.tsx";
import {API_URLs} from "@constants/common/api-urls.ts";
import postRequest from "../../../../../servises/postRequest.ts";
import {store} from "@redux/configure-store.ts";
import {StoreActionTypes} from "@redux/config/redux-constants.ts";

const RegistrationWrapper = () => {
    const { token } = useAuth();
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

    const registrationAction = (email: string, password: string) => {
        console.log(email);
        console.log(password);
        postRequest(API_URLs.registration.url, {email: email, password: password})
            .then((response) => {
                console.log(response);
                if (response.status === 201) {
                    goToNextPage('registration', 201);
                }
            })
            .catch((error) => {
                goToNextPage('registration', error.response.status);
            })
            .finally(() => store.dispatch({ type: StoreActionTypes.isLoadingFalse }))

    }


    return (
        <Registration registrationCallback={registrationAction}/>
    );
};

export default RegistrationWrapper;
