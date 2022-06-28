import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/header/Header";
import SidebarUi from "./components/sidebar/SidebarUi";
import Inbox from "./components/pages/Inbox";
import Today from "./components/pages/Today";
import Upcoming from "./components/pages/Upcoming";
import Done from "./components/pages/Done";
import TaskManager from "./components/tasks/TaskManager";
import AddTask from "./components/tasks/AddTask";
import UpdateTask from "./components/tasks/UpdateTask";

import { db } from "./firebase-config";
import {
    collection,
    addDoc,
    updateDoc,
    doc,
    Timestamp,
} from "firebase/firestore";

// TODO: add sign in functionality
// * design header with DaisyUI and add sign in functionality.

function App() {
    // need to display add and update form based on what user wants to do
    let [isAdd, setIsAdd] = useState(false);
    let [isUpdate, setIsUpdate] = useState(false);

    // state to store task id when edit button is clicked -- need id to update in firestore
    let [taskId, setTaskId] = useState("");

    // writes form data to DB
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

    // adds new task to DB from form submit
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

        writeToDB(data);
        setIsAdd(false);
    };

    // updates existing task data in DB
    const handleUpdate = async (e) => {
        e.preventDefault();

        const taskDocRef = doc(db, "tasks", taskId);
        const { title, description, date } = e.target.elements;

        try {
            await updateDoc(taskDocRef, {
                title: title.value,
                description: description.value,
                date: date.value,
            });
        } catch (err) {
            console.log(err);
        }

        setIsUpdate(false);
    };

    return (
        <div data-theme="corporate">
            <BrowserRouter>
                <Header></Header>
                <div className="flex">
                    <SidebarUi></SidebarUi>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <div className="flex justify-center w-screen">
                                        <div className="w-5/6">
                                            <Inbox
                                                setAdd={() => setIsAdd(true)}
                                                closeAdd={() => setIsAdd(false)}
                                            />
                                            <AddTask
                                                isAdd={isAdd}
                                                closeAdd={() => setIsAdd(false)}
                                                handleSubmit={handleSubmit}
                                            ></AddTask>
                                            <UpdateTask
                                                isUpdate={isUpdate}
                                                handleUpdate={handleUpdate}
                                                closeUpdate={() =>
                                                    setIsUpdate(false)
                                                }
                                            ></UpdateTask>
                                            <TaskManager
                                                setUpdate={() =>
                                                    setIsUpdate(true)
                                                }
                                                setTaskId={(e) => {
                                                    setTaskId(e.target.id);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </>
                            }
                        ></Route>
                        <Route
                            path="/today"
                            element={
                                <>
                                    <div className="flex justify-center w-screen">
                                        <div className="w-5/6">
                                            <Today
                                                setAdd={() => setIsAdd(true)}
                                            />
                                            <AddTask
                                                isAdd={isAdd}
                                                closeAdd={() => setIsAdd(false)}
                                                handleSubmit={handleSubmit}
                                            ></AddTask>
                                            <UpdateTask
                                                isUpdate={isUpdate}
                                                handleUpdate={handleUpdate}
                                                closeUpdate={() =>
                                                    setIsUpdate(false)
                                                }
                                            ></UpdateTask>
                                            <TaskManager
                                                setUpdate={() =>
                                                    setIsUpdate(true)
                                                }
                                                setTaskId={(e) => {
                                                    setTaskId(e.target.id);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </>
                            }
                        ></Route>
                        <Route
                            path="/upcoming"
                            element={
                                <>
                                    <div className="flex justify-center w-screen">
                                        <div className="w-5/6">
                                            <Upcoming />
                                            <UpdateTask
                                                isUpdate={isUpdate}
                                                handleUpdate={handleUpdate}
                                                closeUpdate={() =>
                                                    setIsUpdate(false)
                                                }
                                            ></UpdateTask>
                                            <TaskManager
                                                setUpdate={() => {
                                                    setIsUpdate(true);
                                                }}
                                                setTaskId={(e) => {
                                                    setTaskId(e.target.id);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </>
                            }
                        ></Route>
                        <Route
                            path="/done"
                            element={
                                <>
                                    <div className="flex justify-center w-screen">
                                        <div className="w-5/6">
                                            <Done />
                                            <TaskManager
                                                setUpdate={() => {
                                                    setIsUpdate(true);
                                                }}
                                                setTaskId={(e) => {
                                                    setTaskId(e.target.id);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </>
                            }
                        ></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
