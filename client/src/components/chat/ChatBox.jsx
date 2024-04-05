import React from "react";
import { Input } from "../ui/input";
import { useSelector } from "react-redux";
import MessageArea from "./MessageArea";
import { getCurrUser } from "@/state/users/currentUserSlice";

const ChatBox = () => {
    let user = useSelector(getCurrUser);

    return (
        <div className="h-screen">
            {user ? (
                <MessageArea />
            ) : (
                <div className="flex h-full flex-col items-center justify-center bg-neutral-50">
                    <h2 className="mb-4 text-6xl font-bold">Talkative</h2>
                    <p className="text-xl font-bold">
                        “Always ask yourself: What will happen if I say
                        nothing?” ― Kamand Kojouri
                    </p>
                </div>
            )}
        </div>
    );
};

export default ChatBox;
