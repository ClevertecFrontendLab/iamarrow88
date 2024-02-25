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
import {MessageIconsTypes} from "../../../../../customTypes/content-types.ts";

const ErrorWindow = ({icon,
                         title,
                         description,
                         buttonName}: {icon: MessageIconsTypes, title: string, description: string, buttonName: string}) => {
    let iconElement: ReactElement;

    switch (icon) {
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

    const buttonClassNames = icon === 'serverTroubles' ? 'error-window__btn serverTroubles' : 'error-window__btn';

    return <div className="error-window">
        {iconElement}
        <h2 className="error-window__title">{title}</h2>
        <p className="error-window__description">{description}</p>
        <Button type="primary" className={buttonClassNames}>{buttonName}</Button>
    </div>
};

export default ErrorWindow;
