import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        first: {
            type: String,
            required: true,
        },
        last: String,
    },
    picture: String,
    messages: {
        user: [String],
        friend: [String],
    },
});

export default mongoose.model("User", userSchema);
