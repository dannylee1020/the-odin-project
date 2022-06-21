import TaskManager from "../tasks/TaskManager";

const Upcoming = () => {
    return (
        <div className="w-screen flex flex-col">
            <h2 className="font-bold">Upcoming</h2>
            <TaskManager></TaskManager>
        </div>
    );
};

export default Upcoming;
