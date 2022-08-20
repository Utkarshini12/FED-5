import { useGlobalContext } from "./Context"
import { FaTimes } from 'react-icons/fa'


const Sidebar = () => {
    const { closeSidebar, isSidebarOpen } = useGlobalContext();

    return (
        <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className="sidebar-header">
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />

                </button>
            </div>

            <ul className="links">
                <li>Home</li>
            </ul>



        </aside>
    )

}

export default Sidebar;