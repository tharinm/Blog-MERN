const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require('./routes/auth');

dotenv.config();

//to read json files
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Database connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res, next) => {
   console.log('This is main URL')
});

app.use('/api/auth',authRoute)

app.listen(8080, () => {
  console.log("Backend is running..!");
});
