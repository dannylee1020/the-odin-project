import Header from "./components/header/Header";
import PrivatePage from "./components/private/PrivatePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
    const setUserAuth = () => {
        const userStatus = localStorage.getItem("status");

        userStatus !== true
            ? localStorage.setItem("status", true)
            : localStorage.setItem("status", false);
    };

    return (
        <BrowserRouter>
            <div className="mx-5 mt-5">
                <Routes>
                    <Route
                        path="/"
                        element={<Header setUserAuth={setUserAuth}></Header>}
                    ></Route>
                    <Route
                        path="/private"
                        element={
                            <PrivatePage
                                setUserAuth={setUserAuth}
                            ></PrivatePage>
                        }
                    ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
