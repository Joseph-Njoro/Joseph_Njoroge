import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS for scroll animations
import "../styles/LandingPage.css"; // Import custom styles

// Typing effect component
const TypingEffect = () => {
  const typingRef = useRef(null);
  const [typingClass, setTypingClass] = useState("typewriter-twist"); // Default class for typewriter effect

  useEffect(() => {
    // Simulate the switch between effects if needed
    const timeout = setTimeout(() => {
      setTypingClass("pulse-effect"); // Change to pulse effect after initial typewriter
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
        <div className="hero-content">
          <h1 className="hero-title">Joseph Njoroge</h1>
          {/* New profile image */}
          <div className="profile-container">
            <img
              src="/Images/Joseph.jpeg" // The new picture
              alt="Joseph Njoroge"
              className="profile-image"
            />
          </div>
          {/* Updated Typing Effect */}
          <TypingEffect />
          <p className="about-text">
            Hi, I'm Joseph Njoroge, a passionate software engineer with a keen interest in
            creating innovative solutions. I love coding and enjoy tackling challenging problems to
            build scalable and efficient systems. My expertise spans across frontend and backend
            technologies, and I always strive to enhance my skills and stay ahead in the tech world.
          </p>
          <div className="hero-buttons">
            <a href="/joseph_njoroge_resume.pdf" className="btn btn-primary" download>
              Download Resume
            </a>
            <a
              href="https://github.com/Joseph-Njoro"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View GitHub
            </a>
            <a
              href="https://linkedin.com/in/joseph-njoroge-/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="VERTICAL" data-vanity="joseph-njoroge-604bb8359" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ke.linkedin.com/in/joseph-njoroge-604bb8359?trk=profile-badge">Joseph Njoroge</a></div>
              Visit LinkedIn
            </a>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <section className="skills-section" data-aos="fade-up">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {[
            "HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Java", "C++", "TypeScript", "MongoDB", "SQL", "Git", "Docker", "Kubernetes", "GraphQL", "REST APIs"
          ].map((skill, index) => (
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
          {[
            {
              name: "Portfolio Website",
              link: "https://github.com/Joseph-Njoro/Joseph_Njoroge",
              image: "/Images/Project1_screenshot.png"
            },
            {
              name: "100DaysOfCode Challenge",
              link: "https://github.com/Joseph-Njoro/100daysofALXSE",
              image: "/Images/Project2_screenshot.png"
            },
            {
              name: "Kubiu Outfitters",
              link: "https://github.com/Joseph-Njoro/kubiu_Outfitters",
              image: "/Images/Project3_screenshot.png"
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                className="project-image"
              />
              <div className="project-overlay">
                <h3 className="project-title">{project.name}</h3>
                <a href={project.link} className="view-project-btn" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        {/* "More Projects" button */}
        <div className="more-projects-btn">
          <a href="/projects" className="btn btn-more-projects">More Projects</a>
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
        {/* "More Blogs" button */}
        <div className="more-blogs-btn">
          <a href="/blogs" className="btn btn-more-blogs">More Blogs</a>
        </div>
      </section>
    </div>
  );
};
<script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
export default LandingPage;