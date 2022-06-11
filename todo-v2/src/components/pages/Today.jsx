import { BsPlus } from "react-icons/bs";

const Today = () => {
    return (
        <div>
            <h2 className="font-bold">Today</h2>
            <div className="flex items-center">
                <span>
                    <BsPlus />
                </span>
                Add Task
            </div>
        </div>
    );
};

export default Today;
