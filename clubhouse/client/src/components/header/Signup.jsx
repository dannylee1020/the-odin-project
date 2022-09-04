import React from "react";

function Signup() {
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
                    <form method="post" action="/signup">
                        <div className="flex flex-col gap-2">
                            <label>Name:</label>
                            <input
                                type="text"
                                className="border-2 focus:border-primary focus:outline-none h-8"
                                name="name"
                                required
                            ></input>
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <label>Email Address:</label>
                            <input
                                type="text"
                                className="border-2 focus:border-primary focus:outline-none h-8"
                                name="email"
                                required
                            ></input>
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <label>Password:</label>
                            <input
                                type="text"
                                name="password"
                                className="h-8 border-2 focus:border-primary focus:outline-none"
                                required
                            ></input>
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <label>Confirm Password:</label>
                            <input
                                type="text"
                                name="confirm"
                                className="h-8 border-2 focus:border-primary focus:outline-none"
                                required
                            ></input>
                        </div>
                        <div className="modal-action">
                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </label>
        </div>
    );
}

export default Signup;
