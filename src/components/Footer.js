// src/components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 Sarah's Apparel. All rights reserved.</p>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/sarah.franklin13?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
