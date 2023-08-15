import { useState } from "react"
import { BiMenu, BiUserCircle, BiCaretDown } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { clearStore } from "../features/store/storeSlice"
import { toggleSidebar } from "../features/user/userSlice"
import Logo from "./Logo"

const Navbar = () => {
    const {user} = useSelector(store=>store.user)
    const dispatch = useDispatch();

    const [showDropdown, setShowDropdown] = useState(false);
    return <Wrapper>
        <div className="full-logo">
            <Logo/>
        </div>
        <div className="nav-main">
            
            <button onClick={()=>dispatch(toggleSidebar())} className="menu-btn">
                <BiMenu className="icon" />
            </button>
            
            <h3>Dashboard</h3>
            <div className="dropdown-menu" >
                <button className="user-btn dropdown-btn" onClick={()=>setShowDropdown(s=>!s)}>
                    <BiUserCircle className="icon user-icon"/>
                    {user?.name}
                    <BiCaretDown/>
                </button>
                <button 
                    className={`dropdown dropdown-btn ${showDropdown?'show-dropdown':''}`}
                    onClick={()=>dispatch(clearStore())}
                >
                    Logout
                </button>
            </div>
        </div>
    </Wrapper>
}

const Wrapper = styled.nav`
    position: fixed;
    z-index: 1;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr; 
    align-items: center;
    gap: 20px;

    background-color: white;
    .menu-btn {
        background: none;
        border: none;
    }
    .icon {
        vertical-align: middle;
        color: var(--primary);
        font-size: 36px;
    }
    .nav-main {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .full-logo {
        display: none;
    }
    h3 {
        font-size: 28px;
        font-weight: normal; 
    }
    .user-icon {
        font-size: 24px;
        color: var(--light);
    }
    .dropdown-btn {
        color: var(--light);
        font-size: 18px;
        text-transform: capitalize;
        border-radius: 5px;
        background-color: var(--primary);
        padding: 5px 7px;
    }
    .user-btn {
        display: flex;
        gap: 5px;
        justify-content: space-between;
        align-items: center;
        
    }
    .dropdown {
        display: none;
        position: absolute;
        top: 40px;
        width: 100%;
        background-color: var(--primary-light);
        padding: 10px;
    }
    .show-dropdown {
        display: block;
    }
    .dropdown-menu {
        position: relative;
        margin-right: 10px;
    }

    @media (min-width: 992px) {
        grid-template-columns: auto 1fr;
        .full-logo {
            display: block;
        }
        .menu-btn {
            visibility: hidden;
        }
    }
`

export default Navbar