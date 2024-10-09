import {useAuth} from "../../store/AuthContext.jsx";
import {toast} from "react-toastify";
import {getAuth, signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";

const UserDetailsModel = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            toast.success('Logged out successfully.');
            navigate('/login');
        }).catch((error) => {
            toast.error(error.message);
        });
    }

    return (
        <div className='absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-50'>
            <div className='flex flex-col justify-center items-center py-4 px-2 space-y-2'>
                <p className='poppins-regular text-xs'>{currentUser.email}</p>
                <button
                    onClick={handleLogout}
                    className='text-red-400 w-full poppins-regular border-red-400 border-2 rounded-lg'>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default UserDetailsModel;
