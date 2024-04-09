import React, { useState } from "react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useDispatch } from "react-redux";
import { DialogClose } from "@radix-ui/react-dialog";
import { addUser } from "@/state/users/usersSlice";

const NewUser = ({ scrollRef }) => {
    const [name, setName] = useState({
        first: "",
        last: "",
    });

    const dispatch = useDispatch();

    const handleAddUser = async () => {
        const id = crypto.randomUUID();
        const user = { id, name };
        console.log(user);
        dispatch(addUser(user));
        await fetch("http://localhost:3000/users/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        scrollRef.current.scroll({
            top: scrollRef.current.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <div className="mb-2 h-10 w-full text-center">
            <Dialog>
                <DialogTrigger className="m-auto" asChild>
                    <Button
                        variant="outline"
                        className="h-10 w-full bg-zinc-950 text-center text-lg text-slate-200 shadow-lg hover:bg-zinc-900 hover:text-slate-200"
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
                        <DialogClose asChild>
                            <Button type="submit" onClick={handleAddUser}>
                                Done
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default NewUser;
