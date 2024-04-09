import React, { useEffect, useRef } from "react";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";
import { fetchUsers } from "@/utils/fetchUsers";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { addUser, getUsers, initialize } from "@/state/users/usersSlice";
import UserSkeleton from "./UserSkeleton";
import NewUser from "./NewUser";

const UsersBar = () => {
    let noOfUsers = 15;
    const url = `https://randomuser.me/api/?results=${noOfUsers}&seed=001&inc=name,picture`;
    const dispatch = useDispatch();
    const users = useSelector(getUsers);
    let usersDatabase;

    const scrollRef = useRef(null);

    const initUsers = async () => {
        const userList = await fetchUsers(url);
        // console.log(Users.find());
        dispatch(initialize(userList));
    };

    // initialize users on load
    useEffect(() => {
        initUsers();
    }, []);

    // useEffect(() => {
    //     getUsersData();
    // }, [usersDatabase]);

    const getUsersData = async () => {
        const response = await fetch("http://localhost:3000/users");
        usersDatabase = await response.json();
        console.log(usersDatabase);
        // dispatch(addUser(usersDatabase));
    };

    return (
        <div className="relative flex h-screen flex-col border">
            <div className="relative bg-[#efefef] py-4">
                <MagnifyingGlassIcon className="absolute left-10 top-[50%] h-6 w-6 translate-y-[-50%] cursor-pointer text-gray-500" />
                <Input
                    className="m-auto h-10 w-[88%] rounded-[40px] px-4 pl-12"
                    placeholder="Search..."
                />
            </div>
            <div className="overflow-auto" ref={scrollRef}>
                {users.length > 0 ? (
                    users.map((userD) => <User userD={userD} key={userD.id} />)
                ) : (
                    <UserSkeleton />
                )}
            </div>
            <NewUser scrollRef={scrollRef} />
        </div>
    );
};

export default UsersBar;
