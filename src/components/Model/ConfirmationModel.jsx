import {GoTrash} from "react-icons/go";
import {useState} from "react";
import {quizService} from "../../service/quizService.js";
import {toast} from "react-toastify";

const ConfirmationModel = ({ quizId }) => {
    const [showModel, setShowModel] = useState(false);

    const handleConfirm = () => {
        quizService.deleteQuiz(quizId)
            .then(() => toast.success('Quiz deleted successfully!'))
            .catch((err) => toast.error(err.message))
            .finally(() => setShowModel(false));
    }

    return (
        <>
            <button className='p-2 border rounded-xl shadow-xl' onClick={() => setShowModel(true)}>
                <GoTrash size={24} color='#f56781'/>
            </button>
            {showModel && (
                <div
                    className='fixed top-0 left-0 w-full h-full px-4 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-white rounded-lg p-4'>
                        <h2 className='text-lg poppins-semibold mb-2'>Confirm Deletion</h2>
                        <p className='mb-4 poppins-regular'>Are you sure you want to delete quiz?</p>
                        <div className='flex justify-end space-x-2'>
                            <button
                                onClick={() => setShowModel(false)}
                                className='bg-gray-500 poppins-regular text-white px-4 py-2 rounded-xl hover:scale-105 transition duration-200'>
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirm}
                                className='bg-gradient poppins-regular text-white px-4 py-2 rounded-xl hover:scale-105 transition duration-200'>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ConfirmationModel;
