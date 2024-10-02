const QuizDetailsForm = ({ quizData, setQuizData, handleImageUpload }) => {

    return (
        <div className="space-y-4 mb-4 lg:mb-0">
            <div>
                <label className="block poppins-regular font-medium mb-1">Quiz Name</label>
                <input
                    type="text"
                    value={quizData.quizName}
                    onChange={(e) => setQuizData({ ...quizData, quizName: e.target.value })}
                    className="w-full border-2 p-2 rounded-xl poppins-regular"
                    required
                />
            </div>

            <div>
                <label className="block poppins-regular font-medium mb-1">Description</label>
                <textarea
                    value={quizData.description}
                    onChange={(e) => setQuizData({ ...quizData, description: e.target.value })}
                    className="w-full border-2 p-2 rounded-xl poppins-regular"
                    required
                />
            </div>

            <div>
                <label className="block poppins-regular font-medium mb-1">Difficulty</label>
                <select
                    className="w-full border-2 p-2 rounded-xl poppins-regular"
                    onChange={(e) => setQuizData({ ...quizData, difficulty: e.target.value })}
                    required
                >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>

            <div>
                <label className="block poppins-regular font-medium mb-1">Quiz Image</label>
                <input
                    type="file"
                    onChange={handleImageUpload}
                    className="w-full border-2 p-2 rounded-xl poppins-regular"
                    accept="image/*"
                    required
                />
            </div>
        </div>
    );
};

export default QuizDetailsForm;
