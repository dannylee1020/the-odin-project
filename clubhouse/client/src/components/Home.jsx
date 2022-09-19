import Header from "./header/Header";
import Message from "./messages/Message";
import MessageForm from "./messages/MessageForm";
import { useEffect, useState } from "react";

function Home() {
    const [userStatus, setUserStatus] = useState(false);

    useEffect(() => {
        getUserStatus();
    }, []);

    // check if user is logged in
    async function getUserStatus() {
        await fetch("http://localhost:3000/", {
            method: "GET",
            credentials: "include",
        }).then((res) =>
            res.status !== 401 ? setUserStatus(true) : setUserStatus(false)
        );
    }

    // get all the messages to display in home page
    async function getMessages() {
        let messages = await fetch("http://localhost:3000/messages", {
            method: "GET",
            credentials: "include",
        });

        return messages;
    }

    return (
        <div className="flex flex-col justify-between h-5/6">
            <div>
                <Header
                    getUserStatus={getUserStatus}
                    onClick={() => setUserStatus(false)}
                    userStatus={userStatus}
                />
                <Message getMessages={getMessages} />
            </div>
            <div></div>
            {userStatus ? (
                <div>
                    <MessageForm getMessages={getMessages} />
                </div>
            ) : null}
        </div>
    );
}

export default Home;
