import axios, {AxiosResponse} from "axios";


export default function postRequest(url: string, options: Record<string, string>, callback: (response: AxiosResponse) => void) {
    axios.post(url, {
        "email": options.email,
        "password": options.password
    }, {
        withCredentials: true,
    }).then((response) => {
        callback(response)

    }).catch((err) => {
        callback(err.response);
    })
}
