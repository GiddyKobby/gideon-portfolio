// src/components/Navbar.jsx
import React from "react";
import Scrollspy from "react-scrollspy";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Scrollspy
        items={["hero", "about", "education", "experience", "projects", "skills", "contact"]}
        currentClassName="active"
        offset={-100}
        className="navbar-links"
      >
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </Scrollspy>
    </nav>
  );
};

export default Navbar;
