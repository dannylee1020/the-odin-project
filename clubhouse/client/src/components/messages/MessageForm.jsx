import { AiOutlineArrowUp } from "react-icons/ai";
import { useState } from "react";

function MessageForm(props) {
    const [message, setMessage] = useState({
        message: "",
    });

    function handleChange(e) {
        setMessage({
            // no need to handle previous value because we are only storing one key value.
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        await fetch("http://localhost:3000/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(message),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .then(e.target.reset());
    }

    return (
        <div className="flex flex-col items-center w-screen">
            <div className="w-1/3">
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-5">
                        <input
                            type="text"
                            name="message"
                            onChange={handleChange}
                            className='"h-8 border-2 focus:border-primary focus:outline-none w-full'
                        ></input>

                        <button
                            type="submit"
                            className="btn btn-primary btn-sm"
                        >
                            <AiOutlineArrowUp
                                onClick={props.getMessages}
                            ></AiOutlineArrowUp>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MessageForm;
