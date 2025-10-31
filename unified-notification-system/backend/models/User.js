import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  preferences: {
    channels: [String],
    quietHours: { start: String, end: String },
  },
});

export default mongoose.model("User", userSchema);
