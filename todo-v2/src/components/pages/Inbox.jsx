import { BsPlus } from "react-icons/bs";
import TaskManager from "./TaskManager";

const Inbox = (props) => {
    return (
        <div className="w-screen flex flex-col">
            <div>
                <h2 className="font-bold">Inbox</h2>
                <div className="flex items-center" onClick={props.isOpen}>
                    <span>
                        <BsPlus />
                    </span>
                    Add Task
                </div>
                <div>{props.makeModal()}</div>
            </div>
            <TaskManager></TaskManager>
        </div>
    );
};

export default Inbox;
