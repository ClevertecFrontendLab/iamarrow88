import './registration.css';
import {Button, Form, Input} from "antd";
import {GooglePlusOutlined} from "@ant-design/icons";
import { OnFinishRegistration } from "../../../../customTypes/content-types.ts";
import {emailCheckRegex, passwordCheckRegex} from "@constants/common/common-constants.ts";

const Registration = ({registrationCallback}: {registrationCallback: (email: string, password: string) => void}) => {
    const onFinish = (value: OnFinishRegistration) => {
        console.log(value);
        const {email, password} = value;
        if (email && password) {
            registrationCallback(email, password);
        } else {
            console.log('registration error: no email');
        }
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
                    <Input data-test-id='registration-email'
                        addonBefore="e-mail"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '',
                        },{
                            pattern: passwordCheckRegex,
                            message: 'Пароль не менее 8 символов с заглавной буквой и цифрой',
                        }
                    ]}
                    className="password"
                    extra="Пароль не менее 8 символов с заглавной буквой и цифрой"

                >
                    <Input.Password data-test-id='registration-password'
                        placeholder="Пароль"
                    />
                </Form.Item>
                <Form.Item className="password-repeat"
                           name="passwordRepeat"
                           dependencies={['password']}
                           rules={[
                               {
                                   required: true, message: "Пароль не менее 8 символов с заглавной буквой и цифрой"
                               },
                               ({ getFieldValue }) => ({
                                   validator(_, value) {
                                   if (!value || getFieldValue('password') === value) {
                                   return Promise.resolve();
                               }
                                   return Promise.reject(new Error('Пароли не совпадают'));
                               },
                               })
                           ]}>

                    <Input.Password data-test-id='registration-confirm-password'
                        placeholder="Повторите пароль"
                    />
                </Form.Item>


                <div className="buttons">
                    <Form.Item name="submit">
                        <Button type="primary" htmlType="submit" data-test-id='registration-submit-button'>
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
