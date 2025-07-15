// src/components/Education.jsx
import React from "react";

const Education = () => {
  return (
    <section id="education" className="section">
      <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className="container">
        <h2>Education</h2>

        <div className="education-item">
          <h3>Master of Science in Robotics & AI</h3>
          <p>The Catholic University of America — 2025 (Expected)</p>
        </div>

        <div className="education-item">
          <h3>Bachelor of Science in Computer Science</h3>
          <p>Catholic University College of Ghana — 2021</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
