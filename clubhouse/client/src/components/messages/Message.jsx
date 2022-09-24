import { MdOutlineDeleteOutline } from "react-icons/md";

function Message(props) {
    function generateKey(pre) {
        return `${pre}_${new Date().getTime()}`;
    }

    function cleanDate(dt) {
        let d = new Date(dt);
        return d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    }

    async function deleteMessage(e) {
        e.preventDefault();

        let req = { id: e.target.id };

        await fetch("http://localhost:3000/delete", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(req),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));

        await props.onClick();
    }

    return (
        <div>
            <div className="flex flex-col items-center gap-5 mt-10 mb-10">
                {props.messages === undefined ? (
                    <div>Loading...</div>
                ) : (
                    props.messages.map((m) => {
                        return (
                            <div
                                className="bg-slate-200 rounded-lg w-1/3 whitespace-normal break-normal"
                                key={generateKey(m.id)}
                            >
                                {props.userStatus && props.user.admin ? (
                                    <div className="p-5">
                                        <div className="flex justify-between mb-8">
                                            <div className="text-sm italic">
                                                {m.user.username}
                                            </div>
                                            <MdOutlineDeleteOutline
                                                className="text-2xl"
                                                id={m.id}
                                                onClick={deleteMessage}
                                            />
                                        </div>
                                        <span>{m.message}</span>
                                        <div className="mt-5 text-right text-sm italic">
                                            {cleanDate(m.timestamp)}
                                        </div>
                                    </div>
                                ) : props.userStatus ? (
                                    <div className="p-5">
                                        <div className="mb-5 text-sm italic">
                                            {m.user.username}
                                        </div>
                                        <span>{m.message}</span>
                                        <div className="mt-5 text-right text-sm italic">
                                            {cleanDate(m.timestamp)}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-5">
                                        <div className="mb-5 text-sm italic">
                                            Log in to view author
                                        </div>
                                        <span>{m.message}</span>
                                        <div className="mt-5 text-right text-sm italic">
                                            Log in to view date
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default Message;
