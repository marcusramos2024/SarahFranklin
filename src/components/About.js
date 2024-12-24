// src/components/About.js
import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img
          src="images/placeholders/profilePicture.webp"
          className="profile-image"
          alt="Sarah Franklin"
        />
        <div className="about-text">
          <p>
            Hello! I'm Sarah Franklin, the founder of Sarah's Apparel. Passionate
            about sports and fashion, I created this brand to provide
            high-quality, stylish, and comfortable athletic wear for everyone.
            Whether you're hitting the gym, running a marathon, or simply
            lounging at home, our products are designed to support your active
            lifestyle with both performance and style in mind.
          </p>
          <p>
            Join our community and gear up with apparel that moves with you!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
