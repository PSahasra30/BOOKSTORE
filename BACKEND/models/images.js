// const mongoose = require('mongoose');
// const express = require('express');
// const path = require('path');
// const app = express();

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Books data with image URLs
const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", image: "img1.jpg"},
          { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian", image: "img2.jpg"},
          { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", image: "img3.jpg"},
          { id: 4, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", image: "img4.jpg"},
          { id: 5, title: "Moby Dick", author: "Herman Melville", genre: "Adventure", image: "img5.jpg"},
          { id: 6, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", image: "img6.jpg"},
          { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", image: "img7.jpg"},
          { id: 8, title: "Brave New World", author: "Aldous Huxley", genre: "Science Fiction", image: "img8.jpeg"},
          { id: 9, title: "The Odyssey", author: "Homer", genre: "Epic", image: "img9.jpg"},
          { id: 10, title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", genre: "Philosophy", image: "img10.jpg"},
          { id: 11, title: "Crime and Punishment", author: "Fyodor Dostoevsky", genre: "Psychological", image: "img11.jpg"},
          { id: 12, title: "War and Peace", author: "Leo Tolstoy", genre: "Historical", image: "img12.jpg"},
          { id: 13, title: "Jane Eyre", author: "Charlotte Brontë", genre: "Romance", image: "img13.jpg"},
          { id: 14, title: "Wuthering Heights", author: "Emily Brontë", genre: "Gothic", image: "img14.jpg"},
          { id: 15, title: "The Alchemist", author: "Paulo Coelho", genre: "Philosophy", image: "img15.jpg"},
          { id: 16, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy", image:" img16.jpeg"},
          { id: 17, title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", image: "img17.jpg"},
          { id: 18, title: "A Tale of Two Cities", author: "Charles Dickens", genre: "Historical", image:" img18.jpg"},
          { id: 19, title: "Don Quixote", author: "Miguel de Cervantes", genre: "Adventure", image: "img19.webp"},
          { id: 20, title: "The Divine Comedy", author: "Dante Alighieri", genre: "Epic Poetry", image: "img20.jpg"},
];

// Mongoose schema for book metadata
// const bookSchema = new mongoose.Schema({
//   title: { type: String, required: true.jpg},
//   author: { type: String, required: true.jpg},
//   genre: { type: String, required: true.jpg},
//   image: { type: String, required: true.jpg}, // image URL
// });

// const Book = mongoose.model('Book', bookSchema);

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/bookstore', { useNewUrlParser: true, useUnifiedTopology: true.jpg})
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Save books to the database
// books.forEach(book => {
//   const newBook = new Book({
//     title: book.title,
//     author: book.author,
//     genre: book.genre,
//     image: book.image
//  });

//   newBook.save()
//     .then(result => {
//       console.log('Book saved:', result.title);
//    })
//     .catch(err => {
//       console.error('Error saving book:', err);
//    });
// });
module.exports = books