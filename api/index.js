const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/categories");

dotenv.config();

//to read json files
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then()
  .catch((err) => console.log(err));

app.get("/", (req, res, next) => {
  console.log("This is main URL");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/catergories", categoryRoute);

app.listen(8080, () => {
  console.log("Backend is running..!");
});
