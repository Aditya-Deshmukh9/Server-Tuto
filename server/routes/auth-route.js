const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).send("Welcome to thapa technical Mern Series Updated");
});

router.route("/register").get((req, res) => {
  res.status(200).json({ msg: "registration successful from router" });
});

// app.get("/", (req, res) => {
//   res.status(200).send("Welcome to thapa technical Mern Series Updated");
// });
module.exports = route;
