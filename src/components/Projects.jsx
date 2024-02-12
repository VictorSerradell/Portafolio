import React from 'react';
import { projectData } from './data.js';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData &&
          projectData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="card">
                <div className={`cover ${project.class}`}>
                  <h1>{project.title}</h1>
                <div className="card-back">
                  <a href={project.gitHubLink}>Visit Project</a>
              <p className="description">{project.description}</p>
                </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
