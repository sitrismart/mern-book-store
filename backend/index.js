import express from "express";
import { PORT, MONGODB_URL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

app.use(express.json()); 

// Route for testing the server
app.get("/", (req, res) => {
  console.log(req);
  res.status(200).send("Hello, World!");
});

app.use("/books", booksRoute);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
