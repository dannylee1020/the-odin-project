function Message(props) {
    function generateKey(pre) {
        return `${pre}_${new Date().getTime()}`;
    }

    return (
        <div>
            <div className="flex flex-col items-center gap-5 mt-10">
                {props.messages === undefined ? (
                    <div>Loading...</div>
                ) : (
                    props.messages.map((m) => {
                        return (
                            <div
                                className="bg-slate-200 rounded-lg w-1/3 h-10"
                                key={generateKey(m.id)}
                            >
                                <span>{m.message}</span>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default Message;
