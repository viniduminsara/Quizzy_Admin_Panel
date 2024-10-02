import {BsThreeDotsVertical} from "react-icons/bs";

const columns = [
    {
        name: 'Quiz Name',
        selector: row => row.quizName,
        sortable: true,
        cell: row => <span className='poppins-medium text-gray-900'>{row.quizName}</span>,
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
        cell: row => <BsThreeDotsVertical size={18} />,
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
            fontSize: '0.875rem',
        },
    },
};

export const quizTableData = { columns, customStyles };
