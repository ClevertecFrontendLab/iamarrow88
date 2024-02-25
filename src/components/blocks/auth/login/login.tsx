import {Button, Checkbox, Form, Input} from "antd";
import './login.css';
import { GooglePlusOutlined } from "@ant-design/icons";
import { OnFinishDataAuth } from '../../../../customTypes/content-types.ts'

const Login = () => {

    const onFinish = (value: OnFinishDataAuth) => {
        console.log(value)
    }

    const validateMessages = {
        required: '',
        types: {
            email: '',
        },
    }

    const form  = Form.useForm();
    console.log(form);
    return (
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                autoComplete="off"
                className="login"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <Form.Item
                    label=""
                    name="email"
                    rules={[{required: true}]}
                    className="email"
                >
                    <Input
                        addonBefore="e-mail"

                    />
                </Form.Item>

                <Form.Item
                    label=""
                    name="password"
                    rules={[{required: true, message: "Пароль не менее 8 символов с заглавной буквой и цифрой"}]}
                    className="password"

                >
                    <Input.Password
                        placeholder="Пароль"
                    />
                </Form.Item>

                <div className="actions-wrapper">
                    <Form.Item className="actions__remember" name="remember" valuePropName="checked">
                        <Checkbox className="remember">Запомнить меня</Checkbox>
                    </Form.Item>
                    <Form.Item className="actions__recovery" name="recovery" valuePropName="checked">
                        <Button type="link" disabled={true}>Забыли пароль?</Button>
                    </Form.Item>
                </div>

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
        );
}

export default Login;

