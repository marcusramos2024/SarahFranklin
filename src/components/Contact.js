// src/components/Contact.js
import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get in Touch</h2>
      <p>Have questions or need support? Reach out to us!</p>
      <a
        href="mailto:sarahfranklin@test.com"
        className="contact-button"
      >
        <i className="fas fa-envelope"></i> Email Us
      </a>
    </section>
  );
}

export default Contact;
