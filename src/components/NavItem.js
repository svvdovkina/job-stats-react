import { NavLink } from "react-router-dom"
import styled from "styled-components"

const NavItem = ({text, path, icon, onClick})=>{
    return <Wrapper onClick={onClick}>
        <NavLink to={path} className="nav-link">
            <div className="nav-icon">
                {icon}
            </div> 
            <span>{text}</span>
        </NavLink>
    </Wrapper>
}

const Wrapper = styled.div`
    
    .nav-link {
        display: flex;
        gap: 10px;
        align-items: center;
        font-size: 24px;
        text-transform: capitalize;
        color: var(--dark);
    }

    .nav-link:hover, .active {
        color: var(--primary);
        transform: translateX(10px);
        transition: all 0.3s;
    }

    .nav-icon {
        font-size: 36px;
    }
`

export default NavItem