const express = require("express");
const router = express.Router();
const {registerUser, currentUser , loginUser} = require("../controllers/userController");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.get("/current", currentUser);

module.exports = router;