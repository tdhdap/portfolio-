import React from "react";

function Home() {
  return (
    <div className="page-container fade-in">
      <div className="profile-header">
        <h1>Tharun Varma Dendukuri</h1>
      </div>

      <section className="info-section">
        <h2>About Me</h2>
        <p>
          I am a student currently pursuing a Bachelor of Technology in
          Artificial Intelligence at Mahindra École Centrale. With a strong
          foundation in machine learning and AI development, I have engineered
          solutions ranging from predictive HR analytics to agentic AI tools for
          code simplification. I am passionate about transforming complex data
          into actionable insights and creating interactive platforms that
          enhance research and discovery.
        </p>
      </section>

      <section className="info-section">
        <h2>Research Interests</h2>
        <p>
          Deeply engaged in Computer Vision research, specifically focusing on
          Vision-Language Models and architectures like U-Net and SegNet. I am
          currently conducting in-depth research to develop novel,
          high-performance image segmentation models optimized on large-scale
          datasets using high-performance computing (HPC) environments.
          Additionally, my interests extend to Agentic AI frameworks and
          leveraging Large Language Models (LLMs) for complex reasoning tasks.
        </p>
      </section>

      <section className="info-section">
        <h2>Personal Details</h2>
        <ul>
          <li>
            <strong>Phone:</strong> (91) 9108787758
          </li>
          <li>
            <strong>Personal Email:</strong> tharunsden@gmail.com
          </li>
          <li>
            <strong>College Email:</strong>{" "}
            se23uari137@mahindrauniversity.edu.in
          </li>
        </ul>
      </section>

      <section className="info-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {[
            "Python",
            "JavaScript",
            "TypeScript",
            "Java",
            "SQL",
            "Solidity",
            "Git",
            "Postman",
          ].map((skill) => (
            <span key={skill} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
