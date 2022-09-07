import React from 'react';
import "./about.css";
import me from '../../assets/images/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function About() {


  return (
    <section id="about" className="about">

      <div className="content-nav">
        <h1>About</h1>
        <Link to="/">
          <div className="homeicon">
            <FontAwesomeIcon icon={faHome} className="divIcon fa-fw" />
          </div>
        </Link>

        <div className="spacer"></div>

        <div className="navbar">

          <div className="bigscreen-nav">
            <a href="https://google.com">Home</a>
            <a href="https://google.com">About</a>
            <a href="https://google.com">Portfolio</a>
            <a href="https://google.com">Resume</a>
            <a href="https://google.com">Contact</a>
          </div>

          <div className="smallscreen-nav">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </div>

      <div className="content-details">

        <div className="about-img">
          <img src={me} alt="Tye Stanley" />
        </div>

        <div className="about-info">
          <h2>Tye Stanley</h2>
          <p>
            <strong>JavaScript, Node.js, React.js, HTML, CSS</strong>
          </p>
          <p>
            Established and driven software engineer applying Full Stack Developer 
            background with a strong drive to improve/learn skill sets in relation 
            to creating full-fledged websites with high performance and strong 
            optimization. I have graduated from the Bootcamp program and obtained 
            my certificate in full stack web development from UT University.
          </p>
        </div>

        <div className="about-buttons">

          <button 
            class=""
            tabindex="0"
            type="button"
          >
            <span className="">Front-End</span>
          </button>

          <button 
            class=""
            tabindex="0"
            type="button"
          >
            <span className="">Back-End</span>
          </button>

        </div>

      </div>

      <div className="backdrop">
        <div className="backnav">
          <div className="navigator">
            <ul>
              <li>About</li>
              <li>Portfolio</li>
              <li>Resume</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About