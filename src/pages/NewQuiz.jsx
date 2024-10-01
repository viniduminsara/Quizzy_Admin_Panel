import { useState } from 'react';
import {FaAngleDown, FaAngleUp} from "react-icons/fa6";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NewQuiz = () => {
    const [quizData, setQuizData] = useState({
        quizName: '',
        description: '',
        image: null,
        difficulty: '',
        attempts: 0,
        questions: [
            { questionText: '', answers: ['', '', '', ''], correctAnswer: 0, isCollapsed: true }
        ]
    });

    const handleAddQuestion = () => {
        if (quizData.questions.length < 10) {
            const newQuestions = [
                ...quizData.questions,
                { questionText: '', answers: ['', '', '', ''], correctAnswer: 0, isCollapsed: true }
            ];
            setQuizData({ ...quizData, questions: newQuestions });
        }
    };

    const handleRemoveQuestion = (index) => {
        const newQuestions = quizData.questions.filter((_, i) => i !== index);
        setQuizData({ ...quizData, questions: newQuestions });
    };

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedQuestions = [...quizData.questions];
        if (name === 'questionText') {
            updatedQuestions[index].questionText = value;
        } else {
            const answerIndex = parseInt(name.split('-')[1]);
            updatedQuestions[index].answers[answerIndex] = value;
        }
        setQuizData({ ...quizData, questions: updatedQuestions });
    };

    const handleCorrectAnswerChange = (index, event) => {
        const updatedQuestions = [...quizData.questions];
        updatedQuestions[index].correctAnswer = parseInt(event.target.value);
        setQuizData({ ...quizData, questions: updatedQuestions });
    };

    const handleImageUpload = (event) => {
        setQuizData({ ...quizData, image: event.target.files[0] });
    };

    const toggleCollapse = (index) => {
        const updatedQuestions = [...quizData.questions];
        updatedQuestions[index].isCollapsed = !updatedQuestions[index].isCollapsed;
        setQuizData({ ...quizData, questions: updatedQuestions });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = [];

        if (quizData.questions.length < 5) {
            errors.push("Quiz must have at least 5 questions.");
        }

        quizData.questions.forEach((question, i) => {
            if (question.questionText.trim() === '') {
                errors.push(`Question ${i + 1} must have a question text.`);
            }

            question.answers.forEach((answer, j) => {
                if (answer.trim() === '') {
                    errors.push(`Question ${i + 1}, Answer ${j + 1} must not be empty.`);
                }
            });
        });

        if (errors.length > 0) {
            toast.error(errors[0]);
            return;
        }

        console.log(quizData);
    };



    return (
        <div>
            <div className='flex justify-between items-center mb-8'>
                <h1 className="text-xl md:text-2xl poppins-semibold">Create New Quiz</h1>
                <button type="submit" form='quizForm' className="bg-gradient poppins-regular text-white px-2 py-1 md:px-4 md:py-2 rounded-lg">
                    Save Quiz
                </button>
            </div>
            <form id='quizForm' onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-8 bg-white p-4 rounded-xl shadow-lg">
                <div className='space-y-4 mb-4 lg:mb-0'>
                    <div>
                        <label className="block poppins-regular font-medium mb-1">Quiz Name</label>
                        <input
                            type="text"
                            value={quizData.quizName}
                            onChange={(e) => setQuizData({...quizData, quizName: e.target.value})}
                            className="w-full border-2 p-2 rounded poppins-regular"
                            required
                        />
                    </div>

                    <div>
                        <label className="block poppins-regular font-medium mb-1">Description</label>
                        <textarea
                            value={quizData.description}
                            onChange={(e) => setQuizData({...quizData, description: e.target.value})}
                            className="w-full border-2 p-2 rounded poppins-regular"
                            required
                        />
                    </div>

                    <div>
                        <label className="block poppins-regular font-medium mb-1">Difficulty</label>
                        <select
                            className='w-full border-2 p-2 rounded poppins-regular'
                            onChange={(e) => setQuizData({ ...quizData, difficulty: e.target.value})}
                            required
                        >
                            <option value='Easy'>Easy</option>
                            <option value='Medium'>Medium</option>
                            <option value='Hard'>Hard</option>
                        </select>
                    </div>

                    <div>
                        <label className="block poppins-regular font-medium mb-1">Quiz Image</label>
                        <input
                            type="file"
                            onChange={handleImageUpload}
                            className="w-full border-2 p-2 rounded poppins-regular"
                            accept="image/*"
                            required
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-xl poppins-medium mb-4">Questions</h2>
                    {quizData.questions.map((question, index) => (
                        <div key={index} className="border-2 py-2 px-4 mb-4 rounded-lg">
                            <div className={`flex justify-between items-center ${question.isCollapsed ? '' : 'mb-4'}`}>
                                <label className="poppins-regular">Question {index + 1}</label>
                                <button
                                    type="button"
                                    onClick={() => toggleCollapse(index)}
                                >
                                    {question.isCollapsed ? <FaAngleDown size={20} /> : <FaAngleUp size={20} />}
                                </button>
                            </div>

                            {!question.isCollapsed && (
                                <div>
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            name="questionText"
                                            value={question.questionText}
                                            onChange={(e) => handleInputChange(index, e)}
                                            className="w-full border-4 p-2 rounded poppins-regular"
                                            placeholder="Enter question text"
                                            required
                                        />
                                    </div>

                                    {question.answers.map((answer, answerIndex) => (
                                        <div key={answerIndex} className="mb-2">
                                            <input
                                                type="text"
                                                name={`answer-${answerIndex}`}
                                                value={answer}
                                                onChange={(e) => handleInputChange(index, e)}
                                                className="w-full border-2 p-2 rounded poppins-regular"
                                                placeholder={`Answer ${answerIndex + 1}`}
                                                required
                                            />
                                        </div>
                                    ))}

                                    <div className="mb-4">
                                        <label className="block font-medium mb-1">Correct Answer</label>
                                        <select
                                            value={question.correctAnswer}
                                            onChange={(e) => handleCorrectAnswerChange(index, e)}
                                            className="w-full border-2 p-2 rounded poppins-regular"
                                        >
                                            {question.answers.map((_, i) => (
                                                <option key={i} value={i}>
                                                    Answer {i + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {quizData.questions.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveQuestion(index)}
                                            className="text-red-500 text-sm p-2 border border-red-500 rounded-lg mb-2"
                                        >
                                            Remove Question
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Add Question Button */}
                    {quizData.questions.length < 10 && (
                        <button
                            type="button"
                            onClick={handleAddQuestion}
                            className="bg-secondary poppins-regular text-white px-4 py-2 rounded-lg"
                        >
                            Add Question
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default NewQuiz;
