import React, { useState } from "react";
import axios from 'axios';
function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    isNotRobot: false,
    subscribeNewsletter: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.isNotRobot) {
      alert("Please confirm that you are not a robot.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        subscribeNewsletter: formData.subscribeNewsletter,
      });
  
      alert(response.data.message);
      setFormData({
        name: "",
        email: "",
        password: "",
        isNotRobot: false,
        subscribeNewsletter: false,
      });
    } catch (error) {
      alert("Error signing up. Please try again.");
      console.error(error);
    }
  };

  const handleLoginRedirect = () => {
    alert("Redirecting to login page...");
    // Add your navigation logic here
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" ,backgroundColor:"#fff"}}>
      <h2 style={{ textAlign: "center" }}>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            name="isNotRobot"
            checked={formData.isNotRobot}
            onChange={handleChange}
            style={{ marginRight: "10px" }}
          />
          <label>I’m not a robot</label>
        </div>
        <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            name="subscribeNewsletter"
            checked={formData.subscribeNewsletter}
            onChange={handleChange}
            style={{ marginRight: "10px" }}
          />
          <label>Subscribe to Bookswagon Newsletter</label>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: formData.isNotRobot ? "#000" : "#F25822",
            color: "#fff",
            // border: "none",
            borderRadius: "5px",
            cursor: formData.isNotRobot ? "pointer" : "not-allowed",
            marginBottom: "10px",
            border:"2px solid black",
            fontWeight:"bold"
          }}
          disabled={!formData.isNotRobot}
        >
          Continue
        </button>
        <button
          type="button"
          onClick={handleLoginRedirect}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#F25822",
            color: "#fff",
            border: "2px solid black",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight:"bold",
          }}
        >
          <a href="/login">Existing User? Login</a>
        </button>
      </form>
      <p style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
        By continuing, I agree to the{" "}
        <a href="/terms-of-use" style={{ color: "#F25822", textDecoration: "none" }}>
          Terms of Use
        </a>{" "}
        &{" "}
        <a href="/privacy-policy" style={{ color: "#F25822", textDecoration: "none" }}>
          Privacy Policy
        </a>.
      </p>
    </div>
  );
}

export default SignupPage;


