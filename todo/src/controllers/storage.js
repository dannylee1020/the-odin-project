import { format, compareAsc } from "date-fns";
import { Tasks } from "../controllers/task";

const Storage = () => {
    const getTasks = () => {
        let data = localStorage.getItem("todo");
        return JSON.parse(data);
    };

    const setTasks = () => {
        let task = document.querySelector("#each-task");
        let date = document.querySelector("#task-date");

        let taskData = {
            taskName: task,
            taksDate: date,
        };

        localStorage.setItem("todo", JSON.stringify(taskData));
    };

    const deleteTasks = {};

    const getProjects = {};

    const setProjects = {};

    const deleteProjects = {};
};
