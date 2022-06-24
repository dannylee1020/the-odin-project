import TaskManager from "../tasks/TaskManager";

const Done = () => {
    return (
        <div className="w-screen flex flex-col">
            <h2 className="font-bold">Done</h2>
            <TaskManager></TaskManager>
        </div>
    );
};

export default Done;
