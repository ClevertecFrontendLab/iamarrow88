import './registration.css';
import {Button, Form, Input} from "antd";
import {GooglePlusOutlined} from "@ant-design/icons";
import {OnFinishDataAuth} from "../../../../customTypes/content-types.ts";

const Registration = () => {

    const onFinish = (value: OnFinishDataAuth) => {
        console.log(value)
    }

    const validateMessages = {
        required: '',
        types: {
            email: '',
        },
    }
    return (
        <div>
            <Form
                name="email"
                wrapperCol={{span: 16}}
                autoComplete="off"
                className="registration"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <Form.Item
                    name="email"
                    rules={[{required: true}]}
                    className="email"
                >
                    <Input
                        addonBefore="e-mail"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{required: true, message: "Пароль не менее 8 символов с заглавной буквой и цифрой"}]}
                    className="password"
                    extra="Пароль не менее 8 символов с заглавной буквой и цифрой"

                >
                    <Input.Password
                        placeholder="Пароль"
                    />
                </Form.Item>
                <Form.Item className="password-repeat"
                           name="passwordRepeat"
                           rules={[{required: true, message: "Пароль не менее 8 символов с заглавной буквой и цифрой"}]}>

                    <Input.Password
                        placeholder="Повторите пароль"
                    />
                </Form.Item>


                <div className="buttons">
                    <Form.Item name="submit">
                        <Button type="primary" htmlType="submit">
                            Войти
                        </Button>
                    </Form.Item>
                    <Form.Item name="google">
                        <Button type="dashed" icon={<GooglePlusOutlined />}>Войти через Google</Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};

export default Registration;
