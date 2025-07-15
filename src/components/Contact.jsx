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

  <p>
    <label>
      Name: <br />
      <input type="text" name="name" required />
    </label>
  </p>

  <p>
    <label>
      Email: <br />
      <input type="email" name="email" required />
    </label>
  </p>

  <p>
    <label>
      Message: <br />
      <textarea name="message" required></textarea>
    </label>
  </p>

  <p>
    <button type="submit">Send</button>
  </p>
</form>


      </div>
    </section>
  );
};

export default Contact;
