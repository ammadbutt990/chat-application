import { useEffect, useRef, useState } from 'react';
import Layout from '../../layout'
import ChatBody from './chatBody'
import ChatFooter from './chatFooter'



const ChatPage = (props: any) => {
    const { socket } = props;

    const [messages, setMessages] = useState<any>([])
    const [typingStatus, setTypingStatus] = useState<string>("")
    const lastMessageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        socket.on("messageResponse", (data:any) => {
            setMessages([...messages, data])
        })
    }, [socket, messages])

    useEffect(() => {
        socket.on("typingResponse", (data:any) => {
            setTypingStatus(data)
        })
    }, [socket])

    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <Layout socket={socket}>
            <ChatBody messages={messages} typingStatus={typingStatus} ref={lastMessageRef} />
            <ChatFooter socket={socket} />
        </Layout>
    )
}

export default ChatPage
