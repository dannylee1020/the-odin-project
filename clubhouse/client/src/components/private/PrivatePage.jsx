import { useState } from "react";

function PrivatePage(props) {
    const [passcode, setPasscode] = useState({
        passcode: "",
    });

    const handleChange = (e) => {
        setPasscode((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch("http://localhost:3000/private", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(passcode),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message == "success") {
                    alert("Success!");
                } else {
                    alert("Wrong Passcode");
                    return;
                }
            });

        await fetch("http://localhost:3000/", {
            method: "get",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        })
            .then((res) => (res.status != 401 ? props.setUserAuth() : null))
            .then(() => (window.location.href = "/"));
    };

    return (
        <div className="flex justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl mb-20 text-primary ">
                    Enter Passcode to Join 🔒
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center">
                        <input
                            type="text"
                            name="passcode"
                            className="w-full h-8 border-2 focus:border-primary focus:outline-none mb-7"
                            onChange={handleChange}
                            required
                        ></input>
                        <button className="btn btn-primary w-full text-white font-bold">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PrivatePage;
