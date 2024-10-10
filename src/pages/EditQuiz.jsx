import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {quizService} from "../service/quizService.js";
import {toast} from "react-toastify";
import Loading from "../components/Loading.jsx";
import QuizDetailsForm from "../components/QuizForm/QuizDetailsForm.jsx";
import QuestionForm from "../components/QuizForm/QuestionForm.jsx";

const EditQuiz = () => {
    const { quizId } = useParams();
    const [quizData, setQuizData] = useState({
        quizName: '',
        description: '',
        image: null,
        difficulty: '',
        attempts: 0,
        questions: [
            {
                questionText: '',
                answers: ['', '', '', ''],
                correctAnswer: 0,
                isCollapsed: true
            }
        ]
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuizData = async () => {
            const data = await quizService.getQuizById(quizId);
            if (data) {
                setQuizData({
                    quizName: data.quizName,
                    description: data.description,
                    image: data.imageUrl,
                    difficulty: data.difficulty,
                    attempts: data.attempts,
                    questions: data.questions
                });
            }
        }

        fetchQuizData()
            .then(() => setLoading(false))
            .catch((err) => {
                toast.error(err.message);
                setLoading(false)
            })
    }, [quizId]);
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

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

        try {
            if (quizData.questions.length < 5) {
                throw new Error("Quiz must have at least 5 questions.");
            }

            quizData.questions.forEach((question, i) => {
                if (question.questionText.trim() === '') {
                    throw new Error(`Question ${i + 1} must have a question text.`);
                }

                question.answers.forEach((answer, j) => {
                    if (answer.trim() === '') {
                        throw new Error(`Question ${i + 1}, Answer ${j + 1} must not be empty.`);
                    }
                });
            });

        } catch (error) {
            toast.error(error.message);
            setIsSubmitting(false);
            return;
        }


        quizService.updateQuiz(quizId, quizData)
            .then(() => {
                toast.success('Quiz saved successfully!');
                navigate('/quizzes');
            })
            .catch((err) => toast.error(err.message))
            .finally(() => setIsSubmitting(false));
    };

    if (loading){
        return <Loading/>
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-xl md:text-2xl poppins-semibold">Update Quiz Data</h1>
                <button type="submit" form="quizForm"
                        className="bg-gradient poppins-regular text-white px-2 py-1 md:px-4 md:py-2 rounded-lg">
                    Update Quiz
                </button>
            </div>
            <form id="quizForm" onSubmit={handleSubmit}
                  className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-8 bg-white p-4 rounded-xl shadow-lg">
                <QuizDetailsForm quizData={quizData} setQuizData={setQuizData} handleImageUpload={handleImageUpload}/>

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
}

export default EditQuiz;
