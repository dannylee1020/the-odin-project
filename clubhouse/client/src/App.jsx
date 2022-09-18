import Home from "./components/Home";
import PrivatePage from "./components/private/PrivatePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="mx-5 mt-5 h-screen">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/private"
                        element={<PrivatePage></PrivatePage>}
                    ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
