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
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        background: "linear-gradient(145deg, #f25822, #ff6a3d)",
        borderRadius: "15px",
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
        color: "#fff",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "24px",
          marginBottom: "20px",
          color: "#fff",
        }}
      >
        Edit Book
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <label
          style={{
            fontSize: "16px",
            fontWeight: "500",
            marginBottom: "8px",
            display: "block",
            color: "#444",
          }}
        >
          Title:
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "14px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            marginBottom: "15px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        />
        <label
          style={{
            fontSize: "16px",
            fontWeight: "500",
            marginBottom: "8px",
            display: "block",
            color: "#444",
          }}
        >
          Author:
        </label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "14px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            marginBottom: "15px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        />
        <label
          style={{
            fontSize: "16px",
            fontWeight: "500",
            marginBottom: "8px",
            display: "block",
            color: "#444",
          }}
        >
          Genre:
        </label>
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "14px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            marginBottom: "20px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        />
        <button
          type="submit"
          style={{
            display: "block",
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            background: "#f25822",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            boxShadow: "0 5px 10px rgba(242, 88, 34, 0.3)",
          }}
          onMouseEnter={(e) =>
            (e.target.style.boxShadow = "0 8px 15px rgba(242, 88, 34, 0.4)")
          }
          onMouseLeave={(e) =>
            (e.target.style.boxShadow = "0 5px 10px rgba(242, 88, 34, 0.3)")
          }
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditBook;
