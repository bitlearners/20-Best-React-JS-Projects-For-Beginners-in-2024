// App.js
import React from "react";
import "./Style.css";

const App = () => {
  return (
    <div>
      <header className="main-header">
        <h2>MCM Software Solutions</h2>
      </header>

      <div className="hero-section">
        <div className="hero-image">
          <img
            src="https://raw.githubusercontent.com/bitlearners/react-practical-for-mcm1-year/main/undraw_Code_review_re_woeb.png"
            alt="Company Logo"
            className="hero-image "
          />
        </div>
        <div className="hero-content">
          
          <h1>Your Technology Partner</h1>
          <p>
            Welcome to MCM Software Solutions! We are a team of dedicated
            professionals specializing in creating cutting-edge software
            solutions to meet your business needs.
          </p>
        </div>
      </div>

      <div className="about-container">
        <div className="about-section">
        <div className="about-image">
          <img
            src="https://raw.githubusercontent.com/bitlearners/react-practical-for-mcm1-year/main/undraw_web_search_re_efla.svg"
            alt="Company Logo"
            className="about-image"
          />
        </div>
          <h2>Who We Are</h2>
          <p>
            At MCM Software Solutions, we take pride in our ability to transform
            ideas into robust and scalable software. Our team of experts is
            proficient in a variety of technologies, including HTML5, CSS3,
            JavaScript, React, Angular, Vue.js, Node.js, and more.
          </p>
        </div>

        <div className="skills-section">
          <h2>Our Projects</h2>
          <div className="projects-section">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>
                Discover how we brought innovative solutions to life. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>
                Explore the success stories of our projects. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-skills-container">
        <div className="skills-section">
          <h2>Our Skills</h2>
          <ul className="skills-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className="skills-section">
        <div className="about-image">
          <img
            src="https://raw.githubusercontent.com/bitlearners/react-practical-for-mcm1-year/main/undraw_contact_us_re_4qqt.svg"
            alt="Company Logo"
            className="about-image"
          />
        </div>
          <h2>Contact Us</h2>
          <p>
          If you have any inquiries or would like to get in touch with us, feel free to contact MCM Software Solutions:
        </p>
        <p>
          Email: <a href="mailto:info@mcmsoftwaresolutions.com">info@mcmsoftwaresolutions.com</a>
        </p>
        </div>
      </div>

      <footer className="main-footer">
        <p>© Copyright 2024 by MCM Software Solutions</p>
      </footer>
    </div>
  );
};

export default App;
