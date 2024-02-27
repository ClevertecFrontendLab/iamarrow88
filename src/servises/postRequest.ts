import axios from "axios";


export default function postRequest(url: string, options: {
    "email": string,
    "password": string
}, callback: (status: number) => void) {
    axios.post(url, {
        "email": options.email,
        "password": options.password
    }).then((response) => {
        callback(response.status)

    }).catch((err) => {
        callback(err.response.status);
    })
}
