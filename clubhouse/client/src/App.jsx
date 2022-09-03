import { useEffect, useState } from "react";

function App() {
    const [backendData, setbackendData] = useState([{}]);

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setbackendData(data));
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold underline">Hello World!</h1>

            {typeof backendData.tests === "undefined" ? (
                <p>Loading...</p>
            ) : (
                backendData.tests.map((test, i) => {
                    return <p key={i}>{test}</p>;
                })
            )}
        </div>
    );
}

export default App;
