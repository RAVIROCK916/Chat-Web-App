import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import connectDB from "./api/connection/databaseConnection.js";

import Users from "./api/schema/userSchema.js";

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
	res.send("Welcome to the chat app API!");
});

app.get("/users", async (req, res) => {
	const users = await Users.find();

	res.json(users);
});

app.post("/users/add", async (req, res) => {
	const { name } = req.body;
	if (name.first || name.last) {
		await Users.create(req.body);
		res.status(201).send("User Added");
	} else {
		res.status(400).send("Name is required");
	}
});

app.listen(3000, () => {
	console.log("Chat app listening on port 3000!");
});
