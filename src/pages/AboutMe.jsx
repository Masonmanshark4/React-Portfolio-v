// src/pages/AboutMe.jsx
import React from 'react';
import './styles/AboutMe.css';
import photo from '../assets/photo.jpg';

const AboutMe = () => (
  <section id="about-me">
    <img src={photo} alt="Developer" />
    <p>Howdy, I am Mason Carr. First let me say thank you for reading, it'll be hard to convey exactly who I am in a couple of sentencses, but I will do my best. 
      I am an aspiring developer, of what I havent figured it out yet. My inital journey here started with building my first computer back in high school all so i could play games with my friends.
      To getting into modding games using mod managers, from there i started looking at code of the modds when things didnt work right to try and fix them on my own. 
      Now playing with the code I understand now, thanks to the Ohio State Coding Bootcamp I have a deeper undertanding of HTML, CSS, and Java Script. 
      After having learn more about web react and devlopment it has given me an outlet to my puzzle solving fixation, especially problems that get me thinking. 
      The process I use to tackle problems is usually considered simple, look at it from the foundation and check its gears as we work up it. 
      It is thanks to that mindset that allows me to live a simple life, able to diceren what is within my control and take every opertunity I can from each moment. 
      Or even enjoy the smallest of things in life to their fulest, from a simple silence to the biggest bash just for me. 
      <strong>Please note this is still being made while I am a student of the coding bootcamp, all you see here is subjest to change.</strong></p>
  </section>
);

export default AboutMe;
