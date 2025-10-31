import Notification from "../models/Notification.js";
import User from "../models/User.js";
import { sendEmail } from "../adapters/emailAdapter.js";
import { sendSMS } from "../adapters/smsAdapter.js";
import { v4 as uuidv4 } from "uuid";

export const sendNotification = async (req, res) => {
  try {
    const { userId, message, channelHint } = req.body;
    const user = await User.findById(userId);

    const correlationId = uuidv4();
    const chosenChannel = channelHint || user.preferences.channels[0];

    if (chosenChannel === "email") await sendEmail(user.email, "Notification", message);
    if (chosenChannel === "sms") await sendSMS(user.phone, message);

    const notification = new Notification({
      userId,
      channel: chosenChannel,
      status: "SENT",
      message,
      correlationId,
    });

    await notification.save();
    res.status(200).json({ correlationId, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
