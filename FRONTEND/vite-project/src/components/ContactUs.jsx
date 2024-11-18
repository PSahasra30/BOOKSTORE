import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setResponseMessage("Please fill out all fields.");
      return;
    }

    // Simulate an API call
    setTimeout(() => {
      setResponseMessage("Thank you for contacting us! We’ll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <p style={styles.subheading}>We'd love to hear from you! Fill out the form below to get in touch.</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
          required
        ></textarea>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
      {responseMessage && <p style={styles.response}>{responseMessage}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },
  subheading: {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#666",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    height: "100px",
    resize: "none",
  },
  button: {
    padding: "10px",
    backgroundColor: "#F25822",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  response: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#28a745",
  },
};

export default ContactUs;
