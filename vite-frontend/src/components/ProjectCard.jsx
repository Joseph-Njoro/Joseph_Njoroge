import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image_url} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-buttons">
          <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="btn btn-github">GitHub</a>
          <a href={project.live_demo_url} target="_blank" rel="noopener noreferrer" className="btn btn-demo">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
