// src/components/Footer.jsx
import React from 'react';
import './styles/Footer.css';

const Footer = () => (
  <footer>
    <div>
      <a href="https://github.com/Masonmanshark4" 
        target="_blank" 
        rel="noopener noreferrer">
        <img src={require('./assets/github-logo.png')}
          alt="github"
          className="logo" />
      </a>
    </div>
    <div>
      <a href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage" 
        target="_blank" 
        rel="noopener noreferrer">
        <img src={require('./assets/indeed-logo.png')}
          alt="indeed"
          className="logo" />
      </a>
    </div>
    <div>
      <a href="https://www.twitch.tv/masonmanshark4" 
        target="_blank" 
        rel="noopener noreferrer">
        <img src={require('./assets/twitch-logo.png')}
          alt="twitch"
          className="logo" />
      </a>
    </div>
  </footer>
);

export default Footer;
