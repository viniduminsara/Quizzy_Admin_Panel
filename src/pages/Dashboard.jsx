import DashboardCard from "../components/DashboardCard.jsx";
import DashboardImg from "../assets/Dashboard.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { quizService } from "../service/quizService.js";
import { toast } from "react-toastify";
import Loading from "../components/Loading.jsx";
import DateAndTime from "../components/DateAndTime.jsx";

const Dashboard = () => {
    const [data, setData] = useState({
        count: 0,
        totalAttempts: 0,
        totalUserCount: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuizData = async () => {
            const count = await quizService.getQuizCount();
            const totalAttempts = await quizService.getAllAttempts();

            setData((prevData) => ({
                ...prevData,
                count: count,
                totalAttempts: totalAttempts,
            }));
        };

        fetchQuizData()
            .then(() => setLoading(false))
            .catch((err) => {
                toast.error(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <h2 className="text-2xl poppins-semibold mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 md:mb-16">
                <DashboardCard bgColor='bg-yellow-100' title='Total Quizzes' value={data.count} />
                <DashboardCard bgColor='bg-teal-100' title='Quiz Attempts' value={data.totalAttempts} />
                <DashboardCard bgColor='bg-purple-100' title='Active Users' value={data.totalUserCount} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div
                    className='bg-white p-6 flex flex-col md:flex-row justify-between items-center rounded-2xl shadow-md relative overflow-visible'>
                    <div className='z-10'>
                        <h2 className='text-2xl poppins-medium'>Create Your own Quizzes</h2>
                        <h4 className='text-lg poppins-light mb-6'>Let{"'"}s check out quizzes</h4>
                        <Link to='/quizzes' className='bg-gradient text-white px-4 py-2 rounded-xl'>Visit Now</Link>
                    </div>
                    <img
                        src={DashboardImg}
                        alt="dashboard img"
                        className='hidden md:block w-64 absolute bottom-[-18px] right-[-20px]'
                    />
                </div>
                <DateAndTime/>
            </div>
        </div>
    );
};

export default Dashboard;
