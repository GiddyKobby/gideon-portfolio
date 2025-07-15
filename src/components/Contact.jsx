// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className="container">
        <h2>Contact Me</h2>
        <p data-aos="fade-in" data-aos-delay="200" data-aos-duration="800">I'd love to hear from you! Please fill out the form below:</p>

        <form
  name="contact"
  method="POST"
  data-netlify="true"
  action="/thank-you.html"
>
  <input type="hidden" name="form-name" value="contact" />
  
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  
  <button type="submit">Send</button>
</form>

      </div>
    </section>
  );
};

export default Contact;
