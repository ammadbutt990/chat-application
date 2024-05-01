import { forwardRef } from 'react';
import styled from 'styled-components';

interface message {
    text: string,
    name: string,
    id: string,
    socketID: string

}
interface IChatBody {
    messages: message[];
    typingStatus: string;
}


const ChatArea = styled.section`

    grid-area: chat;
    background-color: #fafafa;
    padding: 20px;
    overflow-y: auto;
  

.message {
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;
  }
  
  .sent {
    align-self: flex-end;
    background-color: #dcf8c6;
  }
  
  .received {
    align-self: flex-start;
    background-color: #ebebeb;
  }
`;
const ChatBody = forwardRef<HTMLDivElement, IChatBody>((props, ref) => {
    const { messages, typingStatus } = props;
    return (
        <ChatArea>
            {messages && messages.map(item => (
                <div className={item.name === localStorage.getItem("userName") ? "message sent" : "message received"} key={item.id}>
                    {item.text}
                </div>
            ))}
            <div className='message__status'>
                <p>{typingStatus}</p>
            </div>
            <div ref={ref} />
        </ChatArea>
    )
});

export default ChatBody
