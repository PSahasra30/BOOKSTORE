import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    // Simulate an API call to send reset link
    setTimeout(() => {
      setMessage(
        "If this email is registered, a password reset link has been sent to your inbox."
      );
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <h2>Forgot Your Password?</h2>
      <p>Enter your email address to reset your password.</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Continue
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
      <p style={styles.disclaimer}>
        By continuing, I agree to the{" "}
        <span style={styles.link}>Terms of Use</span> &{" "}
        <span style={styles.link}>Privacy Policy</span>.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  form: {
    marginTop: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#F25822", // Button color
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  message: {
    marginTop: "20px",
    color: "#007BFF",
  },
  disclaimer: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#555", // Default color for text
  },
  link: {
    color: "#F25822", // Highlighted link color
    fontWeight: "normal", // Set to normal
    cursor: "pointer",
  },
};

export default ForgotPassword;
