import { useSelector } from "react-redux"

const Sidebar = () => {
    const {isSidebarOpen} = useSelector(store=>store.user)
    return <div>
        {isSidebarOpen && <h3>Sidebar</h3> }
    </div>
}

export default Sidebar