import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const sendNotification = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/notify/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "123",
          template: "test_template",
          data: { name: "Student" }
        })
      });

      const result = await res.json();
      setMessage("✅ Notification Triggered Successfully! ID: " + result.correlationId);
    } catch (error) {
      setMessage("❌ Error sending notification");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Unified Notification System Admin</h1>

      <button 
        onClick={sendNotification}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          background: "black",
          color: "white",
          borderRadius: "5px"
        }}
      >
        Send Test Notification
      </button>

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        {message}
      </p>

      <hr />

      <h2>User Preferences</h2>
      <h2>Template Manager</h2>
      <h2>Status Dashboard</h2>
    </div>
  );
}

export default App;
