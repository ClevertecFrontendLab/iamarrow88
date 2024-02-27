import {Button, Checkbox, Form, Input} from "antd";
import './login.css';
import { GooglePlusOutlined } from "@ant-design/icons";
import {
    OnFinishDataAuth,
    storeActionTypes
} from '../../../../customTypes/content-types.ts'
import {API_URLs} from "@constants/common/api-urls.ts";
import postRequest from "../../../../servises/postRequest.ts";
import {getPureMap, makeUrl} from "@utils/utils.ts";
import {baseURL} from "@constants/common/common-constants.ts";
import {useNavigate} from "react-router-dom";
import {indexesForPureFunctions} from "@constants/common/enums.ts";
import {AxiosResponse} from "axios";
import {useState} from "react";
import { useDispatch } from "react-redux";

const Login = () => {
    const [remember, setRemember] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //console.log(useSelector((state: StoreInterface) => state.isLoggedIn));

    function navToNextPage(status: number,
                           map: Record<number | string, string>,
                           response: AxiosResponse ) {
        if (response.data.accessToken && remember) {
            localStorage.setItem('accessToken', response.data.accessToken);
        }

        if (status === 201 || status === 200) {
            dispatch({ type: storeActionTypes.loginTrue });

        }
        for (let i = 0; i < Object.keys(map).length; i += 1) {
            const currentStatus = +Object.keys(map)[i];
            if (status === currentStatus) {
                navigate(map[currentStatus]);
                break;
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

