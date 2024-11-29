import React, { useState, useEffect } from "react";
import "./Books.css"; // Import the CSS file

const Books = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // Fetch book data from the backend (example API call)
        console.log("hi");
        
        const response = await fetch("http://localhost:5000/api/books"); // Adjust URL to your API
        const data = await response.json();
        console.log(data);
        
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
                className={`genre-button ${genre === selectedGenre ? "selected" : ""}`}
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
                key={book.id}
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
                  {/* Display image from the backend */}
                  <img
                    src={`http://localhost:5000/uploads/${book.image}`} // Update this to your backend's URL structure
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
                </div>
                <div style={{ marginTop: "auto" }}>
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
                    Status: Available
                  </button>
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

export default Books;
