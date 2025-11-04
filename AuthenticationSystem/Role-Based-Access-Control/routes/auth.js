const express = require("express");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../middleware/auth");
const router = express.Router();

const users = [
  { id: 1, username: "adminuser", password: "admin123", role: "Admin" },
  { id: 2, username: "moderatoruser", password: "mod123", role: "Moderator" },
  { id: 3, username: "normaluser", password: "user123", role: "User" }
];

router.post("/", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

module.exports = router;
