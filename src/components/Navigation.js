import styled from 'styled-components'
// import logo from '../img/logo2.png'

const Navigation = () => {
    return (
        <NavigationStyled>
            <div className="logo">
                <span>2ok</span> 
                {/* <img src={logo} alt="" /> */}
            </div>
            <ul className="nav-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Activity</a></li>
                <li><a href="#">Contact</a></li>
                <div className="primary-btn">GET CONNECTED</div>
            </ul>
        </NavigationStyled>
    )
}
const NavigationStyled = styled.nav`
    min-height: 10vh;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    .nav-items{
        display: flex;
        align-items: center;
       
        li{
            margin: 0 1rem;
        }
        .primary-btn{
            margin-left:3rem;
            background-color: rgba(57,95,246,0.6);
            padding:.6rem .8rem;
            border-radius: 70px;
            cursor: pointer;
            transition: all .4s ease-in-out;
            &:hover{
                background-color:rgba(57,95,246,1)
            }
        }
    }
    .logo{
        span{
            font-size: 3rem;
            font-weight: 700;
            text-shadow: 2px 2px 2px lightgray; 
        }
        /* img{
            width: 60px;
        } */
    }
`;
export default Navigation
