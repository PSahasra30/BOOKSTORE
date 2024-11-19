import React from "react";
import "./BlogPage.css"; 
import image1 from "../assets/Blog1.png"

// Blog data
const blogPosts = [
  {
    id: 1,
    title: "Top 10 Books to Read in 2024",
    image: image1,
    content: `
      Discover the must-read books for 2024! Whether you're into fiction, 
      non-fiction, or self-help, this list covers it all. Dive into thrilling mysteries, 
      explore new worlds through fantasy, or learn valuable life skills with these top picks.
    `,
  },
  {
    id: 2,
    title: "Benefits of Reading: Why Books Are Your Best Friend",
    image: "https://via.placeholder.com/400x200",
    content: `
      Reading offers countless benefits beyond entertainment. 
      It sharpens your mind, improves your vocabulary, and reduces stress. 
      Studies show that just 15 minutes of daily reading can enhance your empathy.
    `,
  },
  {
    id: 3,
    title: "How to Start a Reading Habit",
    image: "https://via.placeholder.com/400x200",
    content: `
      Struggling to make time for reading? Start small: 
      - Set aside 10 minutes a day.
      - Keep a book with you wherever you go.
      Soon, you'll find yourself craving those quiet moments with a great book.
    `,
  },
  {
    id: 4,
    title: "E-Books vs. Physical Books: Which One is Better?",
    image: "https://via.placeholder.com/400x200",
    content: `
      The debate continues! E-books are convenient and portable. 
      On the other hand, physical books provide a tactile and immersive experience. 
      Which suits your lifestyle better?
    `,
  },
  {
    id: 5,
    title: "The Art of Organizing Your Bookshelf",
    image: "https://via.placeholder.com/400x200",
    content: `
      A well-organized bookshelf not only looks great but also makes it easier to find your favorite books. 
      Learn creative ways to sort your books by color, genre, or author.
    `,
  },
  {
    id: 6,
    title: "Upcoming Book Releases in 2024",
    image: "https://via.placeholder.com/400x200",
    content: `
      Check out the most anticipated books hitting shelves in 2024. 
      From gripping thrillers to heartwarming romances, there's something for everyone. 
      Add these to your wishlist!
    `,
  },
  {
    id: 7,
    title: "Why Audiobooks Are Gaining Popularity",
    image: "https://via.placeholder.com/400x200",
    content: `
      Audiobooks allow you to enjoy stories on the go. Whether commuting, exercising, 
      or cooking, dive into a world of tales hands-free.
    `,
  },
  {
    id: 8,
    title: "How to Build Your Home Library",
    image: "https://via.placeholder.com/400x200",
    content: `
      Dreaming of a personal library? Start small, collect books you love, 
      and create a cozy reading nook. A home library reflects your personality and passion for reading.
    `,
  },
];

const BlogPage = () => {
  console.log(image1);
  return (
    <div className="blog-container">
      <h1 className="blog-heading">Resources - Blog</h1>
      <p className="blog-subheading">
        Explore articles, tips, and insights to fuel your love for books.
      </p>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-content">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
