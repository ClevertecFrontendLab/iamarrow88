import axios from "axios";

export default function postRequest<T>(url: string, body: T) {
    return axios.post(url, body, {
        withCredentials: true,
    });
}
