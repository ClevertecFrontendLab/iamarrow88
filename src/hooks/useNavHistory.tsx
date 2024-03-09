import {useSelector} from "react-redux";
import {StoreInterface} from "@redux/config/redux-types.ts";

const UseNavHistory = () => {
    const currentPathName = useSelector((state: StoreInterface) => state.router?.location?.pathname ?? null);
    const prevLocation = useSelector((state: StoreInterface) => state.router.previousLocations[state.router.previousLocations.length - 1].location.pathname)

    return {
        location: currentPathName,
        prevLocation: prevLocation
    };
};

export default UseNavHistory;
