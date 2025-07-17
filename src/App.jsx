import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="logo">Gideon.</div>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home" data-aos="fade-up">
        <h1>Hello, I'm Gideon</h1>
        <p>I design and build digital experiences for the web.</p>
      </section>

      <section className="about" id="about" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          I'm a passionate frontend developer with a love for clean UI and responsive design.
        </p>
      </section>

      <section className="projects" id="projects" data-aos="fade-up">
        <h2>Projects</h2>
        <div className="grid">
          <div className="project-card">Project 1</div>
          <div className="project-card">Project 2</div>
          <div className="project-card">Project 3</div>
        </div>
      </section>

      <section className="contact" id="contact" data-aos="fade-up">
        <h2>Contact Me</h2>
        <p>Reach out at gideon@example.com or via social media.</p>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Gideon. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
