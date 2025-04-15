import express from "express";
import conn from "./db/conn.js";
import cors from "cors";

// models
import { User } from "./models/User.js";
import { Post } from "./models/Post.js";
import { Comment } from "./models/Comment.js";
import { Course } from "./models/Course.js";
import { Module } from "./models/Module.js";
import { Lesson } from "./models/Lesson.js";

const app = express();
// Config JSON response
app.use(express.json());
// Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

try {
  await conn.authenticate();
  await conn.sync({ force: false });
  console.log("Database connected");
} catch (error) {
  console.log(error);
}

// Public folder for images
app.use(express.static("public"));

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
