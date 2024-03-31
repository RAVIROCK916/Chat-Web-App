import React, { useState } from "react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useSelector } from "react-redux";
import { getUsers } from "@/state/users/usersSlice";

const NewUser = () => {
    const [name, setName] = useState({
        first: "",
        last: "",
    });
    const users = useSelector(getUsers);
    const handleAddUser = (e) => {
        users.push();
    };

    return (
        <div className="mb-3 h-10 w-full text-center">
            <Dialog>
                <DialogTrigger className="m-auto" asChild>
                    <Button
                        variant="outline"
                        className="h-10 w-[88%] bg-zinc-950 text-center text-lg text-slate-200 shadow-lg hover:bg-zinc-900 hover:text-slate-200"
                    >
                        Create User
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create User</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                First Name
                            </Label>
                            <Input
                                id="name"
                                value={name.first}
                                onChange={(e) =>
                                    setName((s) => {
                                        return { ...s, first: e.target.value };
                                    })
                                }
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Last Name
                            </Label>
                            <Input
                                id="username"
                                value={name.last}
                                onChange={(e) =>
                                    setName((s) => {
                                        return { ...s, last: e.target.value };
                                    })
                                }
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={handleAddUser}>
                            Done
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default NewUser;
