// src/components/LandingPage.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/LandingPage.css"; // Custom styles

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Joseph Njoroge</h1>
        <p className="hero-tagline">Building scalable systems, one line of code at a time.</p>
        <div className="hero-buttons">
          <a href="/api/resume" className="btn btn-primary" download>
            Download Resume
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Visit LinkedIn
          </a>
        </div>
      </motion.div>

      {/* About Me Section */}
      <section className="about-me">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          Hi, I'm Joseph Njoroge, a passionate software engineer with a keen interest in
          creating innovative solutions. I love coding and enjoy tackling challenging problems to
          build scalable and efficient systems. My expertise spans across frontend and backend
          technologies, and I always strive to enhance my skills and stay ahead in the tech world.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {["HTML", "CSS", "JavaScript", "React", "Node.js"].map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="skill-name">{skill}</div>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${(index + 1) * 20}%` }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;