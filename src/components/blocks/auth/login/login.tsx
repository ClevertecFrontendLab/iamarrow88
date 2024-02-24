import {Button, Checkbox, Form, Input} from "antd";


const Login = () => {

    interface onFinishInterface {
        password: string,
        remember: boolean,
        username: string
    }
    const onFinish = (value: onFinishInterface) => {
        console.log(value)
    }
    return (
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                autoComplete="off"
                className="login"
                onFinish={onFinish}
            >
                <Form.Item
                    label=""
                    name="username"
                    rules={[{required: true, message: 'Please input your email!'}]}
                >
                    <Input
                        addonBefore="e-mail"

                    />
                </Form.Item>

                <Form.Item
                    label=""
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}

                >
                    <Input.Password
                        placeholder="Пароль"
                    />
                </Form.Item>

                <Form.Item name={["remember", "recovery"]} valuePropName="checked" className="login__actions">
                    <Checkbox>Запомнить меня</Checkbox>

                    <Button type="link" disabled={true}>Забыли пароль?</Button>
                </Form.Item>



                <Form.Item name="submit">
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        );
}

export default Login;

