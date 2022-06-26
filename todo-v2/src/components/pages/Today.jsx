import { BsPlus } from "react-icons/bs";

const Today = (props) => {
    return (
        <div>
            <h2 className="font-bold">Today</h2>
            <div className="flex items-center" onClick={props.setAdd}>
                <span>
                    <BsPlus />
                </span>
                Add Task
            </div>
        </div>
    );
};

export default Today;
