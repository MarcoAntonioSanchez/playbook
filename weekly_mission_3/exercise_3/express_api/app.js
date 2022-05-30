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
