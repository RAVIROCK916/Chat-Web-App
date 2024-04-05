import React, { useState } from "react";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { getCurrUser } from "@/state/users/currentUserSlice";
import { addMessage } from "@/state/users/usersSlice";
import { getReplyMessage } from "@/utils/getReplyMessage";

const InputBox = () => {
    const dispatch = useDispatch();
    let currUserId = useSelector(getCurrUser);

    const [userInput, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    const sendMessage = async (e) => {
        if (
            (e.type === "keypress" && e.key === "Enter") ||
            e.type === "click"
        ) {
            let timeStamp = new Date().toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
            });

            let replyMessage = getReplyMessage(userInput);
            dispatch(
                addMessage({
                    currUserId,
                    user: "user",
                    text: userInput,
                    timeStamp,
                }),
            );
            setTimeout(() => {
                dispatch(
                    addMessage({
                        currUserId,
                        user: "friend",
                        text: replyMessage,
                        timeStamp,
                    }),
                );
            }, 1000);
            setInput("");
        }
    };

    return (
        <div className="relative">
            <Input
                className="absolute bottom-0 h-12 w-full rounded-none border-t-2 bg-neutral-200 px-8 text-lg"
                value={userInput}
                onChange={handleInputChange}
                onKeyPress={sendMessage}
                placeholder="Type a message"
            />
            <PaperAirplaneIcon
                className="absolute bottom-[50%] right-4 mr-2 h-5 w-5 translate-y-[-50%] cursor-pointer"
                onClick={sendMessage}
            />
        </div>
    );
};

export default InputBox;
