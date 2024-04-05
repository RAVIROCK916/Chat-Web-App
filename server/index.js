import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import connectDB from "./api/connection/databaseConnection.js";

import userSchema from "./api/schema/userSchema.js";

connectDB();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
	cors({
		origin: "*",
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		credentials: true,
	})
);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post("/addUser", async (req, res) => {
	console.log(req.body, "request");
	await userSchema.create(req.body);
	console.log(await userSchema.find());
	res.send("User Added");
});

// app.use(cors());

app.listen(3000, () => {
	console.log("Example app listening on port 3000!");
});
