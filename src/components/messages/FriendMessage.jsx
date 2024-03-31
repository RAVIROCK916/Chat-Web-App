import { Avatar, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";
import Message from "./Message";

const FriendMessage = ({ message, avatarImg }) => {
    return (
        message && (
            <div className="ml-4 flex items-center gap-3 text-slate-50 [&>div]:bg-zinc-800">
                {avatarImg ? (
                    <Avatar className="">
                        <AvatarImage src={avatarImg} className="grayscale" />
                    </Avatar>
                ) : (
                    <Skeleton className="h-10 w-10 rounded-full" />
                )}
                <Message text={message.text} timeStamp={message.timeStamp} />
            </div>
        )
    );
};

export default FriendMessage;
