import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider.tsx";

const ProtectedRoute = () => {
    const { token } = useAuth();

    if (!token) {
        return <Navigate to="/auth" />;
    } else {
        return <Outlet />;
    }
}

export default ProtectedRoute;
