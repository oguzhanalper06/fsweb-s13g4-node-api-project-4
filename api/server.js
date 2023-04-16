const express = require("express");
const server = express();
server.use(express.json());
require("dotenv").config();

const usersRouter = require("./user/user-router");

server.use("/user", usersRouter);

server.get("/", (req, res) => {
  res.status(200).json({
    message: process.env.MESSAGE || "Hey server is up and run..",
  });
});

module.exports = server;
