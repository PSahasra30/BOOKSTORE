import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left side */}
      <div className="navbar-brand">Book Store</div>

      {/* Right side */}
      <div className="navbar-links">
        <a href="#books">Books</a>
        <a href="#login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
