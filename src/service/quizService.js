import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
import {addDoc, collection, getDocs} from "firebase/firestore";
import {db} from "../util/firebase.js";
// const admin = require('firebase-admin');
// const serviceAccount = require('service-account-key.json');
//
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });

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

const getQuizCount = async () => {
    const querySnapshot = await getDocs(collection(db, "quiz"));
    return querySnapshot.size;
};

const getAllAttempts = async () => {
    const querySnapshot = await getDocs(collection(db, "quiz"));

    const totalAttempts = querySnapshot.docs.reduce((acc, doc) => {
        const data = doc.data();
        return acc + (data.attempts || 0);
    }, 0);

    return totalAttempts;
};



export const quizService = { saveQuiz, getAllQuizzes, getQuizCount, getAllAttempts };
