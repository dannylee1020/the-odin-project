import { useEffect, useState } from "react";
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
import "./Task";
import { db } from "../../firebase-config";
import { BiCircle } from "react-icons/bi";

const TaskManager = () => {
    let [tasks, setTasks] = useState([]);

    // listens db change real time when component is mounted.
    useEffect(() => {
        const q = query(collection(db, "tasks"), orderBy("date", "asc"));
        onSnapshot(q, (qSnapshot) => {
            setTasks(
                qSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });
    }, []);

    const handleDone = async (e) => {
        const docRef = doc(db, "tasks", e.target.id);
        try {
            await deleteDoc(docRef);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="flex flex-col gap-3 w-3/4">
            {tasks.map((task) => {
                return (
                    <div key={task.id}>
                        <div className="flex gap-4 items-center">
                            <BiCircle
                                onClick={handleDone}
                                id={task.id}
                            ></BiCircle>
                            <div className="flex w-full justify-between">
                                <div>{task.data.title}</div>
                                <div>{task.data.date}</div>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                );
            })}
        </div>
    );
};

export default TaskManager;
