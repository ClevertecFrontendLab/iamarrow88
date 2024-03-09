import './error-window.css';
import {
    AttentionIcon,
    SuccessIcon,
    ErrorIcon,
    ServerTroublesIcon,
    WarningIcon
} from "@constants/icons/icons.tsx";
import {ReactElement} from "react";
import {Button} from "antd";
import {ErrorMessagesInterface} from "../../../../../customTypes/content-types.ts";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import postRequest from "../../../../../servises/postRequest.ts";
import {getPureMap, makeUrl} from "@utils/utils.ts";
import {baseURL} from "@constants/common/common-constants.ts";
import {API_URLs} from "@constants/common/api-urls.ts";
import {AxiosResponse} from "axios";
import {indexesForPureFunctions} from "@constants/common/enums.ts";
import {StoreInterface} from "@redux/config/redux-types.ts";
import {StoreActionTypes} from "@redux/config/redux-constants.ts";
import isRedirectNeeded from "@utils/isRedirectNeeded.ts";
import useNavHistory from "@hooks/useNavHistory.tsx";

const ErrorWindow = ({resultData}: {resultData: ErrorMessagesInterface}) => {
    const userMail = useSelector((state: StoreInterface) => state.userData.email);
    const isRemembered =  useSelector((state: StoreInterface) => state.userData.isRemembered);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {location, prevLocation} = useNavHistory();
    const router = useSelector((state: StoreInterface) => state.router);
    console.log(router);
    console.log(isRedirectNeeded(location, prevLocation));

    let iconElement: ReactElement;

    switch (resultData.icon) {
        case 'error': {
            iconElement = <ErrorIcon />;
            break;
        }
        case "success": {
            iconElement = <SuccessIcon />;
            break;
        }
        case "serverTroubles": {
            iconElement = <ServerTroublesIcon />;
            break;
        }
        case "warning": {
            iconElement = <WarningIcon />;
            break;
        }
        case "attention": {
            iconElement = <AttentionIcon />;
            break;
        }

    }

    let datasetTestId = '';

    switch (resultData.url) {
        case '/result/success': {
            datasetTestId = 'registration-enter-button';
            break;
        }
        case '/result/error ': {
            datasetTestId = 'registration-retry-button';
            break;
        }
        case '/result/error-user-exist': {
            datasetTestId = 'registration-back-button';
            break;
        }
        case '/result/error-login': {
            datasetTestId = 'login-retry-button';
            break;
        }
        case '/result/error-check-email-no-exist': {
            datasetTestId = 'check-retry-button';
            break;
        }
        case '/result/error-check-email': {
            datasetTestId = 'check-back-button';
            break;
        }
        case '/result/error-change-password': {
            datasetTestId = 'change-retry-button';
            break;
        }
        case '/result/success-change-password': {
            datasetTestId = 'change-entry-button';
            break;
        }
    }

    const buttonClassNames = resultData.icon === 'serverTroubles' ? 'error-window__btn serverTroubles' : 'error-window__btn';

    function navToNextPage(status: number,
                           map: Record<number | string, string>,
                           response: AxiosResponse,
                           additionalCondition?: Record<number, [string, string, string]>) {
        if (response.data.accessToken && isRemembered) {
            localStorage.setItem('accessToken', response.data.accessToken);
        }

        if (status === 201 || status === 200) {
            dispatch({type: StoreActionTypes.loginTrue});

        }
        for (let i = 0; i < Object.keys(map).length; i += 1) {
            const currentStatus = +Object.keys(map)[i];
            const specialStatuses = Object.keys(additionalCondition as object);
            if (additionalCondition && specialStatuses.length !== 0) {
                if (status === currentStatus) {
                    navigate(map[currentStatus]);
                    break;
                }
            } else {
                if (status === currentStatus) {
                    if (additionalCondition && specialStatuses.includes(currentStatus.toString()) && response.data.message === 'Email не найден') {
                        navigate(additionalCondition[currentStatus][2]);
                    } else {
                        navigate(map[currentStatus]);
                    }
                    break;
                }
            }
        }
    }

    function nextPage() {
        if(resultData.autoRequest) {
            const body = {
                email: userMail,
            }
            postRequest(makeUrl(baseURL, API_URLs.checkEmail.url),
                body,
                (response) => navToNextPage(
                    response.status,
                    getPureMap(
                        API_URLs.checkEmail,
                        indexesForPureFunctions.urls),
                    response,
                    API_URLs.checkEmail.additionalCondition),
                    )
            console.log('post request again');
        }
        navigate(resultData.redirect);
    }

    return <div className="error-window">
        {iconElement}
        <h2 className="error-window__title">{resultData.title}</h2>
        <p className="error-window__description">{resultData.description}</p>
        <Button
            type="primary"
            className={buttonClassNames}
            onClick={nextPage}
            data-test-id={datasetTestId}>{resultData.buttonName}</Button>
    </div>
};

export default ErrorWindow;
