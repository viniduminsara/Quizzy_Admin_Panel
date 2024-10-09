import {AiTwotoneEdit} from "react-icons/ai";
import {GoTrash} from "react-icons/go";
import {Link} from "react-router-dom";
import ConfirmationModel from "../components/ConfirmationModel.jsx";

const columns = [
    {
        name: 'Quiz Name',
        selector: row => row.quizName,
        sortable: true,
        cell: row => <span className='poppins-medium text-gray-900'>{row.quizName}</span>,
    },
    {
        name: 'Image',
        selector: row => row.imageUrl,
        cell: row => <img src={row.imageUrl} className='w-24' alt='image'/>,
    },
    {
        name: 'Description',
        selector: row => row.description,
        sortable: true,
        cell: row => <span className='poppins-medium text-gray-900'>{row.description.slice(0, 40)}...</span>,
    },
    {
        name: 'Questions Count',
        selector: row => row.questions.length,
        sortable: true,
        cell: row => <span className="poppins-medium">{row.questions.length}</span>,
    },
    {
        name: 'Difficulty',
        selector: row => row.difficulty,
        sortable: true,
        cell: row => (
            <span
                className={`px-3 inline-flex text-xs leading-5 poppins-regular rounded-full ${
                    row.difficulty === 'Easy'
                        ? 'bg-green-100 text-green-800'
                        : row.difficulty === 'Medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                }`}
            >
          {row.difficulty}
        </span>
        ),
    },
    {
        name: 'Attempts',
        selector: row => row.attempts,
        sortable: true,
        cell: row => <span className="poppins-medium">{row.attempts}</span>,
    },
    {
        name: '',
        cell: row =>
            <div className='flex w-32 justify-around'>
                <Link to={`/quizzes/${row.id}/edit`} className='p-2 border rounded-xl shadow-xl'>
                    <AiTwotoneEdit size={24} color='#f5a467'/>
                </Link>
                <ConfirmationModel quizId={row.id}/>
            </div>
        ,
        ignoreRowClick: true,
    },
];

const customStyles = {
    headCells: {
        style: {
            backgroundColor: '#f9fafb',
            fontWeight: 500,
            fontSize: '0.875rem',
            color: '#6b7280',
            fontFamily: "Poppins",
            paddingLeft: '16px',
            paddingRight: '16px',
        },
    },
    cells: {
        style: {
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingTop: '10px',
            paddingBottom: '10px',
            fontSize: '0.875rem',
        },
    },
};

export const quizTableData = { columns, customStyles };
