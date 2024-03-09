import {useNavigate} from "react-router-dom";
import {useCallback} from "react";

export default function (path: string, isReplaced?: boolean) {
    const _navigate = useNavigate();
    return useCallback(() => {
        if (isReplaced) {
            _navigate(path, {replace: true})
        } else {
            _navigate(path)
        }
    }, [_navigate, path, isReplaced])
}

