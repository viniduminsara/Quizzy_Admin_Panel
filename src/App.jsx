import {BrowserRouter, Route, Routes} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Quizzes from "./pages/Quizzes.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RootLayout/>}>
                    <Route index={true} element={<Dashboard/>}/>
                    <Route path='/quizzes' element={<Quizzes/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
