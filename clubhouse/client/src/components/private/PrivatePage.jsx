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

        await fetch("/api/private", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(passcode),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message == "success") {
                    alert("Success!");
                    window.location.href = "/";
                } else {
                    alert("Wrong Passcode");
                    return;
                }
            });
    };

    return (
        <div className="flex justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl mb-20 text-primary ">
                    Enter Passcode to Join 🔒
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center">
                        <div className="w-full flex gap-5 justify-center">
                            <input
                                type="text"
                                name="passcode"
                                className="w-full h-8 border-2 focus:border-primary focus:outline-none mb-7"
                                onChange={handleChange}
                                required
                            ></input>
                            <div>
                                <label
                                    htmlFor="hint"
                                    className="btn modal-button btn-sm bg-[#FAF7F5] border-0 text-[#40ABB0] hover:bg-[#FAF7F5]"
                                >
                                    ?!
                                </label>
                                <input
                                    type="checkbox"
                                    id="hint"
                                    className="modal-toggle"
                                ></input>
                                <div className="modal">
                                    <div className="modal-box relative">
                                        <label
                                            htmlFor="hint"
                                            className="btn btn-sm btn-circle right-2 top-2 modal-button absolute bg-[#FAF7F5] border-0 text-black hover:bg-[#FAF7F5] text-slate-600"
                                        >
                                            x
                                        </label>
                                        <h3 className="text-lg font-bold">
                                            Hint
                                        </h3>
                                        <p className="py-4 font-serif">
                                            What is a magical phrase from the
                                            story of "Ali Baba and the Forty
                                            Thieves" ?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
