import {NavLink} from "react-router-dom";

const SidebarItem = ({isOpen, name, path, icon}) => {

    return (
        <li className="px-4">
            <NavLink to={path} className='flex items-center space-x-3.5'>
                {icon}
                {isOpen && <span className='poppins-medium'>{name}</span>}
            </NavLink>
        </li>
    )
}

export default SidebarItem;
