import React from 'react';

const Contact = () => {
  return (
    <form
      action="https://formspree.io/f/xqalaqpd"
      method="POST"
      className="contact-form"
    >
      <h2>Let's Work Together</h2>

      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" required />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" required />

      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" rows="5" required></textarea>

      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
