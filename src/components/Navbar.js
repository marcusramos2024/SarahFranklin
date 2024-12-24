// src/components/Navbar.js
import React, { useState } from "react";

function Navbar() {
  // State for mobile menu toggle
  const [menuActive, setMenuActive] = useState(false);

  // Toggle mobile menu
  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="#home">Sarah's Apparel</a>
        </div>
        <ul className={`nav-links ${menuActive ? "active" : ""}`}>
          <li>
            <a href="#home">
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          <li>
            <a href="#products">
              <i className="fas fa-tshirt"></i> Products
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="fas fa-user"></i> About Me
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="fas fa-envelope"></i> Contact
            </a>
          </li>
        </ul>
        <div
          className={`menu-toggle ${menuActive ? "active" : ""}`}
          onClick={handleMenuToggle}
        >
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
