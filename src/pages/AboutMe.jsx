import React from 'react';
import '/syles/AboutMe.css';
import hiddenImage from './assets/IMG_1374.png';

function HiddenLinks() {
  return (
    <div className="HiddenLinks">
      <ul>
        <li>Discord: masonmanshark4</li>
        <li>Twitch: <a href="https://www.twitch.tv/masonmanshark4">Masonmanshark4</a></li>
        <li>Youtube: <a href="https://www.youtube.com/channel/UC1bjcEVlRfK3TqiuDUGLZfg">Masonmanshark4</a></li>
        <img src={hiddenImage} alt="Hidden link" />
      </ul>
    </div>
  );
}

export default HiddenLinks;
