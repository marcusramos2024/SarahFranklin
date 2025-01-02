import React from "react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Gear Up Like a Champion</h1>
        <p>Shop Sarah Franklin's Unused Badger Gear</p>
        <a href="#products" className="cta-button">
          <i className="fas fa-shopping-cart"></i> Shop Now
        </a>
      </div>
    </section>
  );
}

export default Hero;
