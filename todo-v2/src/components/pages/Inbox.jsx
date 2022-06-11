import { BsPlus } from "react-icons/bs";

const Inbox = () => {
    return (
        <div>
            <h2 className="font-bold">Inbox</h2>
            <div className="flex items-center">
                <span>
                    <BsPlus />
                </span>
                Add Task
            </div>
        </div>
    );
};

export default Inbox;
