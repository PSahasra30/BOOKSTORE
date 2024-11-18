import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    // Mock login logic
    console.log("Logging in with:", { email, password });
    setError(""); // Clear any errors
    alert("Login successful!");
  };

  const handleForgotPassword = () => {
    alert("Redirecting to password recovery page!");
    // Replace this with navigation logic if needed
  };

  const handleSignUp = () => {
    alert("Redirecting to sign-up page!");
    // Replace this with navigation logic if needed
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={{color:"#030303",textAlign:"center"}}>Login</h2>
        {error && <p style={styles.error}>{error}</p>}
        <div style={styles.field}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.field}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.linkContainer}>
          <button
            type="button"
            onClick={handleForgotPassword}
            style={styles.linkButton}
          >
            Forgot your password?
          </button>
        </div>
        <button type="submit" style={styles.button}>
          Login
        </button>
        <div style={styles.signupContainer}>
          <p>New to this site?</p>
          <button
            type="button"
            onClick={handleSignUp}
            style={styles.signupButton}
          >
            Sign Up
          </button>
        </div>
        <div style={styles.terms}>
          <p>
            By continuing, I agree to the{" "}
            <a href="#" style={styles.link}>
              Terms of Use
            </a>{" "}
            &{" "}
            <a href="#" style={styles.link}>
              Privacy Policy
            </a>.
          </p>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f9",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "300px",
  },
  field: {
    marginBottom: "15px",
    color: "#030303"
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginTop: "5px",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    backgroundColor: "#F25822",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
  },
  linkContainer: {
    marginBottom: "15px",
    textAlign: "right",
  },
  linkButton: {
    background: "none",
    border: "none",
    color: "#F25822",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "14px",
  },
  signupContainer: {
    marginTop: "20px",
    textAlign: "center",
    color: "#F25822"
  },
  signupButton: {
    background: "none",
    border: "none",
    color: "#F25822",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "14px",
  },
  terms: {
    marginTop: "20px",
    fontSize: "12px",
    textAlign: "center",
    color: "#555",
  },
  link: {
    color: "#F25822",
    textDecoration: "none",
  },
};

export default LoginPage;

