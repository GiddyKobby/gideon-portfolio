import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
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
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home" data-aos="fade-up">
        <h1>Building Smarter Products with AI and Cloud Technology!</h1>
        <p>I design and build digital experiences for the web.</p>
      </section>

      <section className="about" id="about" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          I'm a passionate frontend developer geering toward building backend development, with a love for clean UI and responsive design. 
          I am continuously expanding my expertise, learning new technologies and embracing new challenges. I believe that, the sky is the 
          starting point, and the target is to create softwares that not only works, but adds real value for users and businesses alike.
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

      <section className="experience" id="experience" data-aos="fade-up">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>IT Support Specialist/ Business Relationship Officer</h3>
          <p><strong>Adehyeman Savings and Loans</strong> — Jul 2023 to Dec 2024</p>
          <ul>
            <li>Provided Tier-1 support for software and hardware issues.</li>
            <li>Managed IT assets and assisted with system upgrades.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Intern — Network Operations/ Customer Relations Officer</h3>
          <p><strong>Societe Generale Ghana</strong> — Oct 2021 to May 2023</p>
          <ul>
            <li>Assisted in monitoring network infrastructure.</li>
            <li>Documented daily performance reports and fault resolutions.</li>
          </ul>
        </div>
      
      </section>

      <section className="contact" id="contact" data-aos="fade-up">
        <h2>Contact Me</h2>
        <div className="social-icons">
  <a href="https://github.com/GiddyKobby" target="_blank" rel="noreferrer">
    <FaGithub />
  </a>
  <a href="https://linkedin.com/in/gideon-osei-acheampong" target="_blank" rel="noreferrer">
    <FaLinkedin />
  </a>
  <a href="mailto:gideonkobbyjnr@gmail.com">
    <FaEnvelope />
  </a>
  <a href="https://facebook.com/giddy.kobby" target="_blank" rel="noreferrer">
    <FaFacebook />
  </a>
  <a href="https://x.com/giddy_kobby" target="_blank" rel="noreferrer">
    <FaX />
  </a>
  <a href="https://instagram.com/giddy_kobby" target="_blank" rel="noreferrer">
    <FaInstagram />
  </a>
  <a href="https://youtube.com/@giddy_kobby" target="_blank" rel="noreferrer">
    <FaYoutube />
  </a>
</div>

      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Gideon Osei Acheampong. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
