import React from 'react';
import Project from './Project';
import marvel from './assets/Marvel Rocks.png';
import weather from './assets/weather-site.png';
import quiz from './assets/quiz-code.png';
import portfolio from './assets/portfolio-pre-launch.png';

const projects = [
  {
    title: 'Mother-Music',
    deployed: 'https://mother-music-b890c71f6170.herokuapp.com/',
    repo: 'https://github.com/Masonmanshark4/Mother-Music',
    description: 'A music streaming platform to discover and listen to new tracks.'
  },
  {
    title: 'Before-MySpace',
    deployed: 'N/A',
    repo: 'https://github.com/Masonmanshark4/Before-MySpace',
    description: 'A retro social media experience reminiscent of early web days.'
  },
  {
    title: 'A-Marvel-Quiz',
    image: marvel,
    deployed: 'https://masonmanshark4.github.io/The-Marvel-Chronicles-Knowledge-Saga/',
    repo: 'https://github.com/Masonmanshark4/The-Marvel-Chronicles-Knowledge-Saga',
    description: 'Test your knowledge on Marvel superheroes with this fun quiz.'
  },
  {
    title: 'Weather-Site',
    image: weather,
    deployed: 'https://masonmanshark4.github.io/Weather-Site/',
    repo: 'https://github.com/Masonmanshark4/Weather-Site',
    description: 'Check the current weather and forecast for any city in the world.'
  },
  {
    title: 'Coding-Quiz',
    image: quiz,
    deployed: 'https://masonmanshark4.github.io/Quiz-Code/',
    repo: 'https://github.com/Masonmanshark4/Quiz-Code',
    description: 'Challenge yourself with this coding quiz that tests your programming knowledge.'
  },
  {
    title: 'The-Beginning',
    image: portfolio,
    deployed: 'https://masonmanshark4.github.io/Portfolio/',
    repo: 'https://github.com/Masonmanshark4/The-Beginning',
    description: 'A portfolio showcasing my projects and skills as a developer.'
  }
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
        description={project.description}
      />
    ))}
  </section>
);

export default Portfolio;
