import React from "react";

function Home() {
  return (
    <div className="page-container fade-in">
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-pic"
        />
        <h1>Tharun Varma Dendukuri</h1>
      </div>

      <section className="info-section">
        <h2>About Me</h2>
        <p>
          I am a student currently pursuing a Bachelor of Technology in
          Artificial Intelligence at Mahindra École Centrale.
        </p>
      </section>

      <section className="info-section">
        <h2>Research Interests</h2>
        <p>
          Deeply engaged in Computer Vision research, specifically focusing on
          Vision-Language Models and architectures like U-Net and SegNet.
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
