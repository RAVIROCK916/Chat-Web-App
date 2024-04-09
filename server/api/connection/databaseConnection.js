import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "../../../client/.env" });

// connect to MongoDB

const connectDB = async () => {
	try {
		const conn = await mongoose.connect("mongodb://localhost:27017/chat");
		console.log(`Connected to MongoDB: ${conn.connection.db.databaseName}`);
	} catch (err) {
		console.error(err);
		// exit process or other error handling
	}
};

export default connectDB;
