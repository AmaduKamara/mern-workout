const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workouts");

// Express app
const app = express();

// Middlewares
// Passing req body
app.use(express.json());

// Logging req url and method
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

// Routes
app.use("/api/workouts", workoutRoutes);

// Init mongoose connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for request - Only listen for request once we connect to the database
    app.listen(process.env.PORT, () => {
      console.log(`Conncted to DB and app running on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error));
