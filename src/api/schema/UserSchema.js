import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    picture: String,
    messages: {
        user: [String],
        friend: [String]
    }
});