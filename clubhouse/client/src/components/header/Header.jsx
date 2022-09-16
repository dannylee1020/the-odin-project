import { useState, useEffect } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";

const Header = (props) => {
    const status = localStorage.getItem("status");

    return (
        <div className="flex justify-between">
            <div className="text-primary font-bold text-3xl">
                Club<span className="text-black">House</span>
            </div>
            <div></div>
            {status ? (
                <div className="flex">
                    <Logout setUserAuth={props.setUserAuth}></Logout>
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
