import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css"; 

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Elevator Pitch", href: "#elevator-pitch" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<header className={`navbar ${scrolled ? "scrolled" : ""}`}>
    <div className="navbar-container">
        <div className="logo">Gideon Osei Acheampong</div> 
        
        {/* desktop Navigation */}
        <nav className="desktop-menu">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
         
         {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </div>
  </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
</header>
  );
};s

export default Navbar;


// import React, { useState, useEffect } from "react";
// import "./index.css"; // Optional if you separate CSS

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="logo">Gideon</div>

//       <div className={`nav-links ${menuOpen ? "open" : ""}`}>
//         <a href="#about" style={{ animationDelay: "0.1s" }}>About</a>
//         <a href="#projects" style={{ animationDelay: "0.2s" }}>Projects</a>
//         <a href="#skills" style={{ animationDelay: "0.3s" }}>Skills</a>
//         <a href="#contact" style={{ animationDelay: "0.4s" }}>Contact</a>
//       </div>

//       <div
//         className={`hamburger ${menuOpen ? "open" : ""}`}
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
