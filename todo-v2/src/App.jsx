import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import SidebarUi from "./components/sidebar/SidebarUi";
import Inbox from "./components/pages/Inbox";
import Today from "./components/pages/Today";
import Upcoming from "./components/pages/Upcoming";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";

import { db } from "./firebase-config";
import {
    collection,
    addDoc,
    Timestamp,
    query,
    orderBy,
    onSnapshot,
} from "firebase/firestore";

function App() {
    let [isOpen, setIsOpen] = useState(false);
    let [taskData, setTaskData] = useState([]);

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
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col border border-slate-300 rounded-md">
                                <input
                                    className="placeholder:italic border-t border-r border-l focus:outline-none pb-3 pl-1"
                                    placeholder="Task"
                                    name="title"
                                    type="text"
                                    required
                                    pattern="\S(.*\S)?"
                                ></input>
                                <textarea
                                    className="placeholder:italic w-100% h-28 focus:outline-none placeholder:text-sm pl-1"
                                    placeholder="Description"
                                    name="description"
                                    required
                                    pattern="\S(.*\S)?"
                                    type="text"
                                ></textarea>
                                <input type="date" name="date" required></input>
                            </div>
                            <div className="flex gap-2 ml-2 mt-3">
                                <input
                                    type="submit"
                                    value="Add"
                                    onClick={queryTasks}
                                ></input>
                                <button onClick={closeModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </Dialog.Panel>
            </Dialog>
        );
    };

    const writeToDB = async (data) => {
        try {
            await addDoc(collection(db, "tasks"), {
                title: data.title,
                description: data.description,
                date: data.date,
                created: Timestamp.now(),
            });
        } catch (error) {
            console.log("Error writing data to Firestore");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { title, description, date } = e.target.elements;
        const data = await {
            title: title.value,
            description: description.value,
            date: date.value,
            created: "",
        };

        setTaskData((prev) => [...prev, data]);
        writeToDB(data);
        closeModal();
    };

    const queryTasks = () => {
        const q = query(collection(db, "tasks"), orderBy("created", "asc"));
        onSnapshot(q, (qSnapShot) => {
            qSnapShot.docs.map((doc) => {
                console.log(doc.data());
            });
        });
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
