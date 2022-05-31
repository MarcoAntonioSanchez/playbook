// My 1st API

// Using Express object
const express = require("express");

// Express app
const app = express();
app.use(express.json()); // Indicating we will use JSON

// Port where we are gonna get to our app: localhost:3000
const port = 3000;

// Initializing the app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Create an endpoint that returns a list of explorers
// HTTP Methods
app.get("/v1/explorers", (req, res) => {
  console.log(`APi Explorers GET ALL requests ${new Date()}`);
  const explorer1 = { id: 1, name: "Marco1" };
  const explorer2 = { id: 2, name: "Marco2" };
  const explorer3 = { id: 3, name: "Marco3" };
  const explorer4 = { id: 4, name: "Marco" };
  const explorers = [explorer1, explorer2, explorer3, explorer4];
  res.status(200).json(explorers);
});

// Create an endpoint that returns an explorer via the id
// Revisit for error
app.get("/v1/explorers/:id", (req, res) => {
  console.log(`Api Explorers GET request ${new Date()}`);
  console.log(`Getting explorer with id ${req.params.id}`);
  const explorer = { id: 1, name: "Marco" };
  res.status(200).json(explorer);
});

// Create an endpoint that creates an explorer
app.post("/v1/explorers", (req, res) => {
  console.log(`Api Explorers POST request ${new Date()}`);
  const requestBody = req.body; // Client's params
  console.log(requestBody);
  res.status(201).json({ message: "Created" });
});

app.put("/v1/explorers/:id", (req, res) => {
  console.log(`Api Explorers PUT request ${new Date()}`);
  console.log(`Update explorer with id ${req.params.id}`);
  const requestBody = req.body; // Parámetros de un cliente
  res.status(200).json({ message: "Updated!" });
});

app.delete("/v1/explorers/:id", (req, res) => {
  console.log(`APi Explorers DELETE request ${new Date()}`);
  console.log(`Delete explorer with id ${req.params.id}`);
  const requestBody = req.body; // Parámetros de un cliente
  res.status(200).json({ message: "Deleted" });
});
