import { db } from "../../firebase-config";
import { doc, deleteDoc } from "firebase/firestore";
import { BiCircle } from "react-icons/bi";

const Tasks = (props) => {
    const handleDone = async (e) => {
        const docRef = doc(db, "tasks", e.target.id);
        try {
            await deleteDoc(docRef);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div>
            <div className="flex gap-4 items-center">
                <BiCircle onClick={handleDone} id={props.task.id}></BiCircle>
                <div className="flex w-full justify-between">
                    <div>{props.task.data.title}</div>
                    <div>{props.task.data.date}</div>
                </div>
            </div>
            <hr></hr>
        </div>
    );
};

export default Tasks;
