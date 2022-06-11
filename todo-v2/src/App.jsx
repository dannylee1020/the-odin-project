import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import SidebarUi from "./components/sidebar/SidebarUi";
import Inbox from "./components/pages/Inbox";
import Today from "./components/pages/Today";
import Upcoming from "./components/pages/Upcoming";

function App() {
    return (
        <BrowserRouter>
            <Header></Header>
            <div className="flex">
                <SidebarUi></SidebarUi>
                <Routes>
                    <Route path="/" element={<Inbox />}></Route>
                    <Route path="/today" element={<Today />}></Route>
                    <Route path="/upcoming" element={<Upcoming />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
