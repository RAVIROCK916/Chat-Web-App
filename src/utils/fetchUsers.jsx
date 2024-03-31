export const fetchUsers = async (url) => {
    try {
        let res = await fetch(url);
        let data = await res.json();
        const userList = data.results.map((user) => {
            return {
                id: crypto.randomUUID(),
                name: {
                    first: user.name.first,
                    last: user.name.last,
                },
                picture: {
                    thumbnail: user.picture.thumbnail,
                },
                messages: {
                    user: [],
                    friend: [],
                },
            };
        });
        return userList;
    } catch (err) {
        console.log("error", err);
    }
};
