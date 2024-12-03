import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role is student
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    navigate("/booksu")
    // Basic validation
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
        role, // Include role in the login payload
      });

      if (response.data.success) {
        alert(`Login successful as ${role}!`);
        // You can redirect or perform further actions here
      } else {
        setError(response.data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      setError("Error logging in. Please try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h2 style={{ color: "#030303", textAlign: "center" }}>Login</h2>
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
        <div style={styles.field}>
          <label>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={styles.select}
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div style={styles.linkContainer}>
          <button type="button" style={styles.linkButton}>
            <a href="/fup">Forgot your password?</a>
          </button>
        </div>
        <button type="button" onClick={handleLogin} style={styles.button}>
          Login
        </button>
        <div style={styles.signupContainer}>
          <p>New to this site?</p>
          <a href="/signup">Sign Up</a>
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
    color: "#030303",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginTop: "5px",
  },
  select: {
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
    color: "#F25822",
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
