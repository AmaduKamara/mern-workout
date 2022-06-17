const express = require("express");
require("dotenv").config();

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
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to Workout App" });
});

// Listen for request
app.listen(process.env.PORT, () => {
  console.log(`App running on port: ${process.env.PORT}`);
});
