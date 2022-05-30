// Using express object
const express = require("express");

// Express app
const app = express();

// Port where we are gonna get to our app: Localhost:3000
const port = 3000;

// Initial path, will response to url: Localhost:3000
app.get("/", (req, res) => {
  res.send("Hello friend");
});

app.get("/launchx", (req, res) => {
  res.send("Welcome to launchX");
});

// Initializing the app
app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
});
