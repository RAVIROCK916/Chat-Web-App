import { useDispatch, useSelector } from "react-redux";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getCurrUser, setUser } from "@/state/users/currentUserSlice";
import { Separator } from "../ui/separator";

const User = ({ userD }) => {
    let { name, picture } = userD;
    const currUserId = useSelector(getCurrUser);
    const dispatch = useDispatch();
    return (
        <div
            className="cursor-pointer"
            onClick={() => {
                dispatch(setUser(userD));
            }}
        >
            <Card
                className="flex items-center rounded-none border-none px-6 py-2 transition-colors duration-100 hover:bg-slate-50"
                style={
                    currUserId === userD.id
                        ? {
                              borderLeft: "5px solid #111",
                              backgroundColor: "#f9f9f9",
                          }
                        : {}
                }
            >
                <Avatar className="">
                    <AvatarImage
                        src={picture.thumbnail}
                        className="grayscale"
                    />
                </Avatar>
                <CardHeader className="ml-4 overflow-hidden px-0 py-2">
                    <CardTitle className="text-xl">{`${name.first} ${name.last}`}</CardTitle>
                    <CardDescription className="truncate text-xs text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </CardDescription>
                </CardHeader>
            </Card>
            <Separator />
        </div>
    );
};

export default User;
