import React from "react";
import Message from "./Message";

const UserMessage = ({ message }) => {
    return (
        <div className="mr-4 flex justify-end [&>div]:bg-zinc-800 [&>div]:text-slate-50">
            <Message text={message.text} timeStamp={message.timeStamp} />
        </div>
    );
};

export default UserMessage;
