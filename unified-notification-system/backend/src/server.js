import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import testRoute from "./routes/testRoute.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/test", testRoute);

// Default Route
app.get("/", (req, res) => {
  res.send("✅ Notification system backend running!");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
