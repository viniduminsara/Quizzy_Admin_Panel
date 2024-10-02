import {FaAngleDown, FaAngleUp} from "react-icons/fa6";

const QuestionForm = ({question, index, toggleCollapse, handleInputChange, handleCorrectAnswerChange, handleRemoveQuestion}) => {
    return (
        <div className="border-2 py-2 px-4 mb-4 rounded-xl">
            <div className={`flex justify-between items-center ${question.isCollapsed ? '' : 'mb-4'}`}>
                <label className="poppins-regular">Question {index + 1}</label>
                <button type="button" onClick={() => toggleCollapse(index)}>
                    {question.isCollapsed ? <FaAngleDown size={20}/> : <FaAngleUp size={20}/>}
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
                            className="w-full border-4 p-2 rounded-xl poppins-regular"
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
                                className="w-full border-2 p-2 rounded-xl poppins-regular"
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
                            className="w-full border-2 p-2 rounded-xl poppins-regular"
                        >
                            {question.answers.map((_, i) => (
                                <option key={i} value={i}>
                                    Answer {i + 1}
                                </option>
                            ))}
                        </select>
                    </div>

                    {question.answers.length > 1 && (
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
    );
};

export default QuestionForm;
