import {BrowserRouter, Route, Routes} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RootLayout/>}>
                    <Route index={true} element={<Dashboard/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
