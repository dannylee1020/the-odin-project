function Message(props) {
    let messages = props.getMessages();

    return (
        <div></div>
        // <div className="flex flex-col items-center">
        //     {messages.map((message) => {
        //         return (
        //             <div className="bg-slate-200 rounded-lg w-1/3 h-10">
        //                 <span>{message}</span>
        //             </div>
        //         );
        //     })}
        // </div>
    );
}

export default Message;
