import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from "../util/firebase.js";

const saveQuiz = async (quizData) => {
    const storage = getStorage();
    const storageRef = ref(storage, `quiz-images/${quizData.image.name}`);

    const snapshot = await uploadBytes(storageRef, quizData.image);
    const imageUrl = await getDownloadURL(snapshot.ref);

    const quizRef = collection(db, "quiz");
    await addDoc(quizRef, {
        quizName: quizData.quizName,
        description: quizData.description,
        difficulty: quizData.difficulty,
        imageUrl,
        attempts: quizData.attempts,
        questions: quizData.questions
    });

};

const getAllQuizzes = async () => {
    const querySnapshot = await getDocs(collection(db, "quiz"));

    const quizData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));

    return quizData;
};

export const quizService = { saveQuiz, getAllQuizzes };
