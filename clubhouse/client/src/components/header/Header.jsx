import { useState, useEffect } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";

const Header = () => {
    const [userStatus, setUserStatus] = useState(false);

    const setUserAuth = () => {
        userStatus === false ? setUserStatus(true) : setUserStatus(false);
    };

    return (
        <div className="flex justify-between">
            <div className="text-primary font-bold text-3xl">
                Club<span className="text-black">House</span>
            </div>
            <div></div>
            {userStatus ? (
                <div className="flex">
                    <Logout setUserAuth={setUserAuth}></Logout>
                </div>
            ) : (
                <div className="flex gap-3">
                    <Login setUserAuth={setUserAuth}></Login>
                    <Signup></Signup>
                </div>
            )}
        </div>
    );
};

export default Header;
