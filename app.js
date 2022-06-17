const express = require("express");
require("dotenv").config();

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

// Listen for request
app.listen(process.env.PORT, () => {
  console.log(`App running on port: ${process.env.PORT}`);
});
