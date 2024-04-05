import React, { Fragment } from "react";
import { UserMessage, FriendMessage } from "../messages";
import InputBox from "./InputBox";
import { useDispatch, useSelector } from "react-redux";
import { getCurrUser } from "@/state/users/currentUserSlice";
import { getUser } from "@/state/users/usersSlice";

const MessageArea = () => {
    const userId = useSelector(getCurrUser);
    const user = useSelector((state) => getUser(state, userId));

    const messages = user.messages;
    return (
        <div className="flex h-full flex-col justify-between bg-zinc-50">
            <div className="mb-10 h-full overflow-auto py-4">
                {messages.user.length > 0 ? (
                    messages.user.map((msg, i) => (
                        <Fragment key={crypto.randomUUID()}>
                            <UserMessage message={msg} />
                            <FriendMessage
                                message={messages.friend[i]}
                                avatarImg={user.picture.thumbnail}
                            />
                        </Fragment>
                    ))
                ) : (
                    <div className="flex h-full flex-col items-center justify-center bg-neutral-50">
                        <h2 className="text-4xl font-bold">Chat</h2>
                        <p className="text-lg">Start a Convo</p>
                    </div>
                )}
            </div>
            <InputBox />
        </div>
    );
};

export default MessageArea;
