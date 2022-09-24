import Header from "./header/Header";
import Message from "./messages/Message";
import MessageForm from "./messages/MessageForm";
import { useEffect, useState } from "react";

function Home() {
    const [userStatus, setUserStatus] = useState(false);
    const [messages, setMessages] = useState([]);
    const [render, setRender] = useState(false);

    useEffect(() => {
        getUserStatus();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getMessages();
            let data = await response.data;

            setMessages(data);
        };

        fetchData();
    }, [render]);

    // check if user is logged in
    async function getUserStatus() {
        let status = await fetch("http://localhost:3000/", {
            method: "GET",
            credentials: "include",
        }).then((res) =>
            res.status !== 401 ? setUserStatus(true) : setUserStatus(false)
        );

        return status;
    }

    // get all the messages to display in home page
    async function getMessages() {
        let response = await fetch("http://localhost:3000/messages", {
            method: "GET",
            credentials: "include",
        });

        let data = await response.json();
        return data;
    }

    return (
        <div className="flex flex-col h-5/6">
            <div>
                <Header
                    getUserStatus={getUserStatus}
                    onClick={() => setUserStatus(false)}
                    userStatus={userStatus}
                />
                {userStatus ? (
                    <div>
                        <MessageForm
                            onClick={() => {
                                setRender((value) => !value);
                            }}
                        />
                    </div>
                ) : null}
            </div>
            <Message messages={messages} />
        </div>
    );
}

export default Home;
//
