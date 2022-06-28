import { BsPlus } from "react-icons/bs";

const Inbox = (props) => {
    return (
        <div className="mt-10">
            <h2 className="font-bold text-xl mb-2">Inbox</h2>
            <div className="flex items-center mb-5" onClick={props.setAdd}>
                <span>
                    <BsPlus />
                </span>
                Add Task
            </div>
        </div>
    );
};

export default Inbox;
