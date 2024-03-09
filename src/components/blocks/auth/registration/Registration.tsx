import './registration.css';
import {Button, Form, Input} from "antd";
import {GooglePlusOutlined} from "@ant-design/icons";
import { OnFinishRegistration } from "../../../../customTypes/content-types.ts";
import postRequest from "../../../../servises/postRequest.ts";
import {baseURL, emailCheckRegex, passwordCheckRegex} from "@constants/common/common-constants.ts";
import {useNavigate} from "react-router-dom";
import {getPureMap, makeUrl} from "@utils/utils.ts";
import {API_URLs} from "@constants/common/api-urls.ts";
import {AxiosResponse} from "axios";
import {indexesForPureFunctions} from "@constants/common/enums.ts";
import {useEffect} from "react";
import {Paths} from "../../../../routes/paths.ts";
import {useAuth} from "../../../../provider/AuthProvider.tsx";
const Registration = () => {

    const { token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate(Paths.MainPage);
        }
    }, [token]);

    function navToNextPage(status: number, registrationMap: Record<string, string>) {
        for (let i = 0; i < Object.keys(registrationMap).length; i += 1) {
            if (status === +Object.keys(registrationMap)[i]) {
                navigate(registrationMap[Object.keys(registrationMap)[i]]);
                break;
            }
        }
    }
    const onFinish = (value: OnFinishRegistration) => {
        const {email, password} = value;
        if (email) {
            const options = {
                email: email,
                password: password
            }
            //'https://marathon-api.clevertec.ru/auth/registration'
            postRequest(makeUrl(baseURL, API_URLs.registration.url),
                options,
                (response: AxiosResponse) => navToNextPage(response.status, getPureMap(API_URLs.registration, indexesForPureFunctions.urls)))
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
