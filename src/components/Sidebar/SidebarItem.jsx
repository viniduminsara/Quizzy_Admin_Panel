import {NavLink} from "react-router-dom";

const SidebarItem = ({isOpen, name, path, icon}) => {

    return (
        <li className="px-4">
            <NavLink to={path} className={({ isActive}) => `flex items-center space-x-3.5 ${isActive ? 'text-accent2' : ''}`}>
                {icon}
                {isOpen && <span className='poppins-medium'>{name}</span>}
            </NavLink>
        </li>
    )
}

export default SidebarItem;
