const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");

router.route("/").get(authController.home);

router.route("/register").get(authController.register);

// app.get("/", (req, res) => {
//   res.status(200).send("Welcome to thapa technical Mern Series Updated");
// });
module.exports = router;
