import { Dialog } from "@headlessui/react";

const Modal = (props) => {
    return (
        <Dialog
            open={props.isOpen}
            onClose={props.closeModal}
            className="absolute flex inset-0 items-center justify-center overflow-y-auto z-10"
        >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
            <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl">
                <div className="flex flex-col">
                    <form
                        onSubmit={(e) => {
                            props.isUpdate
                                ? props.handleUpdate(e)
                                : props.handleSubmit(e);
                        }}
                    >
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
                            <button onClick={props.closeModal}>Cancel</button>
                        </div>
                    </form>
                </div>
            </Dialog.Panel>
        </Dialog>
    );
};

export default Modal;
