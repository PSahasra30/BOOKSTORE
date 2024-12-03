import React, { useState } from "react";

// import image1 from "C:\Users\Papisetty Sahasra\OneDrive\Desktop\BOOKSTORE\FRONTEND\vite-project\src\assets\image1.jpg";
import image1 from '../assets/image1.jpg'; 
import image2 from '../assets/image2.jpg'; 
import image3 from '../assets/image3.jpg'; 
import image4 from '../assets/image4.jpg'; 
import image5 from '../assets/img1.jpg'; 
import image6 from '../assets/image4.jpg'; 

const BooksPage = () => {
  const [showLoginMessage, setShowLoginMessage] = useState(false);

  const handleViewMoreClick = () => {
    setShowLoginMessage(true);
    setTimeout(() => {
      setShowLoginMessage(false);
    }, 3000); 
  };

  const books = [
    {
      id: 1,
      title: "The Mysterious Island",
      author: "Jules Verne",
      genre: "Adventure",
      image: image1, // Placeholder image
    },
    {
      id: 2,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      image: image2,
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Drama",
      image: image5,
    },
    {
      id: 4,
      title: "The Shining",
      author: "Stephen King",
      genre: "Horror",
      image: image2,
    },
    {
      id: 5,
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      genre: "Science",
      image: image3,
    },
    {
      id: 6,
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      genre: "Science Fiction",
      image:image4,
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
        width: "100%", // Ensuring full width of the page
        margin: "0 auto",
        background: "#f3f4f6",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#f25822",
          marginBottom: "20px",
        }}
      >
        Library Books
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", // Ensures the cards stretch and occupy the full width
          gap: "15px",
          width: "100%", // Full width grid
        }}
      >
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "350px", // Increased height for better fit
            }}
          >
            <img
              src={book.image}
              alt={book.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h2 style={{ color: "#f25822", fontSize: "18px" }}>{book.title}</h2>
            <p style={{ margin: "5px 0", color: "#555" }}>
              <strong>Author:</strong> {book.author}
            </p>
            <p style={{ margin: "5px 0", color: "#555" }}>
              <strong>Genre:</strong> {book.genre}
            </p>
          </div>
        ))}
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        <button
          onClick={handleViewMoreClick}
          style={{
            padding: "10px 20px",
            background: "#f25822",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#e24c1d")}
          onMouseLeave={(e) => (e.target.style.background = "#f25822")}
        >
          View More
        </button>
        {showLoginMessage && (
          <p
            style={{
              marginTop: "15px",
              color: "#f25822",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            First, you need to log in!
          </p>
        )}
      </div>
    </div>
  );
};

export default BooksPage;
