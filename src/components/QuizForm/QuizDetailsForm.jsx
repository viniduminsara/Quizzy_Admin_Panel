import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const QuizDetailsForm = ({ quizData, setQuizData, handleImageUpload }) => {
    const [imagePreview, setImagePreview] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            setQuizData({ ...quizData, image: file });
            handleImageUpload({ target: { files: acceptedFiles } });

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }, [quizData, setQuizData, handleImageUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: "image/*",
        multiple: false
    });

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
                    value={quizData.difficulty}
                    onChange={(e) => setQuizData({ ...quizData, difficulty: e.target.value })}
                    required
                >
                    <option value="">Select difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>

            <div>
                <label className="block poppins-regular font-medium mb-1">Quiz Image</label>
                <div
                    {...getRootProps({
                        className: `border-2 border-dashed p-4 rounded-xl cursor-pointer mb-4 ${
                            isDragActive ? "bg-blue-100" : "bg-white"
                        }`
                    })}
                >
                    <input {...getInputProps()}/>
                    {isDragActive ? (
                        <p className="text-center">Drop the image here...</p>
                    ) : (
                        <p className="text-center">
                            Drag & drop an image here, or click to select one
                        </p>
                    )}
                    {quizData.image && (
                        <p className="mt-2 text-center">{quizData.image.name}</p>
                    )}
                </div>

                {imagePreview ? (
                    <>
                        <label className="block poppins-regular font-medium mb-1">Image Preview</label>
                        <div className="mt-4">
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className="mx-auto w-full h-64 object-contain border-2 rounded-xl"
                            />
                        </div>
                    </>
                )

                :

                    quizData.image && (
                            <>
                                <label className="block poppins-regular font-medium mb-1">Image</label>
                                <div className="mt-4">
                                    <img
                                        src={quizData.image}
                                        alt="Preview"
                                        className="mx-auto w-full h-64 object-contain border-2 rounded-xl"
                                    />
                                </div>
                            </>
                        )
                }
            </div>
        </div>
    );
};

export default QuizDetailsForm;
