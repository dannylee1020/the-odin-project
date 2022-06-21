import { BsPlus } from "react-icons/bs";
import TaskManager from "../tasks/TaskManager";

const Today = (props) => {
    return (
        <div className="w-screen flex flex-col">
            <div>
                <h2 className="font-bold">Today</h2>
                <div className="flex items-center" onClick={props.isOpen}>
                    <span>
                        <BsPlus />
                    </span>
                    Add Task
                </div>
            </div>
            <TaskManager></TaskManager>
        </div>
    );
};

export default Today;
