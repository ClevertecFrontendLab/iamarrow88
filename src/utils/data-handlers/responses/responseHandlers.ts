import {store} from "@redux/configure-store.ts";
import {StoreActionTypes} from "@redux/config/redux-constants.ts";
import {API_URLs} from "@constants/common/api-urls.ts";
import navigate from "@hooks/callbacks/navigate.ts";


export function saveToken(token: string) {
    localStorage.setItem('accessToken', token);
}

export function setLoginTrue(){
    store.dispatch({ type: StoreActionTypes.loginTrue });
}

export function goToNextFrom(currentPageName: string, status: number) {
    const statusMap = API_URLs[currentPageName].responseCodes;
    navigate(statusMap[status][0]);
    //
    // Object.keys(statusMap).forEach((code) => {
    //     if (status === Number(code)) {
    //         navigate(statusMap[code][0]);
    //     }
    // })
}


