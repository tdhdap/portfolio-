import React from "react";

function Projects() {
  const projectList = [
    {
      title: "NodeSeeker",
      description: "An AI-powered research paper explorer tool.",
      repo: "https://github.com/tdhdap/NodeSeeker-AI-Research-Paper-Explorer",
    },
    {
      title: "Predicting Employee Attrition and Salary",
      description:
        "Developed and compared multiple machine learning models for attrition prediction.",
      repo: "https://github.com/tdhdap/Predicting-Employee-Attrition-and-Salary-Using-Machine-Learning",
    },
  ];

  return (
    <div className="page-container fade-in">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
