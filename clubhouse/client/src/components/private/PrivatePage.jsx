import { useState } from "react";

function PrivatePage() {
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

        const url = "http://localhost:3000/private";
        await fetch(url, {
            method: "get",
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
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
