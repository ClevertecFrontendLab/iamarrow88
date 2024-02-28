import './confirm-email.css';
import VerificationInput from "react-verification-input";
import {AttentionIcon} from "@constants/icons/icons.tsx";
import {StoreInterface} from "@redux/config/redux-types.ts";
import {storeActionTypes} from "@redux/config/redux-constants.ts";


const ConfirmEmail = () => {
    const onComplete = (value: []) => {
        console.log(value);
    }

    const email = 'hey_jozzy@mail.ru'
    return (
        <div className="recovery-code">
            <AttentionIcon />
            <h2 className="recovery-code__title">Введите код  для восстановления аккауанта</h2>
            <div className="recovery-code__description">Мы отправили вам на e-mail <span>{email}</span> шестизначный код. Введите его в поле ниже.</div>
            <VerificationInput placeholder={''} onComplete={onComplete} classNames={{
                container: "container",
                character: "character",
                characterInactive: "character--inactive",
                characterSelected: "character--selected",
                characterFilled: "character--filled",
            }} />

            <div className="recovery-code__info">
                Не пришло письмо? Проверьте папку Спам.
            </div>
        </div>
    );
};

export default ConfirmEmail;
