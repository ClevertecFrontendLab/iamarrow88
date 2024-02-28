import {Button, Checkbox, Form, Input} from "antd";
import './login.css';
import { GooglePlusOutlined } from "@ant-design/icons";
import {OnFinishDataAuth} from '../../../../customTypes/content-types.ts'
import {API_URLs} from "@constants/common/api-urls.ts";
import postRequest from "../../../../servises/postRequest.ts";
import {getPureMap, makeUrl} from "@utils/utils.ts";
import {baseURL, emailCheckRegex, passwordCheckRegex} from "@constants/common/common-constants.ts";
import {useNavigate} from "react-router-dom";
import {indexesForPureFunctions} from "@constants/common/enums.ts";
import {AxiosResponse} from "axios";
import {useState} from "react";
import {useDispatch} from "react-redux";
import useForm from "antd/es/form/hooks/useForm";
import {storeActionTypes} from "@redux/config/redux-constants.ts";

const Login = () => {
    const [remember, setRemember] = useState(true);
    const [userMail, setUserMail] = useState('');
    const [isDisabledEnter, setIsDisabledEnter] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ form ] = useForm();


    function navToNextPage(status: number,
                           map: Record<number | string, string>,
                           response: AxiosResponse,
                           additionalCondition?: Record<number, [string, string, string]>) {
        if (response.data.accessToken && remember) {
            localStorage.setItem('accessToken', response.data.accessToken);
        }

        console.log(response);

        if (status === 201 || status === 200) {
            dispatch({type: storeActionTypes.loginTrue});

        }
        for (let i = 0; i < Object.keys(map).length; i += 1) {
            const currentStatus = +Object.keys(map)[i];
            const specialStatuses = Object.keys(additionalCondition as object);
            if (additionalCondition && specialStatuses.length !== 0) {
                if (status === currentStatus) {
                    navigate(map[currentStatus]);
                    break;
                }
            } else {
                if (status === currentStatus) {
                    if (additionalCondition && specialStatuses.includes(currentStatus.toString()) && response.data.message === 'Email не найден') {
                        navigate(additionalCondition[currentStatus][2]);
                    } else {
                        navigate(map[currentStatus]);
                    }
                    break;
                }
            }
        }
    }

    const onFinish = (value: OnFinishDataAuth) => {
        if (value.email) {
            const body = {
                email: value.email,
                password: value.password
            }

            if (value.remember !== remember) {
                setRemember(remember);
                dispatch({ type: storeActionTypes.isRememberedWrite, payload: remember })
            }

            postRequest(makeUrl(baseURL, API_URLs.login.url),
                body,
                (response: AxiosResponse) => navToNextPage(response.status, getPureMap(API_URLs.login, indexesForPureFunctions.urls), response))
        } else {
            console.log('no email');

        }

    }

    const validateMessages = {
        required: '',
        types: {
            email: '',
        },
    }

//value: { value: SetStateAction<string>; name: string[]}[]
    function checkForm(fields: FieldData[]) {
        console.log(form.isFieldValidating('email'));
        const fieldName = fields[0].name[0];
        //const isValidate = emailCheckRegex.test(value[0].value);

        if (fieldName === 'email') {
            setUserMail(fields[0].value);
        }
    }

    function goToRecovery() {
        console.log('send code request');
        dispatch({ type: storeActionTypes.emailWrite, payload: userMail});
        const body = {
            email: userMail
        }
        postRequest(
            makeUrl(baseURL, API_URLs.checkEmail.url),
            body,
            (response: AxiosResponse) => navToNextPage(response.status,
                getPureMap(
                API_URLs.checkEmail,
                indexesForPureFunctions.urls),
                response,
                API_URLs.checkEmail.additionalCondition),
            );
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
                validateMessages={validateMessages}
                onFieldsChange={checkForm}
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

                    />
                </Form.Item>

                <Form.Item
                    label=""
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
                >
                    <Input.Password data-test-id='login-password'
                        placeholder="Пароль"
                    />
                </Form.Item>

                <div className="actions-wrapper">
                    <Form.Item className="actions__remember" name="remember" valuePropName="checked">
                        <Checkbox className="remember" data-test-id='login-remember'>Запомнить меня</Checkbox>
                    </Form.Item>
                    <Form.Item className="actions__recovery" name="recovery" valuePropName="checked">
                        <Button type="link"
                                disabled={false}
                                onClick={goToRecovery}
                                data-test-id='login-forgot-button'>Забыли пароль?</Button>
                    </Form.Item>
                </div>

                <div className="buttons">
                    <Form.Item name="submit">
                        <Button type="primary"
                                htmlType="submit"
                                disabled={isDisabledEnter}
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

