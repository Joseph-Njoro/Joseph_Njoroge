import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS for scroll animations
import "../styles/LandingPage.css"; // Import custom styles

// Typing effect component
const TypingEffect = () => {
  const typingRef = useRef(null);
  const [typingClass, setTypingClass] = useState('typewriter-twist'); // Default class for typewriter effect

  useEffect(() => {
    // Simulate the switch between effects if needed
    const timeout = setTimeout(() => {
      setTypingClass('pulse-effect'); // Change to pulse effect after initial typewriter
    }, 4000); // Change after 4 seconds

    return () => clearTimeout(timeout);
  }, []);

  return <div ref={typingRef} className={typingClass}>Code-driven creativity.</div>;
};

const LandingPage = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
        <TypingEffect />
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
      <section className="about-me" data-aos="fade-up">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          Hi, I'm Joseph Njoroge, a passionate software engineer with a keen interest in
          creating innovative solutions. I love coding and enjoy tackling challenging problems to
          build scalable and efficient systems. My expertise spans across frontend and backend
          technologies, and I always strive to enhance my skills and stay ahead in the tech world.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section" data-aos="fade-up">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Java", "C++", "TypeScript", "MongoDB", "SQL", "Git", "Docker", "Kubernetes", "GraphQL", "REST APIs"].map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="skill-name">{skill}</div>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${(index + 1) * 5}%` }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="projects-gallery" data-aos="fade-up">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {["Project 1", "Project 2", "Project 3"].map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={`path/to/project${index + 1}.jpg`}
                alt={`${project} screenshot`}
                className="project-image"
              />
              <div className="project-overlay">
                <h3 className="project-title">{project}</h3>
                <a href={`https://github.com/yourusername/${project}`} className="view-project-btn">
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="blog-preview" data-aos="fade-up">
        <h2 className="section-title">Latest Blog Posts</h2>
        <div className="blog-grid">
          {["Blog 1", "Blog 2", "Blog 3"].map((blog, index) => (
            <div key={index} className="blog-card">
              <h3 className="blog-title">{blog}</h3>
              <p className="blog-excerpt">A brief overview of what this blog is about...</p>
              <a href="/blog" className="read-more-btn">Read More</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;