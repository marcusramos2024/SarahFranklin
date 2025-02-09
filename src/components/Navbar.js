import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="#home">Sarah's Gear</a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home">
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          {/* <li>
            <a href="#products">
              <i className="fas fa-tshirt"></i> Products
            </a>
          </li> */}
          <li>
            <a href="#signed-jerseys-carousel">
            <i class="fa-solid fa-pen-fancy"></i>Signed
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="fas fa-envelope"></i> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
