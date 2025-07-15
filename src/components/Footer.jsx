import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" data-aos="fade-in" data-aos-delay="200" data-aos-duration="800">
      <p>© {year} Gideon Osei Acheampong. All rights reserved.</p>
      <div className="footer-links">
  
        <a href="mailto:gideonkobbyjnr@gmail.com">Email</a> |{" "}
        <a href="https://github.com/GiddyKobby" target="_blank">GitHub</a> |{" "}
        <a href="https://linkedin.com/in/gideon-osei-acheampong" target="_blank">LinkedIn</a>
        <a href="https://facebook.com/giddy.kobby" target="_blank">Facebook</a>
        <a href="https://x.com/giddy.kobby" target="_blank">X</a>
        <a href="https://instagram.com/giddy_kobby" target="_blank">Instagram</a>
        <a href="https://youtube.com/@giddy_kobby" target="_blank">Youtube</a>
      </div>
    </footer>
  );
};

export default Footer;
