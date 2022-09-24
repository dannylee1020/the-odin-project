import React from "react";
import { useState, useEffect } from "react";

function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        confirm: "",
    });

    const [admin, setAdminStatus] = useState(false);

    const handleInputChange = (e) => {
        setSignupInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { first_name, last_name, username, password, confirm } =
            signupInfo;

        const info = {
            first_name,
            last_name,
            username,
            password,
            admin: admin,
        };

        const url = "http://localhost:3000/signup";

        if (password === confirm) {
            fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(info),
            })
                .then((res) => res.json())
                .then((data) => console.log({ message: "success", data }))
                .then(e.target.reset());
        } else {
            alert("Passwords do not match");
        }
    };

    return (
        <div>
            <label
                htmlFor="signup-modal"
                className="btn modal-button btn-primary font-bold"
            >
                Sign Up
            </label>
            <input
                type="checkbox"
                id="signup-modal"
                className="modal-toggle"
            ></input>
            <label htmlFor="signup-modal" className="modal cursor-pointer">
                <div className="modal-box">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <label>First Name:</label>
                            <input
                                type="text"
                                className="border-2 focus:border-primary focus:outline-none h-8"
                                name="first_name"
                                onChange={handleInputChange}
                                required
                            ></input>
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <label>Last Name:</label>
                            <input
                                type="text"
                                className="border-2 focus:border-primary focus:outline-none h-8"
                                name="last_name"
                                onChange={handleInputChange}
                                required
                            ></input>
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <label>Username:</label>
                            <input
                                type="text"
                                className="border-2 focus:border-primary focus:outline-none h-8"
                                name="username"
                                onChange={handleInputChange}
                                required
                            ></input>
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <label>Password:</label>
                            <input
                                type="text"
                                name="password"
                                className="h-8 border-2 focus:border-primary focus:outline-none"
                                onChange={handleInputChange}
                                required
                            ></input>
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <label>Confirm Password:</label>
                            <input
                                type="text"
                                name="confirm"
                                className="h-8 border-2 focus:border-primary focus:outline-none"
                                onChange={handleInputChange}
                                required
                            ></input>
                        </div>
                        <div className="flex flex gap-2 mt-5 items-center">
                            <label>Admin? </label>
                            <input
                                type="checkbox"
                                name="admin"
                                className="checkbox checkbox-primary checkbox-md bg-white rounded border-2 "
                                onClick={() => setAdminStatus(true)}
                            ></input>
                        </div>
                        <div className="modal-action">
                            <button
                                type="submit"
                                className="btn btn-primary w-full "
                            >
                                <label
                                    htmlFor="signup-modal"
                                    className="w-full"
                                >
                                    Sign up
                                </label>
                            </button>
                        </div>
                    </form>
                </div>
            </label>
        </div>
    );
}

export default Signup;
