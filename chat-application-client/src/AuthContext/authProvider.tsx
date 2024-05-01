import { useState } from "react";
import { AuthContext } from "./auth";

export function AuthProvider(props: any) {
    const [authenticated, setAuthenticated] = useState(localStorage.getItem("userName")?true:false);
    const { children } = props;

    const login = (userName: string) => {
        localStorage.setItem('userName', userName);
        setAuthenticated(true)
    };
    const logout = () => {
        localStorage.removeItem('userName');
        setAuthenticated(false);
    }
    return (
        <AuthContext.Provider value={{ authenticated, login, logout }}>{children}</AuthContext.Provider>
    );
}