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
import { ErrorMessagesInterface } from "../../../../../customTypes/content-types.ts";
import {useNavigate} from "react-router-dom";

const ErrorWindow = ({resultData}: {resultData: ErrorMessagesInterface}) => {
    const navigate = useNavigate();

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

    const buttonClassNames = resultData.icon === 'serverTroubles' ? 'error-window__btn serverTroubles' : 'error-window__btn';

    function nextPage() {
        if(resultData.autoRequest) {
            console.log('post request again');
        }
        navigate(resultData.redirect);
    }

    return <div className="error-window">
        {iconElement}
        <h2 className="error-window__title">{resultData.title}</h2>
        <p className="error-window__description">{resultData.description}</p>
        <Button type="primary" className={buttonClassNames} onClick={nextPage}>{resultData.buttonName}</Button>
    </div>
};

export default ErrorWindow;
