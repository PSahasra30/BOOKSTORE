import React, { useState, useEffect } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpeg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.webp";
import img20 from "../assets/img20.jpg";
import "./Books.css"; // Import the CSS file

const Books = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // Mock data with images
        setBooks([
          { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", image: img1 },
          { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian", image: img2 },
          { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", image: img3 },
          { id: 4, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", image: img4 },
          { id: 5, title: "Moby Dick", author: "Herman Melville", genre: "Adventure", image: img5 },
          { id: 6, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", image: img6 },
          { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", image: img7 },
          { id: 8, title: "Brave New World", author: "Aldous Huxley", genre: "Science Fiction", image: img8 },
          { id: 9, title: "The Odyssey", author: "Homer", genre: "Epic", image: img9 },
          { id: 10, title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", genre: "Philosophy", image: img10 },
          { id: 11, title: "Crime and Punishment", author: "Fyodor Dostoevsky", genre: "Psychological", image: img11 },
          { id: 12, title: "War and Peace", author: "Leo Tolstoy", genre: "Historical", image: img12 },
          { id: 13, title: "Jane Eyre", author: "Charlotte Brontë", genre: "Romance", image: img13 },
          { id: 14, title: "Wuthering Heights", author: "Emily Brontë", genre: "Gothic", image: img14 },
          { id: 15, title: "The Alchemist", author: "Paulo Coelho", genre: "Philosophy", image: img15 },
          { id: 16, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy", image: img16 },
          { id: 17, title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", image: img17 },
          { id: 18, title: "A Tale of Two Cities", author: "Charles Dickens", genre: "Historical", image: img18 },
          { id: 19, title: "Don Quixote", author: "Miguel de Cervantes", genre: "Adventure", image: img19 },
          { id: 20, title: "The Divine Comedy", author: "Dante Alighieri", genre: "Epic Poetry", image: img20 },
        ]);
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
                  textAlign: "center",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  style={{
                    width: "100%",
                    height: "150px",
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
