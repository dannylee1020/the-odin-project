function Message(props) {
    function generateKey(pre) {
        return `${pre}_${new Date().getTime()}`;
    }

    return (
        <div>
            <div className="flex flex-col items-center gap-5 mt-10 mb-10">
                {props.messages === undefined ? (
                    <div>Loading...</div>
                ) : (
                    props.messages.map((m) => {
                        return (
                            <div
                                className="bg-slate-200 rounded-lg w-1/3 whitespace-normal break-normal"
                                key={generateKey(m.id)}
                            >
                                <div className="p-8">{m.message}</div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default Message;
