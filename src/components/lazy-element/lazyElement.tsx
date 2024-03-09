import {ReactNode, Suspense} from "react";
import {Route} from "react-router-dom";
import Loader from "@components/UI/loader/Loader.tsx";

const LazyElement = ({path, element, childElement}: {path: string, element: ReactNode, childElement?: ReactNode}) => {
    if (childElement) {
        return (
            <Route path={path} element={
                <Suspense fallback={<Loader />}>
                    {element}
                </Suspense>
            }>
            </Route>
        );
    } else {
        return (
            <Route path={path} element={
                <Suspense fallback={<Loader />}>
                    {element}
                </Suspense>
            }>
            </Route>
        );
    }
};

export default LazyElement;
