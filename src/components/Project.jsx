// src/components/Project.jsx
import React from 'react';
import './styles/Project.css';

const Project = ({ title, image, deployed, repo }) => (
  <div className="project">
    <h3>{title}</h3>
    <img src={image} alt={title} />
    <div>
      <a href={deployed} target="_blank" rel="noopener noreferrer">Deployed App</a>
      <a href={repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  </div>
);

export default Project;
