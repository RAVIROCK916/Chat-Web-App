import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name: "user",
    initialState: {
        value: null,
    },
    reducers: {
        setUser: (state, user) => {
            state.value = user.payload.id;
        },
    },
});

export const getCurrUser = (state) => state.currUser.value;

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
