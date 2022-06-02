import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Shop/Home";
import Cart from "./components/Cart/Cart";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
