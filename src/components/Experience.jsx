// src/components/Experience.jsx
import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="section" data-aos="fade-in" data-aos-delay="200" data-aos-duration="800">
      <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className="container">
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
      </div>
    </section>
  );
};

export default Experience;
