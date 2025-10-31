import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  channel: String,
  status: String,
  message: String,
  correlationId: String,
  error: String,
});

export default mongoose.model("Notification", notificationSchema);
