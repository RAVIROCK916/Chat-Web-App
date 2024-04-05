import { createSlice } from "@reduxjs/toolkit";

let usersSlice = createSlice({
    name: "users",
    initialState: {
        value: [],
    },
    reducers: {
        initialize: (state, data) => {
            state.value = data.payload;
        },
        addUser: (state, user) => {
            console.log(user.payload);
            state.value.push(user.payload);
        },
        addMessage: (state, action) => {
            const { currUserId, user, text, timeStamp } = action.payload;
            const currUser = state.value.find((u) => u.id === currUserId);

            currUser.messages[user].push({ text, timeStamp });
        },
    },
});

export const getUsers = (state) => state.users.value;
export const getUser = (state, id) =>
    state.users.value.find((user) => user.id === id);

export const { initialize, addUser, addMessage } = usersSlice.actions;

export default usersSlice.reducer;
