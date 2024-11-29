const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const books = require("./models/images")
const app = express();
const path=require('path')
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/bookstore", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for user data
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  subscribeNewsletter: Boolean,
});
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
  price: Number,
  publishedDate: Date,
  coverImageUrl: String, // Link to an image or a local file path
});

const Book = mongoose.model("Book", bookSchema);

app.get("/api/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

const User = mongoose.model("User", userSchema);

// Signup endpoint
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password, subscribeNewsletter } = req.body;

    // Create a new user
    const newUser = new User({
      name,
      email,
      password,
      subscribeNewsletter,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
});
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Log the incoming login attempt
    console.log("Login attempt:", { email, password });

    // Validate inputs
    if (!email || !password) {
      console.log("Validation failed: missing fields");
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Log user search
    const user = await User.findOne({ email });
    console.log("User found in database:", user);

    if (!user) {
      console.log("User not found:", email);
      return res.status(404).json({ error: "User not found" });
    }

    // Compare passwords
    if (user.password !== password) {
      console.log("Password mismatch for user:", email);
      return res.status(401).json({ error: "Incorrect password" });
    }

    // Successful login
    console.log("Login successful for user:", email);
    res.json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error); // Log errors for debugging
    res.status(500).json({ error: "Server error" });
  }
});
app.put("/api/books/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author, genre } = req.body;

  try {
    // Update the book in your database
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, genre },
      { new: true } // Return the updated book
    );

    if (!updatedBook) {
      return res.status(404).send("Book not found");
    }

    res.status(200).send(updatedBook);
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).send("Internal server error");
  }
});
app.delete("/api/books/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    // Assuming you're using MongoDB
    const result = await Book.findByIdAndDelete(bookId);

    if (!result) {
      return res.status(404).send("Book not found");
    }

    res.status(200).send("Book deleted successfully");
  } catch (error) {
    console.error("Error deleting the book:", error);
    res.status(500).send("Internal server error");
  }
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
