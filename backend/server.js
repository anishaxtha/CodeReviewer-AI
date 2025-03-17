const express = require("express");
const cors = require("cors");
// const dotenv = require("dotenv");
const promptRouter = require("./src/routes/ai.routes");
require("dotenv").config();

const app = express();
const port = 3001;
//api routes for checking the server is running or not

//middleware
app.use(express.json());
app.use(cors());

//api end points
app.use("/api/ai", promptRouter);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

// server running
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
  console.log(`Browse on http://localhost:${port}`);
});
