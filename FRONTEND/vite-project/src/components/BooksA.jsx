import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Books.css";

const Just = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/books"); // Replace with your API
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const uniqueGenres = ["All", ...new Set(books.map((book) => book.genre))];
    setGenres(uniqueGenres);
    setFilteredBooks(books);
  }, [books]);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    if (genre === "All") {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(books.filter((book) => book.genre === genre));
    }
  };

  
  const handleDelete = async (id) => {
    try {
      // Optimistically update state to remove the deleted book from the UI
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
      setFilteredBooks((prevFilteredBooks) =>
        prevFilteredBooks.filter((book) => book.id !== id)
      );

      // Send DELETE request to the backend
      const response = await fetch(`http://localhost:5000/api/books/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Book deleted successfully");

        // After deleting, refetch the books to get the updated list
        const updatedBooksResponse = await fetch("http://localhost:5000/api/books");
        const updatedBooks = await updatedBooksResponse.json();
        setBooks(updatedBooks);  // Update the books state with the new list
      } else {
        console.error("Failed to delete the book.");
        // Rollback changes if delete failed
        setBooks((prevBooks) => [...prevBooks]);
        setFilteredBooks((prevFilteredBooks) => [...prevFilteredBooks]);
      }
    } catch (error) {
      console.error("Error deleting the book:", error);
      // Rollback changes in case of an error
      setBooks((prevBooks) => [...prevBooks]);
      setFilteredBooks((prevFilteredBooks) => [...prevFilteredBooks]);
    }
  };
  

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      {/* Sidebar */}
      <div style={{ width: "20%", paddingRight: "20px" }}>
        <h3>Genres</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {genres.map((genre) => (
            <li key={genre} style={{ marginBottom: "10px" }}>
              <button
                onClick={() => handleGenreChange(genre)}
                className={`genre-button ${
                  genre === selectedGenre ? "selected" : ""
                }`}
              >
                {genre}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Book Grid */}
      <div style={{ width: "80%" }}>
        <h1>Library Books</h1>
        {filteredBooks.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            {filteredBooks.map((book) => (
              <div
                key={book._id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "350px",
                  textAlign: "center",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div>
                  <img
                    src={`http://localhost:5000/uploads/${book.image}`}
                    alt={book.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                  />
                  <h3>{book.title}</h3>
                  <p>
                    <strong>Author:</strong> {book.author}
                  </p>
                  <p>
                    <strong>Genre:</strong> {book.genre}
                  </p>
                  <div style={{ marginTop: "auto" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "10px",
                      }}
                    >
                      <button
                        style={{
                          padding: "8px 12px",
                          backgroundColor: "#FFC107",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(book._id)}
                        style={{
                          padding: "8px 12px",
                          backgroundColor: "#F44336",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                      <button
                        style={{
                          padding: "8px 12px",
                          backgroundColor: "#4CAF50",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        Available
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No books available for the selected genre.</p>
        )}
      </div>
    </div>
  );
};

export default Just;
