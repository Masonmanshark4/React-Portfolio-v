// src/pages/Resume.jsx
import React from 'react';
import './styles/Resume.css';
import resume from '../assets/resume.pdf';

const Resume = () => (
<section id="resume">
	<div>
		<a href={resume} download>Download Resume</a>
	</div>
	<div>
		<h5>Front-End Proficiencies</h5>
		<ol>
			<li>HTML5</li>
			<li>CSS3</li>
			<li>JavaScript</li>
			<li>jQuery</li>
			<li>Bootstrap</li>
			<li>React</li>
			<li>version control/Git</li> 
			<li>responsive design</li>
		</ol>
		<br></br>
		<h5>Back-End Proficiencies</h5>
		<ol>
			<li>APIs</li>
			<li>NodeJS</li>
			<li>Express</li>
			<li>Model View Controller (MVC)</li>
			<li>REST</li>
			<li>Progressive Web Applications (PWA)</li>
		</ol>
		<br></br>
		<h5>Dev Tool Proficiencies</h5>
		<ol>
			<li>Git</li>
			<li>npm</li>
			<li>Jest</li>
			<li>Webpack</li>
		</ol>
		<br></br>
		<h5>Database Proficiencies</h5>
		<ol>
			<li>MySQL</li>
			<li>Sequelize</li>
			<li>NoSQL</li>
			<li>SQLite</li>
			<li>GraphQL</li>
			<li>MongoDB</li>
			<li>Mongoose</li>
		</ol>
	</div>
</section>
);

export default Resume;
