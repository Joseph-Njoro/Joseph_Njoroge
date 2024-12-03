import React from "react";
import "../styles/AboutMe.css"; // Custom styles for the About Me page

const AboutMe = () => {
  return (
    <div className="about-me">
      {/* Introduction Section */}
      <section className="introduction">
        <h1 className="intro-title">About Me</h1>
        <p className="intro-text">
          Hi, I'm Joseph, a passionate full-stack developer and project manager based in Kenya. 
          I have a strong background in software engineering with expertise in web development, 
          backend architecture, and DevOps practices. I love creating elegant and efficient code 
          and continuously expanding my technical skills. My goal is to build meaningful applications that make a real impact.
        </p>
        <div className="cta-buttons">
          <button className="btn primary">Contact Me</button>
          <button className="btn secondary">View My Work</button>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline">
        <h2>My Journey</h2>
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-year">2020</div>
            <div className="timeline-content">
              <h3>Started My Tech Journey</h3>
              <p>Explored programming concepts and built small projects, sparking my love for coding.</p>
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
              <p>Focused on backend technologies, cloud services, and DevOps practices to broaden my expertise.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2024</div>
            <div className="timeline-content">
              <h3>Portfolio and Personal Projects</h3>
              <p>Worked on creating a professional portfolio and contributed to open-source projects, showcasing my ability to collaborate and create scalable solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Technical Skills</h2>
        <div className="skills-list">
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">Python</div>
          <div className="skill-item">React</div>
          <div className="skill-item">Node.js</div>
          <div className="skill-item">CSS</div>
          <div className="skill-item">HTML</div>
          <div className="skill-item">Git</div>
          <div className="skill-item">C++</div>
          <div className="skill-item">Java</div>
          <div className="skill-item">TypeScript</div>
          <div className="skill-item">MongoDB</div>
          <div className="skill-item">SQL</div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="soft-skills">
        <h2>Soft Skills</h2>
        <ul className="soft-skills-list">
          <li>Team Collaboration</li>
          <li>Problem-Solving</li>
          <li>Leadership</li>
          <li>Time Management</li>
          <li>Adaptability</li>
        </ul>
      </section>

      {/* Achievements & Recognition Section */}
      <section className="achievements">
        <h2>Achievements</h2>
        <ul className="achievements-list">
          <li>Winner of the 2023 Hackathon at ALX Holberton</li>
          <li>Contributed to the development of an open-source library for efficient data handling</li>
          <li>Speaker at local tech meetups on topics of full-stack development and cloud infrastructure</li>
        </ul>
      </section>

      {/* Interests & Hobbies Section */}
      <section className="interests">
        <h2>Interests</h2>
        <p>I enjoy staying active by playing football, hiking, and exploring new technologies. When not coding, you'll find me tinkering with tech gadgets or reading up on the latest in AI and software architecture.</p>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me for project collaborations, job opportunities, or just a friendly tech chat!</p>
        <a href="mailto:joseph@example.com" className="contact-link">joseph@example.com</a>
      </section>
    </div>
  );
};

export default AboutMe;