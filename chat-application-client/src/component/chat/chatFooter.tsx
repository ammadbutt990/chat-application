import React, { useState } from 'react'
import styled from 'styled-components';

const StyledFooter = styled.footer`
justify-content: center;
`;

const ChatFooter = (props: any) => {
    const [message, setMessage] = useState("")
    const { socket } = props;
    const handleTyping = () => socket.emit("typing", `${localStorage.getItem("userName")} is typing`)

    const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (message.trim() && localStorage.getItem("userName")) {
            socket.emit("message",
                {
                    text: message,
                    name: localStorage.getItem("userName"),
                    id: `${socket.id}${Math.random()}`,
                    socketID: socket.id
                }
            )
        }
        setMessage("")
    }
    return (
        <StyledFooter>
            <form className='form' onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder='Write message'
                    className='txtMessage'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    onKeyDown={handleTyping}
                />
                <button className="sendBtn">SEND</button>
            </form>
        </StyledFooter>
    )
}

export default ChatFooter