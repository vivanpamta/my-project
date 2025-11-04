const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    channel: { type: String, enum: ["email", "sms", "push"], required: true },
    templateId: { type: String, required: true },
    payload: { type: Object },
    status: {
      type: String,
      enum: ["pending", "sent", "failed"],
      default: "pending",
    },
    errorMessage: { type: String },
    correlationId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", NotificationSchema);
