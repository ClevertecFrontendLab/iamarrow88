import './change-password.css';
import {Button, Form, Input} from "antd";
import {OnFinishDataAuth} from "../../../../customTypes/content-types.ts";
const ChangePassword = () => {

    const onFinish = (value: OnFinishDataAuth) => {
        console.log(value);
    }
    return (
        <div className="change-password">
            <h2 className="change-password__title">Восстановление аккаунта</h2>
            <Form
                name="email"
                wrapperCol={{span: 16}}
                autoComplete="off"
                className="registration"
                onFinish={onFinish}
                style={{
                    maxWidth: "368px"
                }}
            >

                <Form.Item
                    name="password"
                    rules={[{required: true, message: "Пароль не менее 8 символов с заглавной буквой и цифрой"}]}
                    className="password"
                    extra="Пароль не менее 8 символов с заглавной буквой и цифрой"

                >
                    <Input.Password
                        placeholder="Новый пароль"
                    />
                </Form.Item>
                <Form.Item className="password-repeat"
                           name="passwordRepeat"
                           rules={[{required: true, message: "Пароль не менее 8 символов с заглавной буквой и цифрой"}]}>

                    <Input.Password
                        placeholder="Повторите пароль"
                    />
                </Form.Item>

                <Form.Item name="submit" className="button">
                    <Button type="primary" htmlType="submit">
                        Сохранить
                    </Button>
                </Form.Item>
            </Form>

        </div>
    );
};

export default ChangePassword;
