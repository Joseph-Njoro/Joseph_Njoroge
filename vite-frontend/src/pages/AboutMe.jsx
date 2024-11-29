import React from "react";
import "../styles/AboutMe.css"; // Custom styles for the About Me page

const AboutMe = () => {
  return (
    <div className="about-me">
      {/* Timeline Section */}
      <section className="timeline">
        <h2>My Journey</h2>
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-year">2020</div>
            <div className="timeline-content">
              <h3>Started My Tech Journey</h3>
              <p>Begun exploring programming concepts and building small projects.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2021</div>
            <div className="timeline-content">
              <h3>Joined ALX Holberton</h3>
              <p>Enrolled in a comprehensive software engineering program to enhance my coding skills.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2022</div>
            <div className="timeline-content">
              <h3>Completed My First Major Project</h3>
              <p>Developed a full-stack web application for a local client using React, Node.js, and MongoDB.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2023</div>
            <div className="timeline-content">
              <h3>Expanded My Tech Knowledge</h3>
              <p>Started working on backend technologies and DevOps practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">Python</div>
          <div className="skill-item">React</div>
          <div className="skill-item">Node.js</div>
          <div className="skill-item">CSS</div>
          <div className="skill-item">HTML</div>
          <div className="skill-item">Git</div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
