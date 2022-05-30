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
