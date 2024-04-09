import React, { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";
import { fetchUsers } from "@/utils/fetchUsers";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { getUsers, initialize } from "@/state/users/usersSlice";
import UserSkeleton from "./UserSkeleton";
import NewUser from "./NewUser";

const UsersBar = () => {
    let noOfUsers = 15;
    const url = `https://randomuser.me/api/?results=${noOfUsers}&seed=001&inc=name,picture`;

    const dispatch = useDispatch();
    const users = useSelector(getUsers);

    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(users);
    const scrollRef = useRef(null);

    const initUsers = async () => {
        const userList = await fetchUsers(url);
        setFilteredUsers(userList);
        dispatch(initialize(userList));
    };

    // initialize users on load
    useEffect(() => {
        initUsers();
    }, []);

    useEffect(() => {
        // if (search.trim() !== "") {
        const newfilteredUsers = users.filter((user) => {
            const name = user.name.first + " " + user.name.last;
            return name.toLowerCase().includes(search.toLowerCase());
        });
        setFilteredUsers(newfilteredUsers);
        // }
    }, [search, users]);

    return (
        <div className="relative flex h-screen flex-col border">
            <div className="relative bg-[#efefef] py-4">
                <MagnifyingGlassIcon className="absolute left-10 top-[50%] h-6 w-6 translate-y-[-50%] cursor-pointer text-gray-500" />
                <Input
                    className="m-auto h-10 w-[88%] rounded-[40px] px-4 pl-12"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="overflow-auto" ref={scrollRef}>
                {users.length > 0 ? (
                    filteredUsers.map((user) => (
                        <User user={user} key={user.id} />
                    ))
                ) : (
                    <UserSkeleton />
                )}
            </div>
            <NewUser scrollRef={scrollRef} />
        </div>
    );
};

export default UsersBar;
