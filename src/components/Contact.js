// src/components/Contact.js
import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Have a Question?</h2>
      <a
        href="mailto:sarahfranklinstore@gmail.com"
        className="contact-button"
      >
        <i className="fas fa-envelope"></i> Email
      </a>
    </section>
  );
}

export default Contact;
