// books.jsx

import React from "react";

// Sample data for books
const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    available: true,
    image: "https://example.com/to-kill-a-mockingbird.jpg", // Replace with a valid URL or local image path
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    available: false,
    image: "https://example.com/1984.jpg", // Replace with a valid URL or local image path
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    available: true,
    image: "https://example.com/the-great-gatsby.jpg", // Replace with a valid URL or local image path
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    available: false,
    image: "https://example.com/the-catcher-in-the-rye.jpg", // Replace with a valid URL or local image path
  },
  {
    id: 5,
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure",
    available: true,
    image: "https://example.com/moby-dick.jpg", // Replace with a valid URL or local image path
  },
];

// Component to display book details
const Books = () => {
  return (
    <div>
      <h1>Library Books</h1>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>
                <img
                  src={book.image}
                  alt={`${book.title} cover`}
                  style={{ width: "50px", height: "75px" }}
                />
              </td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.available ? "Available" : "Not Available"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
