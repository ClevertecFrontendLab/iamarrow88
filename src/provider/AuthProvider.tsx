import axios from "axios";
import React, {
    ReactElement,
    useEffect,
    useMemo,
    useState
} from "react";

import { useContext, createContext } from "@hooks/useContext.tsx";


interface ContextInterface {
    token?: string | null;
    updateToken?: (newToken: string) => void;
}

const AuthContext: React.Context<ContextInterface | null> = createContext({});

const AuthProvider = ({children}: {children: ReactElement}) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const updateToken = (newToken: string) => {
        setToken(newToken);
    }

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            localStorage.setItem('token', token);
        } else {
            delete axios.defaults.headers.common['Authorization'];
            localStorage.removeItem('token');
        }
    }, [token]);

    const contextValue = useMemo(
        () => ({
            token, updateToken,
        }),
        [token]
    )
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}


export default AuthProvider;
