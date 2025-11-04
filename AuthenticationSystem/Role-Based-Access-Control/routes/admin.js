const express = require("express");
const { verifyToken, roleCheck } = require("../middleware/auth");
const router = express.Router();

router.get("/", verifyToken, roleCheck("Admin"), (req, res) => {
  res.json({
    message: "Welcome to the Admin dashboard.",
    user: req.user
  });
});

module.exports = router;
