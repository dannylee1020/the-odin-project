import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import SidebarUi from "./components/sidebar/SidebarUi";
import Inbox from "./components/pages/Inbox";
import Today from "./components/pages/Today";
import Upcoming from "./components/pages/Upcoming";
import Done from "./components/pages/Done";
import Modal from "./components/pages/Modal";
import { useState } from "react";

import { db } from "./firebase-config";
import {
    collection,
    addDoc,
    Timestamp,
    query,
    orderBy,
    onSnapshot,
} from "firebase/firestore";

// TODO: add update and delete
// TODO: replace project tab with Done.
// TODO: add sign in functionality

// * Try using DaisyUI for frontend
// * Try learning Redux for state management

function App() {
    let [isOpen, setIsOpen] = useState(false);
    let [taskData, setTaskData] = useState([]);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const writeToDB = async (data) => {
        try {
            await addDoc(collection(db, "tasks"), {
                title: data.title,
                description: data.description,
                date: data.date,
                created: Timestamp.now(),
                status: "in-progress",
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
            status: "",
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
                            <>
                                <Inbox isOpen={openModal} />
                                <Modal
                                    handleSubmit={handleSubmit}
                                    queryTasks={queryTasks}
                                    closeModal={closeModal}
                                    isOpen={isOpen}
                                ></Modal>
                            </>
                        }
                    ></Route>
                    <Route
                        path="/today"
                        element={
                            <>
                                <Today isOpen={openModal} />
                                <Modal
                                    handleSubmit={handleSubmit}
                                    queryTasks={queryTasks}
                                    closeModal={closeModal}
                                    isOpen={isOpen}
                                ></Modal>
                            </>
                        }
                    ></Route>
                    <Route path="/upcoming" element={<Upcoming />}></Route>
                    <Route path="/done" element={<Done />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
