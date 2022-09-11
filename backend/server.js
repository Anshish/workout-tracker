require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

// express app
const app = express();

// middleware

app.use(express.json());

const mongo_uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.2gzry.mongodb.net/node?retryWrites=true&w=majority`;

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);


let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}

// connect to db
mongoose
  .connect(mongo_uri)
  .then(() => {
    // listen for requests
    app.listen(port, () => {
      console.log("connected to db & listening on port", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
