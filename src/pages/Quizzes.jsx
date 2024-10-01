import {BsThreeDotsVertical} from "react-icons/bs";
import {Link} from "react-router-dom";

const QuizzesTable = () => {
    const quizzes = [
        { id: 1, name: 'Math Quiz', questionsCount: 10, difficulty: 'Easy', attempts: 541 },
        { id: 2, name: 'Science Quiz', questionsCount: 15, difficulty: 'Medium', attempts: 325 },
        { id: 3, name: 'History Quiz', questionsCount: 20, difficulty: 'Hard', attempts: 126 },
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
            <div className="overflow-x-auto rounded-2xl shadow-lg w-full">
                <table className="w-full bg-white border-b last:border-b-0">
                    <thead>
                    <tr>
                        <th className="py-3 px-6 text-left text-sm poppins-medium text-gray-500 uppercase tracking-wider">
                            Quiz Name
                        </th>
                        <th className="py-3 px-6 text-left text-sm poppins-medium text-gray-500 uppercase tracking-wider">
                            Questions Count
                        </th>
                        <th className="py-3 px-6 text-left text-sm poppins-medium text-gray-500 uppercase tracking-wider">
                            Difficulty
                        </th>
                        <th className="py-3 px-6 text-left text-sm poppins-medium text-gray-500 uppercase tracking-wider">
                            Attempts
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {quizzes.map((quiz) => (
                        <tr key={quiz.id}>
                            <td className="py-4 px-6 poppins-medium text-gray-900">
                                {quiz.name}
                            </td>
                            <td className="py-4 px-6 poppins-medium">
                                {quiz.questionsCount}
                            </td>
                            <td className="py-4 px-6">
                                    <span
                                        className={`px-3 inline-flex text-xs leading-5 poppins-regular rounded-full ${
                                            quiz.difficulty === 'Easy'
                                                ? 'bg-green-100 text-green-800'
                                                : quiz.difficulty === 'Medium'
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : 'bg-red-100 text-red-800'
                                        }`}
                                    >
                                        {quiz.difficulty}
                                    </span>
                            </td>
                            <td className="py-4 px-6 poppins-medium">
                                {quiz.attempts}
                            </td>
                            <td className="py-4 px-6 poppins-medium">
                                <BsThreeDotsVertical size={18}/>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default QuizzesTable;
