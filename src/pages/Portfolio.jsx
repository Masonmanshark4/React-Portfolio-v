// src/pages/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';
import './styles/Portfolio.css';
import marvel from '../assets/Marvel rocks.gif';
import weather from '../assets/weather-site.png';
import quiz from '../assets/quiz-code.png';
import portfolio from '../assets/Portfolio-pre-launch.png';

const projects = [
  { title: 'Mother-Music', deployed: 'https://mother-music-b890c71f6170.herokuapp.com/', repo: 'https://github.com/Masonmanshark4/Mother-Music' },
  { title: 'Before-MySpace', deployed: 'N/A', repo: 'https://github.com/Masonmanshark4/Before-MySpace' },
  { title: 'A-Marvel-Quiz', image: marvel, deployed: 'https://masonmanshark4.github.io/The-Marvel-Chronicles-Knowledge-Saga/', repo: 'https://github.com/Masonmanshark4/The-Marvel-Chronicles-Knowledge-Saga'},
  { title: 'Weather-Site', image: weather, deployed: 'https://masonmanshark4.github.io/Weather-Site/', repo: 'https://github.com/Masonmanshark4/Weather-Site'},
  { title: 'Coding-Quiz', image: quiz, deployed: 'https://masonmanshark4.github.io/Quiz-Code/', repo: 'https://github.com/Masonmanshark4/Quiz-Code'},
  { title: 'The-Beginning', image: portfolio, deployed: 'https://masonmanshark4.github.io/Portfolio/', repo: 'https://github.com/Masonmanshark4/The-Beginning'}
  
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
