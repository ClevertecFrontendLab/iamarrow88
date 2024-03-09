import axios from "axios";
import {store} from "@redux/configure-store.ts";
import {StoreActionTypes} from "@redux/config/redux-constants.ts";

export default function postRequest<T>(url: string, body: T) {
    store.dispatch({ type: StoreActionTypes.isLoadingTrue });
    return axios.post(url, body, {
        withCredentials: true,
    });
}
