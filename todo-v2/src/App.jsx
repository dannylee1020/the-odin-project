import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import SidebarUi from "./components/sidebar/SidebarUi";
import Inbox from "./components/pages/Inbox";
import Today from "./components/pages/Today";
import Upcoming from "./components/pages/Upcoming";

import { useState } from "react";
import { Dialog } from "@headlessui/react";

function App() {
    let [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const makeModal = () => {
        return (
            <Dialog
                open={isOpen}
                onClose={closeModal}
                className="absolute flex inset-0 items-center justify-center overflow-y-auto z-10"
            >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
                <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl">
                    <div className="flex flex-col">
                        <textarea
                            className="placeholder:italic w-100% h-28"
                            placeholder="what's in your mind today?"
                            type="text"
                        ></textarea>
                        <div className="flex gap-5">
                            <button>Add</button>
                            <button onClick={closeModal}>Cancel</button>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        );
    };

    return (
        <BrowserRouter>
            <Header></Header>
            <div className="flex">
                <SidebarUi></SidebarUi>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Inbox makeModal={makeModal} isOpen={openModal} />
                        }
                    ></Route>
                    <Route
                        path="/today"
                        element={
                            <Today makeModal={makeModal} isOpen={openModal} />
                        }
                    ></Route>
                    <Route path="/upcoming" element={<Upcoming />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
