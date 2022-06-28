import { BsPlus } from "react-icons/bs";

const Today = (props) => {
    return (
        <div className="mt-10">
            <h2 className="font-bold text-xl mb-2">Today</h2>
            <div className="flex items-center mb-5" onClick={props.setAdd}>
                <span>
                    <BsPlus />
                </span>
                Add Task
            </div>
        </div>
    );
};

export default Today;
