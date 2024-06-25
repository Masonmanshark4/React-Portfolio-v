// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';
import './styles/Portfolio.css';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';

const projects = [
  { title: 'Mother-Music', image: project1, deployed: 'https://project1.com', repo: 'https://github.com/Masonmanshark4/Mother-Music' },
  { title: 'Before-MySpace', image: project2, deployed: 'https://project2.com', repo: 'https://github.com/Masonmanshark4/Before-MySpace' },
  { title: 'A-Marvel-Quiz', image: project3, deployed: 'https://project3.com', repo: 'https://github.com/Masonmanshark4/The-Marvel-Chronicles-Knowledge-Saga'},
  { title: 'Weather-Site', image: project4, deployed: 'https://project4.com', repo: 'https://github.com/Masonmanshark4/Weather-Site'},
  { title: 'Coding-Quiz', image: project5, deployed: 'https://project5.com', repo: 'https://github.com/Masonmanshark4/Quiz-Code'},
  { title: 'The-Beginning', image: project6, deployed: 'https://project6.com', repo: 'https://github.com/Masonmanshark4/The-Beginning'}
  
];

const Portfolio = () => (
  <section id="portfolio">
    {projects.map((project, index) => (
      <Project
        key={index}
        title={project.title}
        image={project.image}
        deployed={project.deployed}
        repo={project.repo}
      />
    ))}
  </section>
);

export default Portfolio;
