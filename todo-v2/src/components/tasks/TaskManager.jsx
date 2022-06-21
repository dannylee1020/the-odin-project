import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";
import Tasks from "./Tasks";
import { useLocation } from "react-router-dom";

const TaskManager = (props) => {
    let [tasks, setTasks] = useState([]);
    let [today, setToday] = useState([]);
    let [upcoming, setUpcoming] = useState([]);

    let location = useLocation();

    let date = new Date();
    let currentDate = new Date(
        date.getTime() - date.getTimezoneOffset() * 60000
    )
        .toISOString()
        .split("T")[0];

    //TODO: add update and delete functionality

    useEffect(() => {
        const q = query(collection(db, "tasks"), orderBy("date", "asc"));
        onSnapshot(q, (qSnapshot) => {
            setTasks(
                qSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );

            setToday(
                qSnapshot.docs
                    .filter((doc) => {
                        return doc.data().date === currentDate;
                    })
                    .map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
            );

            setUpcoming(
                qSnapshot.docs
                    .filter((doc) => {
                        return doc.data().date > currentDate;
                    })
                    .map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
            );
        });
    }, []);

    const renderTasks = () => {
        if (location.pathname === "/today") {
            return today.map((t) => {
                return <Tasks task={t} key={t.id}></Tasks>;
            });
        } else if (location.pathname === "/upcoming") {
            return upcoming.map((t) => {
                return <Tasks task={t} key={t.id}></Tasks>;
            });
        } else {
            return tasks.map((t) => {
                return <Tasks task={t} key={t.id}></Tasks>;
            });
        }
    };

    return <div className="flex flex-col gap-3 w-3/4">{renderTasks()}</div>;
};

export default TaskManager;
