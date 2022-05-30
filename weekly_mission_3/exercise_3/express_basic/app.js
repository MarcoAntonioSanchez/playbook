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

// Responding text
// Localhost:3000/launchx
app.get("/launchx", (req, res) => {
  res.send("Welcome to launchX");
});

// Returning an object
// Localhost:3000/explorersInNode
app.get("/explorersInNode", (req, res) => {
  const explorer = { name: "Explorer", msg: "Hello" };
  res.send(explorer);
});

// Query params: Get params from the url
// http://localhost:3000/explorers/carlo
// req.params = {"explorerName":"carlo"}
app.get("/explorers/:explorerName", (req, res) => {
  res.send(req.params);
});

// Initializing the app
app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
});
