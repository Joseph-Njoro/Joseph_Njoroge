import React, { useEffect, useState } from 'react';
import '../styles/ProjectsPage.css';

// ProjectCard component
const ProjectCard = ({ project, reverse }) => (
  <div className={`project-card ${reverse ? 'reverse' : ''}`}>
    <img src={project.image} alt={project.name} className="project-image" />
    <div className="project-details">
      <h3 className="project-title">{project.name}</h3>
      <p className="project-description">{project.tagline}</p>
      <div className="project-actions">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn">
          View on GitHub
        </a>
        {project.liveDemo && (
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-btn">
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

// TechHighlights component
const TechHighlights = ({ projects }) => {
  const technologies = [...new Set(projects.flatMap((project) => project.technologies))];

  return (
    <div className="tech-highlights-container">
      {technologies.map((tech, index) => (
        <span key={index} className="tech-badge">
          {tech}
        </span>
      ))}
    </div>
  );
};

// Testimonials component
const Testimonials = () => (
  <div className="testimonials-container">
    <blockquote className="testimonial">
      "Joseph's ability to deliver high-quality code is unmatched. He transformed our vision into a reality!"
      <footer>- Happy Client</footer>
    </blockquote>
    <blockquote className="testimonial">
      "Working with Joseph was a pleasure. His technical skills and creativity are top-notch."
      <footer>- Elton Wahinya</footer>
    </blockquote>
  </div>
);

// ProjectTimeline component
const ProjectTimeline = ({ projects }) => (
  <div className="timeline-container">
    {projects.map((project, index) => (
      <div key={index} className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <h3>{project.name}</h3>
          <p>{project.timelineDescription}</p>
        </div>
      </div>
    ))}
  </div>
);

// ContactCTA component
const ContactCTA = () => (
  <div className="contact-cta-container">
    <h3>Have a project in mind?</h3>
    <p>Let's bring it to life. Contact me to discuss further!</p>
    <a href="#contact" className="cta-btn">Get in Touch</a>
  </div>
);

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      setProjects([
        {
          id: 1,
          name: 'E-Commerce Platform',
          tagline: 'Streamlining shopping experiences with React and Node.js.',
          image: '/Images/Project1_screenshot.png',
          github: 'https://github.com/joseph/ecommerce',
          liveDemo: 'https://ecommerce.joseph.com',
          technologies: ['React', 'Node.js', 'MongoDB'],
          timelineDescription: 'Launched in Q1 2023 with advanced features like live search and cart management.',
        },
        {
          id: 2,
          name: 'Portfolio Website',
          tagline: 'Showcasing creativity and skills.',
          image: '/Images/Project2_screenshot.png',
          github: 'https://github.com/joseph/portfolio',
          liveDemo: null,
          technologies: ['React', 'CSS'],
          timelineDescription: 'Built to demonstrate full-stack development capabilities.',
        },
        {
          id: 3,
          name: 'Steganography Tool',
          tagline: 'Hiding secrets in plain sight.',
          image: '/Images/Project3_screenshot.png',
          github: 'https://github.com/joseph/steganography',
          liveDemo: null,
          technologies: ['Python', 'Flask'],
          timelineDescription: 'Developed for academic research in 2024.',
        },
      ]);
    };

    fetchProjects();
  }, []);

  return (
    <div className="projects-page">
      <header className="projects-intro">
        <h1 className="intro-title">Crafting Solutions, One Project at a Time</h1>
        <p className="intro-description">
          Here are the solutions I've crafted to solve real-world problems, merge creativity with code, and push technical boundaries.
        </p>
      </header>

      <section className="projects-section">
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} reverse={index % 2 !== 0} />
          ))}
        </div>
      </section>

      <section className="tech-highlights">
        <h2>Technologies I Use</h2>
        <TechHighlights projects={projects} />
      </section>

      <section className="projects-timeline">
        <h2>My Project Journey</h2>
        <ProjectTimeline projects={projects} />
      </section>

      <section className="testimonials">
        <h2>What People Say</h2>
        <Testimonials />
      </section>

      <section className="contact-cta">
        <ContactCTA />
      </section>
    </div>
  );
};

export default ProjectsPage;