import React from "react";
import Login from "./Login";
import Signup from "./Signup";

const Header = () => {
    return (
        <div className="flex justify-between">
            <div className="text-primary font-bold text-3xl">
                Club<span className="text-black">House</span>
            </div>
            <div></div>
            <div className="flex gap-3">
                <Login></Login>
                <Signup></Signup>
            </div>
        </div>
    );
};

export default Header;
