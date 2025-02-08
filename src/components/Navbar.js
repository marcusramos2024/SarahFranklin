import React, { useState } from "react";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="#home">Sarah's Gear</a>
        </div>
        <div
          className={`menu-overlay ${menuActive ? "active" : ""}`}
          onClick={handleMenuToggle}
        ></div>
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
            <a href="#contact">
              <i className="fas fa-envelope"></i> Contact
            </a>
          </li>
        </ul>
        <div
          className={`menu-toggle ${menuActive ? "active" : ""}`}
          onClick={handleMenuToggle}
        >
          <i className={`fas ${menuActive ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;