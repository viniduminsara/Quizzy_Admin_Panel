import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
import {quizTableData} from "../util/quizTableData.jsx";

const QuizzesTable = () => {
    const quizzes = [
        { id: 1, name: 'Math Quiz', questionsCount: 10, difficulty: 'Easy', attempts: 541 },
        { id: 2, name: 'Science Quiz', questionsCount: 15, difficulty: 'Medium', attempts: 325 },
        { id: 3, name: 'History Quiz', questionsCount: 20, difficulty: 'Hard', attempts: 126 },
    ];

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

export default QuizzesTable;
