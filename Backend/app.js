import express, { urlencoded } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { connectToSocket } from "./src/controller/socketManager.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

const start = async () => {
  const connectionDB = await mongoose.connect(
    "mongodb+srv://mayurthakre878_db_user:cpufYMwai49anKcX@cluster0.xwf5lyd.mongodb.net/",
  );

  console.log("DB Connected");

  server.listen(app.get("port"), () => {
    console.log("Server is running on port 8000");
  });
};

start();
