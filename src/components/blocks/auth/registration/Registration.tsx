import './registration.css';
import {Button, Form, Input} from "antd";
import {GooglePlusOutlined} from "@ant-design/icons";
import {
    OnFinishRegistration,
    RegistrationMapInterface
} from "../../../../customTypes/content-types.ts";
import postRequest from "../../../../servises/postRequest.ts";
import {emailCheckRegex, passwordCheckRegex} from "@constants/common/common-constants.ts";
import {registrationMap} from "@constants/common/authPathMaps.ts";
import {useNavigate} from "react-router-dom";
const Registration = () => {

    const navigate = useNavigate()

    function navToNextPage(status: number, registrationMap: RegistrationMapInterface ) {
        for (let i = 0; i < Object.keys(registrationMap).length; i += 1) {
            if (status === +Object.keys(registrationMap)[i]) {
                navigate(registrationMap[Object.keys(registrationMap)[i]]);
                break;
            }
        }
    }
    const onFinish = (value: OnFinishRegistration) => {
        const {email, password} = value;
        const options = {
            email: email,
            password: password
        }
       postRequest('https://marathon-api.clevertec.ru/auth/registration', options, (status: number) => navToNextPage(status, registrationMap))
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
                    rules={[
                        {
                            required: true,
                            message: '',
                        },{
                            pattern: emailCheckRegex,
                            message: 'Please enter a valid e-mail',
                        }
                    ]}
                    className="email"
                >
                    <Input
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
                    <Input.Password
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
