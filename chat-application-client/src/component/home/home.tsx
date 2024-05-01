import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import styled from 'styled-components';
import useAuth from '../../AuthContext/auth';

const StyledLoginPage = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

.login-container {
    height: 30vh;
    width: 30vw;
    background: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.login-form h2 {
    color: #333;
    margin-bottom: 20px;
}

.input-group {
    margin-bottom: 20px;
}

.input-group label {
    display: block;
    color: #666;
    margin-bottom: 5px;
}

.input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box; /* Includes padding and border in the element's total width and height */
}

button {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #5c67f2;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #5058e5;
}`;

const Home = (props: any) => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const { login } = useAuth();
    const { socket } = props;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login(userName);
        console.log("socket.id ", socket.id)
        socket.emit("newUser", { userName, socketID: socket.id })
        navigate("/chat")
    }
    return (
        <StyledLoginPage>
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="input-group">
                        <label>Username</label>
                        <input minLength={6}
                            name="username"
                            id='username'
                            className='username__input'
                            value={userName}
                            onChange={e => setUserName(e.target.value)} required />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </StyledLoginPage>
    )
}

export default Home