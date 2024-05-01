import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom"
import Home from "./component/home/home";
import ChatPage from "./component/chat/chatPage";
import { AuthProvider } from "./AuthContext/authProvider";
import useAuth from "./AuthContext/auth";
import { useEffect } from "react";
import { socket, connectToSocket } from "./socket"

const Router = () => {
    useEffect(() => {
        connectToSocket();
    }, []);

    return (
        <AuthProvider>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<Home socket={socket} />}></Route>
                        <Route path="/chat" element={<RequireAuth><ChatPage socket={socket} /></RequireAuth>}></Route>

                    </Routes>
                </div>
            </BrowserRouter>
        </AuthProvider>

    );
}

export default Router;


function RequireAuth(props: any) {
    const { children } = props;
    const location = useLocation();
    const { authenticated } = useAuth();
    return authenticated ? children : <Navigate to="/" state={{ from: location }} />;
}