function Projects() {
  const projects = [
    {
      title: "Smart Attendance System",
      description: "Uses facial recognition to track student presence in real-time.",
      link: "#"
    },
    {
      title: "Chatbot for Customer Support",
      description: "Built with Python and Dialogflow, integrated into a company website.",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "This very site — built with React and deployed on Netlify.",
      link: "#"
    }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
