import {useLocation} from "react-router-dom";
import { useNavigate as _useNavigate } from "react-router-dom";

// const useGoNextPage = () => {
//     const currentPage = useLocation();
//     console.log(currentPage);
//     // const statusMap = API_URLs[currentPage].responseCodes;
//     //navigate(statusCode.toString());
//
//     return {
//         res: true
//     }
// };
//
// export default useGoNextPage;
export function useNavigate() {
    const navigate = _useNavigate();

}
