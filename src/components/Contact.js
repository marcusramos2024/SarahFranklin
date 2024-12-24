// src/components/Contact.js
import React from "react";

function Contact() {
  const handleEmailClick = (e) => {
    e.preventDefault();
    window.open(
      "mailto:contact@athletesapparel.com?subject=Support%20Request&body=Hello%20Athletes%20Apparel%20Team,",
      "_self"
    );
  };

  return (
    <section id="contact" className="contact">
      <h2>Get in Touch</h2>
      <p>Have questions or need support? Reach out to us!</p>
      <a
        href="mailto:contact@athletesapparel.com?subject=Support%20Request&body=Hello%20Athletes%20Apparel%20Team,"
        className="contact-button"
        onClick={handleEmailClick}
      >
        <i className="fas fa-envelope"></i> Email Us
      </a>
    </section>
  );
}

export default Contact;
