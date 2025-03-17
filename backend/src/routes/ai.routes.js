const express = require("express");
const { promptController } = require("../controller/ai.controller");

const promptRouter = express.Router();

promptRouter.post("/get-response", promptController);

module.exports = promptRouter;
