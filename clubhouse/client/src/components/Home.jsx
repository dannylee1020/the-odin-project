import Header from "./header/Header";
import Message from "./messages/Message";
import MessageForm from "./messages/MessageForm";
import { useEffect, useState } from "react";

function Home() {
    const [userStatus, setUserStatus] = useState(false);
    const [user, setUser] = useState();
    const [messages, setMessages] = useState([]);
    const [render, setRender] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            let res = await getUserStatus();
            let data = await res.json();
            setUser(data);
            res.status !== 401 ? setUserStatus(true) : setUserStatus(false);
        };

        fetchData();
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
        let res = await fetch("http://localhost:3000/", {
            method: "GET",
            credentials: "include",
        });

        return res;
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
                        <div>
                            <MessageForm
                                onClick={() => {
                                    // trigger rerender of the component so that fetch in useEffect is triggered
                                    setRender((value) => !value);
                                }}
                            />
                        </div>
                    </div>
                ) : null}
            </div>
            <Message
                messages={messages}
                userStatus={userStatus}
                user={user}
                onClick={() => {
                    setRender((value) => !value);
                }}
            />
        </div>
    );
}

export default Home;
