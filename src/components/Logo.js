import logo from "../assets/images/logo.png"
import styled from 'styled-components'


const Logo = ()=>{
    return <Wrapper>
        <img src={logo} alt="logo" className="logo"/>
        <span>JobStater</span>
    </Wrapper>
}

export default Logo

const Wrapper = styled.div`
    display: flex;
    gap: 20px;

    span {
        color: var(--primary);
        font-weight: 600;
        font-size: 30px;
    }

    .logo {
        margin-left: 20px;
        width: 30px;
    }
`