import './confirm-email.css';
import VerificationInput from "react-verification-input";
import {AttentionIcon} from "@constants/icons/icons.tsx";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../../../../routes/paths.ts";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {StoreInterface} from "@redux/config/redux-types.ts";
import {storeActionTypes} from "@redux/config/redux-constants.ts";


const ConfirmEmail = () => {
    const code = '123456';
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isCorrect, setIsCorrect] = useState(true);
    const email = useSelector((state: StoreInterface) => state.authData.email);
    const title = isCorrect ? 'Введите код для восстановления аккаунта' : 'Неверный код. Введите код для восстановления аккаунта';
    const additionalInfo = 'Не пришло письмо? Проверьте папку Спам.';
    const onComplete = (value: string) => {
        console.log(value);
        if (value === code) {
            setIsCorrect(true);
            dispatch({ type: storeActionTypes.codeWrite, payload: code});
            navigate(Paths.ChangePassword);
        } else {
            setIsCorrect(false);
        }
    }


    return (
        <div className="recovery-code">
            <AttentionIcon />
            <h2 className="recovery-code__title">{title}</h2>
            <div className="recovery-code__description">Мы отправили вам на e-mail <span>{email}</span> шестизначный код. Введите его в поле ниже.</div>
            <VerificationInput
                placeholder={''}
                onComplete={onComplete}
                classNames={{
                container: "container",
                character: "character",
                characterInactive: "character--inactive",
                characterSelected: "character--selected",
                characterFilled: "character--filled",
            }}
                data-test-id='verification-input'/>

            <div className="recovery-code__info">{additionalInfo}</div>
        </div>
    );
};

export default ConfirmEmail;
