import Header from "./header/Header";
import Message from "./messages/Message";
import MessageForm from "./messages/MessageForm";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        getMessages();
    }, []);

    async function getMessages() {
        let messages = await fetch("http://localhost:3000/messages", {
            method: "get",
            credentials: "include",
        });

        return messages;
    }

    return (
        <div className="flex flex-col justify-between h-5/6">
            <div>
                <Header />
                <Message getMessages={getMessages} />
            </div>
            <div></div>
            <div>
                <MessageForm getMessages={getMessages} />
            </div>
        </div>
    );
}

export default Home;
