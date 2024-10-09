import Header from "../components/Header.jsx";
import {Navigate, Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import {useAuth} from "../store/AuthContext.jsx";

const RootLayout = () => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Navigate to='/login' replace/>
    }

    return (
        <div className='flex min-h-screen'>
            <Sidebar/>
            <div className='flex-1 flex flex-col  bg-[#F0F5F9]'>
                <Header/>
                <main className='flex-1 py-4 px-4 md:px-8'>
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}

export default RootLayout;
