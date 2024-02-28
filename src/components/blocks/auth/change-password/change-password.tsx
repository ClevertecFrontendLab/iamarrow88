import './change-password.css';
import {Button, Form, Input} from "antd";
import {
    OnFinishDataAuth
} from "../../../../customTypes/content-types.ts";
import {baseURL, passwordCheckRegex} from "@constants/common/common-constants.ts";
import postRequest from "../../../../servises/postRequest.ts";
import {getPureMap, makeUrl} from "@utils/utils.ts";
import {API_URLs} from "@constants/common/api-urls.ts";
import {AxiosResponse} from "axios";
import {indexesForPureFunctions} from "@constants/common/enums.ts";
import {useNavigate} from "react-router-dom";
const ChangePassword = () => {
    const navigate = useNavigate();

    function navToNextPage(status: number,
                           map: Record<string, string>,
                           response: AxiosResponse) {

        console.log(response);

        for (let i = 0; i < Object.keys(map).length; i += 1) {
            const currentStatus = +Object.keys(map)[i];
            if (status === currentStatus) {
                navigate(map[status]);
            }
        }
    }

    const onFinish = (value: OnFinishDataAuth) => {
        console.log(value);

        if (value.passwordRepeat) {
            const body = {
                password: value.password,
                confirmPassword: value.passwordRepeat
            }
            console.log(body);
            postRequest(makeUrl(baseURL, API_URLs.changePassword.url),
                body,
                (response) => navToNextPage(response.status,
                    getPureMap(API_URLs.changePassword, indexesForPureFunctions.urls), response));
        } else {
            console.log('the password has not confirmed');
        }

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
                    <Input.Password data-test-id='change-password'
                        placeholder="Новый пароль"
                    />
                </Form.Item>
                <Form.Item className="password-repeat"
                           name="passwordRepeat"
                           rules={[
                               {
                                   required: true,
                                   message: '',
                               },{
                                   pattern: passwordCheckRegex,
                                   message: 'Пароль не менее 8 символов с заглавной буквой и цифрой',
                               }
                           ]}
                           dependencies={['password']}
                >
                    <Input.Password data-test-id='change-confirm-password'
                        placeholder="Повторите пароль"
                    />
                </Form.Item>

                <Form.Item name="submit" className="button">
                    <Button type="primary" htmlType="submit" data-test-id='change-submit-button'>
                        Сохранить
                    </Button>
                </Form.Item>
            </Form>

        </div>
    );
};

export default ChangePassword;
