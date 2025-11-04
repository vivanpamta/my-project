const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const moderatorRoutes = require("./routes/moderator");
const userRoutes = require("./routes/user");

const app = express();
app.use(express.json());

app.use("/login", authRoutes);
app.use("/admin-dashboard", adminRoutes);
app.use("/moderator-panel", moderatorRoutes);
app.use("/user-profile", userRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

