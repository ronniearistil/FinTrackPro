// ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => (
  <div className="card">
    <h3>{project.name}</h3>
    <p>Profit: ${project.profit}</p>
    <p>Status: {project.status}</p>
  </div>
);

export default ProjectCard;



