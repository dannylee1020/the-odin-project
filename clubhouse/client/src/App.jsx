import Header from "./components/header/Header";
import PrivatePage from "./components/private/PrivatePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="mx-5 mt-5">
                <Routes>
                    <Route path="/" element={<Header></Header>}></Route>
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
