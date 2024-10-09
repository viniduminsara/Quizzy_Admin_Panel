import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
import {quizTableData} from "../util/quizTableData.jsx";
import {useEffect, useState} from "react";
import {quizService} from "../service/quizService.js";
import Loading from "../components/Loading.jsx";
import {toast} from "react-toastify";

const Quizzes = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuizzes = async () => {
            const quizzes = await quizService.getAllQuizzes();
            if (quizzes !== null){
                setQuizzes(quizzes);
            }
        }

        fetchQuizzes()
            .then(() => setLoading(false))
            .catch((err) => {
                setLoading(false);
                toast.error(err.message);
            })
    }, []);

    if (loading) {
        return <Loading/>
    }

    return (
        <div className="flex flex-col w-72 md:w-full h-full">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl poppins-semibold">Quizzes</h1>
                <Link
                    to='new'
                    className="bg-gradient text-white px-4 py-2 rounded-xl">
                    Create New Quiz
                </Link>
            </div>
            <div className="rounded-2xl shadow-lg w-full">
                <DataTable
                    columns={quizTableData.columns}
                    data={quizzes}
                    customStyles={quizTableData.customStyles}
                    noHeader
                />
            </div>
        </div>
    );
};

export default Quizzes;
