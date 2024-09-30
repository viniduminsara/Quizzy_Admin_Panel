import Header from "../components/Header.jsx";
import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

const RootLayout = () => {

    return (
        <div className="flex h-screen">
            <Sidebar/>
            <div className="flex-1 flex flex-col">
                <Header/>
                <main className="flex-1 bg-white p-4">
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}

export default RootLayout;
