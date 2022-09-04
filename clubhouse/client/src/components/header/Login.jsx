import React from "react";

function Login() {
    return (
        <div>
            <label
                htmlFor="login-modal"
                className="btn modal-button btn-primary font-bold"
            >
                Log In
            </label>
            <input
                type="checkbox"
                id="login-modal"
                className="modal-toggle"
            ></input>
            <label htmlFor="login-modal" className="modal cursor-pointer">
                <div className="modal-box">
                    <form method="post" action="/login">
                        <div className="flex flex-col gap-2">
                            <label>Email Address:</label>
                            <input
                                type="text"
                                className="border-2 focus:border-primary focus:outline-none h-8"
                                required
                            ></input>
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <label>Password:</label>
                            <input
                                type="text"
                                required
                                className="h-8 border-2 focus:border-primary focus:outline-none"
                            ></input>
                        </div>
                        <div className="modal-action">
                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </label>
        </div>
    );
}

export default Login;
