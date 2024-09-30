import DashboardCard from "../components/DashboardCard.jsx";
import DashboardImg from "../assets/Dashboard.png"
import {Link} from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <h2 className="text-2xl poppins-semibold mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 md:mb-16">
                <DashboardCard bgColor='bg-yellow-100' title='Total Quizzes' value={20}/>
                <DashboardCard bgColor='bg-teal-100' title='Quiz Attempts' value={1215}/>
                <DashboardCard bgColor='bg-purple-100'  title='Active Users' value={143}/>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div
                    className='bg-white p-6 flex flex-col md:flex-row justify-between items-center rounded-2xl shadow-md relative overflow-visible'>
                    <div className='z-10'>
                        <h2 className='text-2xl poppins-medium'>Welcome Vinidu Minsara</h2>
                        <h4 className='text-lg poppins-light mb-6'>Let{"'"}s check out quizzes</h4>
                        <Link to='/' className='bg-gradient text-white px-4 py-2 rounded-xl'>Visit Now</Link>
                    </div>
                    <img
                        src={DashboardImg}
                        alt="dashboard img"
                        className='hidden md:block w-64 absolute bottom-[-18px] right-[-20px]'
                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
