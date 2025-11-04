import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (username === "" || password === "") {
      setError("Please enter both username and password.");
    } else {
      setError("");
      console.log("Username:", username);
      console.log("Password:", password);
      alert(`Login Successful\nUsername: ${username}\nPassword: ${password}`);
    }
  };

  return (
    <div style={styles.box}>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}

      <button style={styles.button} onClick={handleSubmit}>Login</button>
    </div>
  );
}

const styles = {
  box: {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    textAlign: "center",
    background: "#fff",
  },
  input: {
    width: "90%",
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #aaa",
    borderRadius: "4px",
  },
  button: {
    padding: "8px 20px",
    width: "90%",
    border: "none",
    background: "#007bff",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
  }
};

export default LoginForm;
