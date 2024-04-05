import React from "react";

const Message = ({ text, timeStamp }) => {
    return (
        <div className="my-2 w-fit max-w-2xl rounded-sm px-5 py-2 shadow-lg">
            {text}
            <span className="ml-6 text-[11px] text-zinc-400">{timeStamp}</span>
        </div>
    );
};

export default Message;
