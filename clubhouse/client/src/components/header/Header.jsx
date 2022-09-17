import { useState, useEffect } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";

const Header = (props) => {
    const [userStatus, setUserStatus] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3000/", {
            method: "get",
            credentials: "include",
        }).then((res) =>
            res.status !== 401 ? setUserStatus(true) : setUserStatus(false)
        );
    }, []);

    return (
        <div className="flex justify-between">
            <div className="text-primary font-bold text-3xl">
                Club<span className="text-black">House</span>
            </div>
            <div></div>
            {userStatus ? (
                <div className="flex">
                    <Logout onClick={() => setUserStatus(false)}></Logout>
                </div>
            ) : (
                <div className="flex gap-3">
                    <Login></Login>
                    <Signup></Signup>
                </div>
            )}
        </div>
    );
};

export default Header;
