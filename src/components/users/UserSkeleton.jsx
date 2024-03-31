import { Skeleton } from "../ui/skeleton";

const UserSkeleton = () => {
    return (
        <div className="space-y-6 py-3">
            {[...Array(15)].map((_, i) => (
                <div
                    className="flex w-full items-center rounded-none px-6 py-2"
                    key={i}
                >
                    <Skeleton className="h-10 w-10 rounded-full"></Skeleton>
                    <div className="ml-4 space-y-2">
                        <Skeleton className="h-6 w-[150px] rounded-sm"></Skeleton>
                        <Skeleton className="h-3 w-[250px] rounded-sm"></Skeleton>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserSkeleton;
