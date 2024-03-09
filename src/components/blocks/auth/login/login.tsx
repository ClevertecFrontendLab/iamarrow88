import {Button, Checkbox, Form, Input} from "antd";
import './login.css';
import { GooglePlusOutlined } from "@ant-design/icons";
import {OnFinishDataAuth} from '../../../../customTypes/content-types.ts'
import {emailCheckRegex, passwordCheckRegex} from "@constants/common/common-constants.ts";
import {useState} from "react";
import {LoginDataCollector, RecoveryDataCollector} from "../../../../customTypes/function-types.ts";
import { FieldData } from "C:/Users/Nastya/WebstormProjects/clevertec/node_modules/rc-field-form/lib/interface";

const Login = ({loginCallback, recoveryCallback}: {loginCallback: LoginDataCollector, recoveryCallback: RecoveryDataCollector}) => {
    const [ isRecoveryDisable, setIsRecoveryDisable ] = useState(true);
    const [ isLoginDisable, setIsLoginDisable ] = useState(false);
    const [email, setEmail] = useState('');
    const onFinish = (value: OnFinishDataAuth) => {
        if (value.email) {
            if (value.remember) {
                loginCallback(value.email, value.password, value.remember);
            } else {
                loginCallback(value.email, value.password, false);
            }
        } else {
            console.log('no email');
        }
    }

    const recoveryHandler = () => {
        recoveryCallback(email);
    }

    const validateValues = (values: FieldData[]) => {
        const fieldName = values[0].name[0];
        const fieldValue = values[0].value;

        if (fieldName === 'email') {
            setEmail(fieldValue);
            const isValidated = emailCheckRegex.test(fieldValue);
            if (isRecoveryDisable === isValidated) {
                setIsRecoveryDisable(!isValidated);
            }
        } else if (fieldName === 'password') {
            const isValidated = passwordCheckRegex.test(fieldValue);
            if (isValidated) {
                if (isLoginDisable !== isValidated) {
                    setIsLoginDisable(!isRecoveryDisable);
                }
            }
        } else {
            console.log('getting form value error');
        }
    }

    const validateMessages = {
        required: '',
        types: {
            email: '',
        },
    }

//value: { value: SetStateAction<string>; name: string[]}[]


    return (
            <Form
                name="login"
                initialValues={{remember: true}}
                autoComplete="on"
                className="login"
                onFinish={onFinish}
                validateMessages={validateMessages}
                onFieldsChange={validateValues}
            >
                <Form.Item
                    label=""
                    name="email"
                    rules={[
                    {
                        required: true,
                        message: '',
                    },{
                        pattern: emailCheckRegex,
                        message: '',
                    }
                ]}
                    className="email"

                >
                    <Input data-test-id='login-email'
                            addonBefore="e-mail"
                           autoComplete="username"
                           className="input"

                    />
                </Form.Item>

                <Form.Item
                    label=""
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Пароль не менее 8 символов с заглавной буквой и цифро',
                        },{
                            pattern: passwordCheckRegex,
                            message: 'Пароль не менее 8 символов с заглавной буквой и цифрой',
                        }
                    ]}
                    className="password"
                >
                    <Input.Password data-test-id='login-password'
                                    placeholder="Пароль"
                                    autoComplete="password"
                                    className="input"
                    />
                </Form.Item>

                <div className="actions-wrapper">
                    <Form.Item className="actions__remember" name="remember" valuePropName="checked">
                        <Checkbox className="remember" data-test-id='login-remember'>Запомнить меня</Checkbox>
                    </Form.Item>
                    <Form.Item className="actions__recovery"
                               name="recovery"
                               valuePropName="checked">
                        <Button type="link"
                                onClick={recoveryHandler}
                                data-test-id='login-forgot-button'
                                disabled={isRecoveryDisable}
                        >Забыли пароль?</Button>
                    </Form.Item>
                </div>

                <div className="buttons">
                    <Form.Item name="submit">
                        <Button type="primary"
                                htmlType="submit"
                                data-test-id='login-submit-button'>
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

