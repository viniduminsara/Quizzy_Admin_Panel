import {FaAngleDown, FaAngleUp} from "react-icons/fa6";
import {FaRegTrashAlt} from "react-icons/fa";

const QuestionForm = ({question, index, toggleCollapse, handleInputChange, handleCorrectAnswerChange, handleRemoveQuestion}) => {

    return (
        <div className="border-2 py-2 px-4 mb-4 rounded-xl duration-300">
            <div
                className={`flex justify-between items-center ${question.isCollapsed ? '' : 'mb-4'}`}
                 onClick={() => toggleCollapse(index)}
            >
                <label className="poppins-regular">Question {index + 1}</label>
                <div>
                    {question.isCollapsed ? <FaAngleDown size={20}/> : <FaAngleUp size={20}/>}
                </div>
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
                            className="p-2 bg-red-500 rounded-lg mb-2"
                        >
                            <FaRegTrashAlt size={18} color='white'/>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default QuestionForm;
