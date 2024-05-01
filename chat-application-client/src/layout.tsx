import Header from "./component/header"
import Sidebar from "./component/sidebar"


const Layout = (props: any) => {
    const { children, socket } = props;
    return (
        <div className="chat-container">
            <Header />
            <Sidebar socket={socket} />
            {children}
        </div>
    )
}

export default Layout
