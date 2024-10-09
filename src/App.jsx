import {BrowserRouter, Route, Routes} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Quizzes from "./pages/Quizzes.jsx";
import NewQuiz from "./pages/NewQuiz.jsx";
import {ToastContainer} from "react-toastify";
import EditQuiz from "./pages/EditQuiz.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import {AuthProvider} from "./store/AuthContext.jsx";

function App() {

    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<RootLayout/>}>
                            <Route index={true} element={<Dashboard/>}/>
                            <Route path='quizzes'>
                                <Route index={true} element={<Quizzes/>}/>
                                <Route path='new' element={<NewQuiz/>}/>
                                <Route path=':quizId/edit' element={<EditQuiz/>}/>
                            </Route>
                        </Route>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/signup' element={<Signup/>}/>
                    </Routes>
                </BrowserRouter>
                <ToastContainer position='bottom-right' />
            </AuthProvider>
        </>
    )
}

export default App
