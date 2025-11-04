const express = require("express");
const { verifyToken, roleCheck } = require("../middleware/auth");
const router = express.Router();

router.get("/", verifyToken, roleCheck("Moderator"), (req, res) => {
  res.json({
    message: "Welcome to the Moderator panel.",
    user: req.user
  });
});

module.exports = router;

