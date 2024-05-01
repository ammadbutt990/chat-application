import styled from "styled-components";
import { device } from "../../breakpoints";
import { useEffect, useState } from "react";



const StyledSidebar = styled.aside`
    grid-area: sidebar;
    background: linear-gradient(to right, #FFFFFF, #ECE9E6);
    overflow-y: auto;
    h4{
      padding:20px;
    }

    @media ${device.md} {
        display: none;
      }
      ul {
        padding:0;
        list-style:none;
      }
      ul li {
        border-radius:5px;
        min-height:40px;
        margin:10px 0;
        display:flex;
        justify-content:center;
        align-items:center;
      }

      ul .active {
        background: #dcf8c6;
      }
  `;

interface User {
  socketID: string;
  userName: string;
}

const Sidebar = (props: any) => {
  const userList = localStorage.getItem("userList");
  const [users, setUsers] = useState<User[]>(userList ? JSON.parse(userList) : [])
  const { socket } = props;

  useEffect(() => {
    socket.on("newUserResponse", (data: User[]) => {
      setUsers(data);
      localStorage.setItem('userList', JSON.stringify(data));
    })
  }, [socket, users])

  return (
    <StyledSidebar className="sidebar">
      <h4>Active Chat Users</h4>
      <ul>
        {users && users.map(item => (
          <li key={item.socketID} className="active">{item.userName}</li>
        ))}

      </ul>
    </StyledSidebar>
  )
}

export default Sidebar
