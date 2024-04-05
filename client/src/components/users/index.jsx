import React from "react";
import UsersBar from "./UsersBar";
import ChatBox from "../chat/ChatBox";

const Users = () => {
    return (
        <>
            <div className="col-span-3">
                <UsersBar />
            </div>
            <div className="col-span-8">
                <ChatBox />
            </div>
        </>
    );
};

export default Users;
