import doodleLogo from "../../assets/doodle.svg";
import altLogo from "../../assets/react.svg";
import avatarLogo from "../../assets/img_avatar.png";
import styled from 'styled-components'

const StyledHeader = styled.header`
    grid-area: header;
    background: linear-gradient(to left, #ecececf0, #ECE9E6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);

    .chatAppLogo {
        height:40px;
    }
    .avatar {
        vertical-align: middle;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

  `;


const Header = () => {
    const userName = localStorage.getItem("userName");
    return (
        <StyledHeader>
            <img className="chatAppLogo" src={doodleLogo} alt={altLogo} />
            <div> {userName} <img className="avatar" src={avatarLogo} alt={altLogo} /></div>
        </StyledHeader>
    )
}

export default Header
