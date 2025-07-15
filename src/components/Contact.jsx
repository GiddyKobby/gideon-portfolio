// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact Me</h2>
        <p>I'd love to hear from you! Please fill out the form below:</p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/thank-you"
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="5" required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
