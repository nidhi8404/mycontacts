const express = require("express");
const router = express.Router();

router.route("/").get((req , res) => {
    res.status(200).json({message : "Get My Contacts"});
});

module.exports = router;