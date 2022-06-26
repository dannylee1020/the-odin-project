const AddTask = (props) => {
    if (!props.isAdd) {
        return;
    }

    return (
        <div className="flex flex-col">
            <form onSubmit={props.handleSubmit}>
                <div className="flex flex-col border border-slate-300 rounded-md">
                    <input
                        className="placeholder:italic border-t border-r border-l focus:outline-none pb-3 pl-1"
                        placeholder="Task"
                        name="title"
                        type="text"
                        required
                        pattern="\S(.*\S)?"
                    ></input>
                    <textarea
                        className="placeholder:italic w-100% h-28 focus:outline-none placeholder:text-sm pl-1"
                        placeholder="Description"
                        name="description"
                        required
                        pattern="\S(.*\S)?"
                        type="text"
                    ></textarea>
                    <input type="date" name="date" required></input>
                </div>
                <div className="flex gap-2 ml-2 mt-3">
                    <input type="submit" value="Add"></input>
                    <button onClick={props.closeAdd}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;
