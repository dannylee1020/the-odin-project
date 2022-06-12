import { BsPlus } from "react-icons/bs";

const Inbox = (props) => {
    return (
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
    );
};

export default Inbox;
