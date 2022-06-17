const express = require("express");

// Express app
const app = express();

// Listen for request
app.listen(4000, () => {
  console.log("App running on port: 4000");
});
