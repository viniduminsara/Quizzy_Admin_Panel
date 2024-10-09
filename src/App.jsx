import {BrowserRouter, Route, Routes} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Quizzes from "./pages/Quizzes.jsx";
import NewQuiz from "./pages/NewQuiz.jsx";
import {ToastContainer} from "react-toastify";
import EditQuiz from "./pages/EditQuiz.jsx";

function App() {

    return (
        <>
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
                </Routes>
            </BrowserRouter>
            <ToastContainer position='bottom-right' />
        </>
    )
}

export default App
