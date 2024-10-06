import { useState } from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { quizService } from "../service/quizService.js";
import QuizDetailsForm from "../components/QuizForm/QuizDetailsForm.jsx";
import QuestionForm from "../components/QuizForm/QuestionForm.jsx";
import Loading from "../components/Loading.jsx";
import {useNavigate} from "react-router-dom";

const NewQuiz = () => {
    const [quizData, setQuizData] = useState({
        quizName: '',
        description: '',
        image: null,
        difficulty: '',
        attempts: 0,
        questions: [{ questionText: '', answers: ['', '', '', ''], correctAnswer: 0, isCollapsed: true }]
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleAddQuestion = () => {
        if (quizData.questions.length < 10) {
            const newQuestions = [...quizData.questions, { questionText: '', answers: ['', '', '', ''], correctAnswer: 0, isCollapsed: true }];
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
        setIsSubmitting(true);

        const errors = [];
        if (quizData.questions.length < 5) errors.push("Quiz must have at least 5 questions.");

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

        quizService.saveQuiz(quizData)
            .then(() => {
                toast.success('Quiz saved successfully!');
                navigate('/quizzes');
            })
            .catch((err) => toast.error(err.message))
            .finally(() => setIsSubmitting(false));
    };

    if (isSubmitting){
        return <Loading/>
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-xl md:text-2xl poppins-semibold">Create New Quiz</h1>
                <button type="submit" form="quizForm" className="bg-gradient poppins-regular text-white px-2 py-1 md:px-4 md:py-2 rounded-lg">
                    Save Quiz
                </button>
            </div>
            <form id="quizForm" onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-8 bg-white p-4 rounded-xl shadow-lg">
                <QuizDetailsForm quizData={quizData} setQuizData={setQuizData} handleImageUpload={handleImageUpload} />

                <div>
                    <h2 className="text-xl poppins-medium mb-4">Questions</h2>
                    {quizData.questions.map((question, index) => (
                        <QuestionForm
                            key={index}
                            question={question}
                            index={index}
                            toggleCollapse={toggleCollapse}
                            handleInputChange={handleInputChange}
                            handleCorrectAnswerChange={handleCorrectAnswerChange}
                            handleRemoveQuestion={handleRemoveQuestion}
                        />
                    ))}

                    {quizData.questions.length < 10 && (
                        <div className='flex justify-end'>
                            <button
                                type="button"
                                onClick={handleAddQuestion}
                                className="w-fit bg-secondary text-white py-2 px-4 rounded-lg mt-4"
                            >
                                Add Question
                            </button>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default NewQuiz;
