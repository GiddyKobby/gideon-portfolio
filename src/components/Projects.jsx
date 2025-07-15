// src/components/Projects.jsx
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
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
