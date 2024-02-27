import {useNavigate} from "react-router-dom";

const UseNavToNextPage = (pageUrl: string) => {
    const navigate = useNavigate();
    navigate(pageUrl, {replace: true});
    return [
        true
    ]
};

export default UseNavToNextPage;
