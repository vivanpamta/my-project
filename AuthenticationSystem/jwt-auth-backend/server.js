const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const SECRET_KEY = "mysecretkey123"; // JWT Secret

// Login Route → Generates JWT token
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "testuser" && password === "password123") {
    const token = jwt.sign({ id: 1, username: "testuser" }, SECRET_KEY, { expiresIn: "1h" });

    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

// Middleware
const authMiddleware = require("./middleware/authMiddleware");

// Protected Route
app.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "You have accessed a protected route!",
    user: req.user
  });
});

// Server
app.listen(3000, () => console.log("✅ Server running on http://localhost:3000"));

