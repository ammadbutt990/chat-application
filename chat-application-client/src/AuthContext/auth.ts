import { createContext, useContext } from "react";


export const AuthContext = createContext({
    authenticated: false,
    login: (userName: string) => { },
    logout: () => { },
});


const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;