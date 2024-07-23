import React from 'react';
import './App.css';
import selfie from './assets/selfie.jpg';
import preworkStudyGuide from './assets/prework-study-guide.png';
import logo from './assets/images/IMG_1175.png';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AboutMe from './AboutMe';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Mason Carr</h1>
        </header>

        <nav>
          <ul>
          <li><Link to="/portfolio">Portfolio</Link></li>
            <li><a href="#contact">Contact</a></li>
            <li><Link href="/Resume">Resume</Link></li>
          </ul>
        </nav>

        <main>
          <section id="about">
            <h2>About Me</h2>
            <img src={selfie} alt="Self image" />
            <p>
              Howdy, I am Mason Carr. First let me say thank you for reading, it'll be hard to convey exactly who I am in a couple of sentences, but I will do my best.
              I am an aspiring developer, of what I haven't figured it out yet. My initial journey here started with building my first computer back in high school all so I could play games with my friends.
              To getting into modding games using mod managers, from there I started looking at the code of the mods when things didn't work right to try and fix them on my own.
              Now playing with the code I understand now, thanks to the Ohio State Coding Bootcamp I have a deeper understanding of HTML, CSS, and JavaScript.
              After having learned more about web react and development it has given me an outlet to my puzzle-solving fixation, especially problems that get me thinking.
              The process I use to tackle problems is usually considered simple, look at it from the foundation and check its gears as we work up it.
              It is thanks to that mindset that allows me to live a simple life, able to discern what is within my control and take every opportunity I can from each moment.
              Or even enjoy the smallest of things in life to their fullest, from a simple silence to the biggest bash.
              <strong>Learn more here.</strong>
            </p>
          </section>

          <Link to="/portfolio">
            <section id="portfolio-link">
              <h2>Portfolio</h2>
              <div className="portfolio-item">
                <h3>Prework Study Guide</h3>
                <p>This was a project everyone in my coding bootcamp, but it was my first from scratch website I collaborated on. 
                   It is a site meant to display some useful points about the basic languages of coding.</p>
                <img src={preworkStudyGuide} alt="Project Image" style={{ width: '650px' }} />
              </div>
            </section>
          </Link>

          <section id="contact">
            <h2>Contact Me</h2>
            <p>You can reach me at <a href="mailto:masonmanshark80@gmail.com">masonmanshark80@gmail.com</a></p>
          </section>
        </main>

        <footer>
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </footer>

        <div className="fixed-link">
          <Link to="/about">
            <img src={logo} alt="logo" style={{ width: '50px' }} />
          </Link>
        </div>
      </div>

      <Switch>
        <Route path="/about" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </Router>
  );
}

export default App;
