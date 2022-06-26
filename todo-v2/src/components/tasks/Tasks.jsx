import { db } from "../../firebase-config";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { BiCircle, BiPencil } from "react-icons/bi";
import { GiTrashCan } from "react-icons/gi";

const Tasks = (props) => {
    // update status to done for finished tasks
    const handleDone = async (e) => {
        const docRef = doc(db, "tasks", e.target.id);
        try {
            await updateDoc(docRef, {
                status: "Done",
            });
        } catch (error) {
            alert(error);
        }
    };

    // delete tasks
    const handleDelete = async (e) => {
        const docRef = doc(db, "tasks", e.currentTarget.id);
        try {
            await deleteDoc(docRef);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div>
            <div className="flex gap-4 items-center group">
                <BiCircle onClick={handleDone} id={props.task.id}></BiCircle>
                <div className="flex w-full justify-between">
                    <div>{props.task.data.title}</div>
                    <div className="flex gap-1 items-center">
                        <BiPencil
                            size={20}
                            className="hidden group-hover:block"
                            id={props.task.id}
                            onClick={(e) => {
                                props.setUpdate();
                                props.setTaskId(e);
                            }}
                        ></BiPencil>
                        <GiTrashCan
                            id={props.task.id}
                            size={20}
                            className="hidden group-hover:block"
                            onClick={handleDelete}
                        ></GiTrashCan>
                        <div className="text-sm">{props.task.data.date}</div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    );
};

export default Tasks;
