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

        await fetch("/api/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(message),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .then(e.target.reset());

        await props.onClick();
    }

    return (
        <div className="flex flex-col items-center w-screen">
            <div className="w-1/3">
                <form onSubmit={handleSubmit} id="message-form">
                    <div className="flex gap-5 items-center">
                        <textarea
                            form="message-form"
                            name="message"
                            onChange={handleChange}
                            className='"h-10 border-2 focus:border-primary focus:outline-none w-full'
                            rows="4"
                        ></textarea>

                        <button
                            type="submit"
                            className="btn btn-primary btn-sm"
                        >
                            <AiOutlineArrowUp></AiOutlineArrowUp>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MessageForm;
