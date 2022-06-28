const UpdateTask = (props) => {
    if (!props.isUpdate) {
        return;
    }

    return (
        <div className="flex flex-col">
            <form onSubmit={props.handleUpdate}>
                <div className="flex flex-col border border-slate-300 rounded-md">
                    <input
                        className="placeholder:italic border-t border-r border-l focus:outline-none pb-3 pl-1"
                        placeholder="Task"
                        name="title"
                        type="text"
                        // required
                        // pattern="\S(.*\S)?"
                    ></input>
                    <textarea
                        className="placeholder:italic w-100% h-28 focus:outline-none placeholder:text-sm pl-1"
                        placeholder="Description"
                        name="description"
                        // required
                        // pattern="\S(.*\S)?"
                        type="text"
                    ></textarea>
                    <input type="date" name="date"></input>
                </div>
                <div className="flex gap-2 ml-2 mt-3 mb-5">
                    <input
                        type="submit"
                        value="Update"
                        className="btn btn-sm bg-[#DB4C3F] border-0 rounded-lg"
                    ></input>
                    <button
                        type="button"
                        onClick={props.closeUpdate}
                        className="bg-[#E5E5E5] rounded-lg text-sm pl-2 pr-2"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateTask;
