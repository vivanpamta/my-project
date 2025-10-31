import webpush from "web-push";

webpush.setVapidDetails(
  "mailto:test@example.com",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

export const sendPush = async (subscription, payload) => {
  await webpush.sendNotification(subscription, JSON.stringify(payload));
  console.log("🔔 Push notification sent");
};
