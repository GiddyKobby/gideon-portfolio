import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from 'react-icons/fa';

function App() {
  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-out", once: true });
  }, []);
  
  useEffect(() => {
  const handleScroll = () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
     <Navbar />
      
    {/* <header className="navbar">
      <div className="logo">Gideon Osei Acheampong</div>
        <nav>
          <a href="#about">About</a>
          <a href="#elevator-pitch">Elevator Pitch</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header> */}

     <section className="hero hero-bg" id="home" data-aos="fade-up">
        <div className="overlay">
          <h1>Building Smarter Products with AI and Cloud Technology!</h1>
          <p style={{ color: 'white' }}>
            I design and build digital experiences for the web.
          </p>
        </div>
      </section>

       <section className="about" id="about" data-aos="fade-up">
        <h2>About Me</h2>
        <div className="about-container">
          <img
            src="/profile.jpg"
            alt="Gideon Osei Acheampong"
            className="profile-pic"
          />
          <p>
            I'm a passionate software developer with a strong foundation in
            frontend development and a growing expertise in backend systems,
            driven by a mission to harness technology for a better world. 
            I thrive on building clean, responsive, and user-centered digital 
            experiences that do not just work, but make a meaningful impact.
            What makes me unique is my commitment to using code as a tool for 
            real-world problem-solving, especially in areas like youth opportunity, 
            education, and digital access. Whether it is designing intuitive interfaces 
            or developing scalable backend logic, I aim to create software that adds real 
            value for users and businesses alike. I'm always learning, always building, 
            and always embracing new challenges. For me, the sky is just the starting point, 
            and developer is more than a job title. It's how I bring ideas to life, create 
            opportunities for others, and work toward a future where technology serves everyone.
          </p>
        </div>
        <a href="/resume.pdf" download className="btn-resume">
          📄 Download My Resume
        </a>
      </section>

  <section className="skills" id="skills" data-aos="fade-up">
  <h2>Tech Stack</h2>
  <p className="skills-intro">Here are the technologies I use regularly to build and deploy web 
    applications:
  </p>
  <ul className="skills-list">
  {[
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "Django",
    "Git & GitHub",
  ].map((tech, index) => (
    <li key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
      {tech}
    </li>
  ))}
</ul>

</section>

<section className="portfolio" id="portfolio" data-aos="fade-up">
   <div className="project-card" data-aos="zoom-in" data-aos-delay="150">
  <img 
    src="https://unsplash.it/800/600?random&gravity=center"
    alt="Dashboard App" 
  />
  <h3>Phase 2 Project</h3>
  <p>Links to Phase 2 Project video on YouTube and Slide Deck.</p>
  <div className="buttons">
    <a href="https://youtu.be/Nu_YQZf_s0c" target="_blank" rel="noopener noreferrer">Project Video</a>
    <a href="https://docs.google.com/presentation/d/1boxXIrNYcFOWzrX6eDJEeDXeyxDBm
             2wT/edit?usp=sharing&ouid=115545336227503121383&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Project Slide Deck</a>
  </div>
</div>

</section>



<section className="video-section" id="elevator-pitch" data-aos="fade-up">
  <h2>Elevator Pitch</h2>
  <video width="100%" height="auto" controls>
    <source src="/videos/pitch.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</section>


<section id="projects" className="projects" data-aos="fade-up">
  <h2>My Work</h2>
  <div className="project-grid">
    <div className="project-card" data-aos="zoom-in">
      <img src="/project1.jpeg" alt="Portfolio Website" />
      <h3>Responsive Portfolio</h3>
      <p>A clean React portfolio website with animations and mobile-friendly design.</p>
      <div className="buttons">
        <a href="https://github.com/GiddyKobby/project-1" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://giddykobby.netlify.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
    </div>
    </div>

    <div className="project-card" data-aos="zoom-in" data-aos-delay="150">
      <img src="/project2.jpeg" alt="E-commerce App" />
      <h3>E-Commerce App</h3>
      <p>A mini store built with React, Stripe, and Firebase. Fully responsive.</p>
      <div className="buttons">
        <a href="https://github.com/GiddyKobby/project-2" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://giddykobby.netlify.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
    </div>

    <div className="project-card" data-aos="zoom-in" data-aos-delay="150">
  <img 
    src="https://unsplash.it/800/600?random&gravity=center"
    alt="Dashboard App" 
  />
  <h3>Dashboard App</h3>
  <p>Admin or analytics dashboard interface with mock data and visuals.</p>
  <div className="buttons">
    <a href="https://github.com/GiddyKobby/project-3" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="https://giddykobby.netlify.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
  </div>
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
  <p>Let’s connect on social media:</p>
  
  <div className="social-icons">
    <a href="https://github.com/GiddyKobby" target="_blank" rel="noreferrer"><FaGithub /> Github</a>
    <a href="https://linkedin.com/in/gideon-osei-acheampong" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
    <a href="mailto:gideonkobbyjnr@gmail.com" aria-label="Send email"><FaEnvelope /> Email</a>
    <a href="https://facebook.com/giddy.kobby" target="_blank" rel="noreferrer"><FaFacebook /> Facebook</a>
    <a href="https://x.com/giddy_kobby" target="_blank" rel="noreferrer"><FaTwitter /> X</a>
    <a href="https://instagram.com/giddy_kobby" target="_blank" rel="noreferrer"><FaInstagram /> Instagram</a>
    <a href="https://youtube.com/@giddy_kobby" target="_blank" rel="noreferrer"><FaYoutube /> YouTube</a>
  </div>

  <form
  className="contact-form"
  action="https://formspree.io/f/xqalaqpd" 
  method="POST"
>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required />
  <button type="submit">Send Message</button>
</form>

</section>
      

<ScrollToTopButton />
<footer>
  <p>
    &copy; {new Date().getFullYear()} Gideon Osei Acheampong. All rights reserved.
    </p>
</footer>


      
    </>
  );
}


export default App;
