import React, { useState, useEffect } from "react";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"


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
          {
            id: 1,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genre: "Fiction",
            image: img1,
          },
          {
            id: 2,
            title: "1984",
            author: "George Orwell",
            genre: "Dystopian",
            image: img2,
          },
          {
            id: 3,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            genre: "Classic",
            image: "https://via.placeholder.com/150?text=The+Great+Gatsby",
          },
          {
            id: 4,
            title: "Pride and Prejudice",
            author: "Jane Austen",
            genre: "Romance",
            image: "https://via.placeholder.com/150?text=Pride+and+Prejudice",
          },
          {
            id: 5,
            title: "Moby Dick",
            author: "Herman Melville",
            genre: "Adventure",
            image: "https://via.placeholder.com/150?text=Moby+Dick",
          },
          {
            id: 6,
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            genre: "Fiction",
            image: "https://via.placeholder.com/150?text=The+Catcher+in+the+Rye",
          },
          {
            id: 7,
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
            image: "https://via.placeholder.com/150?text=The+Hobbit",
          },
          {
            id: 8,
            title: "Brave New World",
            author: "Aldous Huxley",
            genre: "Science Fiction",
            image: "https://via.placeholder.com/150?text=Brave+New+World",
          },
          {
            id: 9,
            title: "The Odyssey",
            author: "Homer",
            genre: "Epic",
            image: "https://via.placeholder.com/150?text=The+Odyssey",
          },
          {
            id: 10,
            title: "The Brothers Karamazov",
            author: "Fyodor Dostoevsky",
            genre: "Philosophy",
            image: "https://via.placeholder.com/150?text=The+Brothers+Karamazov",
          },
          {
            id: 11,
            title: "Crime and Punishment",
            author: "Fyodor Dostoevsky",
            genre: "Psychological",
            image: "https://via.placeholder.com/150?text=Crime+and+Punishment",
          },
          {
            id: 12,
            title: "War and Peace",
            author: "Leo Tolstoy",
            genre: "Historical",
            image: "https://via.placeholder.com/150?text=War+and+Peace",
          },
          {
            id: 13,
            title: "Jane Eyre",
            author: "Charlotte Brontë",
            genre: "Romance",
            image: "https://via.placeholder.com/150?text=Jane+Eyre",
          },
          {
            id: 14,
            title: "Wuthering Heights",
            author: "Emily Brontë",
            genre: "Gothic",
            image: "https://via.placeholder.com/150?text=Wuthering+Heights",
          },
          {
            id: 15,
            title: "The Alchemist",
            author: "Paulo Coelho",
            genre: "Philosophy",
            image: "https://via.placeholder.com/150?text=The+Alchemist",
          },
          {
            id: 16,
            title: "Harry Potter and the Sorcerer's Stone",
            author: "J.K. Rowling",
            genre: "Fantasy",
            image: "https://via.placeholder.com/150?text=Harry+Potter",
          },
          {
            id: 17,
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
            image: "https://via.placeholder.com/150?text=The+Lord+of+the+Rings",
          },
          {
            id: 18,
            title: "A Tale of Two Cities",
            author: "Charles Dickens",
            genre: "Historical",
            image: "https://via.placeholder.com/150?text=A+Tale+of+Two+Cities",
          },
          {
            id: 19,
            title: "Don Quixote",
            author: "Miguel de Cervantes",
            genre: "Adventure",
            image: "https://via.placeholder.com/150?text=Don+Quixote",
          },
          {
            id: 20,
            title: "The Divine Comedy",
            author: "Dante Alighieri",
            genre: "Epic Poetry",
            image: "https://via.placeholder.com/150?text=The+Divine+Comedy",
          },
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
                style={{
                  background: genre === selectedGenre ? "#007bff" : "#f8f9fa",
                  color: genre === selectedGenre ? "#fff" : "#000",
                  border: "none",
                  padding: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "left",
                }}
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
