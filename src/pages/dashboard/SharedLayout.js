import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Sidebar from "../../components/Sidebar"
import BigSidebar from "../../components/BigSidebar"
import Navbar from "../../components/Navbar"

const SharedLayout = ({children}) =>{
    return <Wrapper>
            <div className="dashboard">
                <Sidebar/>
                <div>
                    <Navbar/>
                    <div className="dashboard-page">
                        <BigSidebar/>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </Wrapper>
}

const Wrapper = styled.main`
    .dashboard-page {
        display: grid;
        grid-template-columns: auto 1fr;
    }
`

export default SharedLayout