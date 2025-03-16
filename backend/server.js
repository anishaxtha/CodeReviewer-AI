const express = require("express");

const app = express();
const port = 3001;
//api routes for checking the server is running or not
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// server running
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
  console.log(`Browse on http://localhost:${port}`);
});
