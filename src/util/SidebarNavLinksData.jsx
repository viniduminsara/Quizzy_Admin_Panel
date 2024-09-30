import {FaCog, FaHome} from "react-icons/fa";
import {MdQuiz} from "react-icons/md";

export const sidebarNavLinksData = [
    {
        name: 'Dashboard',
        path: '/',
        icon: <FaHome size={24}/>
    },
    {
        name: 'Quizzes',
        path: '/quizzes',
        icon: <MdQuiz size={24}/>
    },
    {
        name: 'Settings',
        path: '/settings',
        icon: <FaCog size={24}/>
    },
];
