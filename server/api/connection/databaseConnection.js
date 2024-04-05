import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "../../../client/.env" });

// connect to MongoDB

const connectDB = async () => {
	try {
		await mongoose.connect("mongodb://localhost:27017/chat");
	} catch (err) {
		console.error(err);
		// exit process or other error handling
	}
};

export default connectDB;
