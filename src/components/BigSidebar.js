import styled from "styled-components"
import links from "../utils/links"
import NavItem from "./NavItem"

const BigSidebar = () => {
    return <Wrapper>
        
        {links.map(link=>{
            return <NavItem key={link.id} {...link} className="nav-link"/>
        })}
        
    </Wrapper>
}

const Wrapper = styled.aside`
    padding: 20px 50px 20px 40px;
    height: calc(max(100%, calc(100vh - 85px)));
    background-color: white;
    .nav-link{
        margin-bottom: 20px;
    }
    @media (max-width: 992px) {
            display: none;
    }
`

export default BigSidebar