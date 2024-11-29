import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditBook = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const book = location.state?.book;

  const [formData, setFormData] = useState({
    title: book.title,
    author: book.author,
    genre: book.genre,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/books/${book._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Book details updated successfully!");
        navigate("/"); // Redirect to the main page or any other page
      } else {
        alert("Failed to update book details.");
      }
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{ marginBottom: "10px", display: "block", width: "100%" }}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            style={{ marginBottom: "10px", display: "block", width: "100%" }}
          />
        </label>
        <label>
          Genre:
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            style={{ marginBottom: "10px", display: "block", width: "100%" }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditBook;
