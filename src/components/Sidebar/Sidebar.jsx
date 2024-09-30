import { useState } from "react";
import {sidebarNavLinksData} from "../../util/SidebarNavLinksData.jsx";
import SidebarItem from "./SidebarItem.jsx";
import {HiOutlineMenuAlt1} from "react-icons/hi";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`bg-white ${isOpen ? "w-48 md:w-64" : "w-14"} duration-300 min-h-screen shadow-right_sm md:shadow-right_lg z-50`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-4 focus:outline-none"
            >
                <HiOutlineMenuAlt1 size={28}/>
            </button>
            <ul className="mt-8 space-y-6">
                {sidebarNavLinksData.map((data, index) => (
                    <SidebarItem key={index} {...data} isOpen={isOpen}/>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
