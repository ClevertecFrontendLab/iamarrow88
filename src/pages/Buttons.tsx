import {Button} from "antd";
import {Link} from "react-router-dom";

const Buttons = () => {
    return (
        <div className="buttons-nav">
            <Button type="primary">
                <Link to='/auth'>Авторизация</Link>
            </Button>
            <Button type="primary">
                <Link to='/auth/registration'>Registration</Link>
            </Button>
            <Button type="primary">
                <Link to='/auth/confirm-email'>ConfirmEmail</Link>
            </Button>

            <Button type="primary">
                <Link to='/auth/change-password'>ChangePassword</Link>
            </Button>
            <Button type="primary">
                <Link to='/result/error-login'>LoginError</Link>
            </Button>
            <Button type="primary">
                <Link to='/result/success'>RegistrationSuccess</Link>
            </Button>
            <Button type="primary">
                <Link to='/result/error-user-exist'>RegistrationErrorUserExist</Link>
            </Button>
            <Button type="primary">
                <Link to='/result/error'>RegistrationError</Link>
            </Button>
            <Button type="primary">
                <Link to='/result/error-check-email-no-exist'>RecoveryNoExist</Link>
            </Button>
            <Button type="primary">
                <Link to='/result/error-check-email'>ErrorLogin</Link>
            </Button>
            <Button type="primary">
                <Link to='/result/error-change-password'>ChangePasswordError</Link>
            </Button>
            <Button type="primary">
                <Link to='/result/success-change-password'>ChangePasswordSuccess</Link>
            </Button>
        </div>
    );
};

export default Buttons;
