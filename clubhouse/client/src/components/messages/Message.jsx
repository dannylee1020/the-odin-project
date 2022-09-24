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
                                <div className="p-5">
                                    <div className="mb-5 text-sm italic">
                                        author_name
                                    </div>
                                    <span>{m.message}</span>
                                    <div className="mt-5 text-right text-sm italic">
                                        date
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default Message;
