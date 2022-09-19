import { useState } from "react";

function Login(props) {
    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setLoginInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let { username, password } = loginInfo;
        let info = { username, password };
        let url = "http://localhost:3000/login";

        // include credentials to persist user credential in a session
        await fetch(url, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(info),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .then(() => (window.location.href = "/private"))
            .then(e.target.reset());
    };
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
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <label>Username:</label>
                            <input
                                type="text"
                                name="username"
                                className="border-2 focus:border-primary focus:outline-none h-8"
                                onChange={handleChange}
                                required
                            ></input>
                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <label>Password:</label>
                            <input
                                type="text"
                                name="password"
                                className="h-8 border-2 focus:border-primary focus:outline-none"
                                onChange={handleChange}
                                required
                            ></input>
                        </div>
                        <div className="modal-action">
                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                                onClick={props.getUserStatus}
                            >
                                <label htmlFor="login-modal" className="w-full">
                                    Log in
                                </label>
                            </button>
                        </div>
                    </form>
                </div>
            </label>
        </div>
    );
}

export default Login;
