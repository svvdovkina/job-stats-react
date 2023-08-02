import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import {FaRegTimesCircle} from "react-icons/fa"
import { toggleSidebar } from "../features/user/userSlice"
import Logo from "./Logo"
import links from "../utils/links"
import NavItem from "./NavItem"

const Sidebar = () => {
    
    const {isSidebarOpen} = useSelector(store=>store.user)
    const dispatch = useDispatch();

    const toggle = ()=>dispatch(toggleSidebar());
    
    return <Wrapper>
        {isSidebarOpen && 
        <div className="sidebar-background">
            <aside>
                <button className="close-btn" onClick={toggle}>
                    <FaRegTimesCircle/>
                </button>
                
                <div className="sidebar-menu">
                    <header>
                        <Logo/>
                    </header>
                    <div className="nav-links">
                        {links.map(link=>{
                            return <NavItem key={link.id} {...link} onClick={toggle}/>
                        })}
                    </div>
                </div>
            </aside> 
        </div>
        
        }
    </Wrapper>
}

const Wrapper = styled.div`
    .sidebar-background {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.6);
        height: 100vh;
        width: 100vw;
        z-index: 1;
        display: flex;
    }
    aside {
        background-color: white;
        width: 80%;
        margin: 40px auto;
        padding: 15px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: scroll;
    }
    .close-btn {
        align-self: start;
        font-size: 24px;
        color: var(--secondary);
        background-color: inherit;
    }
    .nav-links {
        display: flex;
        gap: 20px;
        flex-direction: column;
       
    }
    header {
        margin-bottom: 50px;
    }
`

export default Sidebar