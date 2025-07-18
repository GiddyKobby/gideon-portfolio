// src/components/Projects.jsx
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="section" data-aos="fade-in" data-aos-delay="200" data-aos-duration="800">
      <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className="container">
        <h2>Projects</h2>

        <div className="project-item">
          <h3>Portfolio Website</h3>
          <p>A personal one-page portfolio showcasing my education, experience, and skills. Built with React and deployed using Netlify.</p>
        </div>

        <div className="project-item">
          <h3>Student Attendance App</h3>
          <p>Developed a web app for recording and reporting classroom attendance using Node.js and MongoDB.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
