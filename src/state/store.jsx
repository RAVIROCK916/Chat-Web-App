import { configureStore } from "@reduxjs/toolkit";
import { usersSlice, currentUserSlice } from "./users";

export default configureStore({
    reducer: {
        users: usersSlice,
        currUser: currentUserSlice,
    },
});
