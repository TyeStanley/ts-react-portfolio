import React from 'react';
import "./portfolio.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import projectList from './projectList.json';
import portfolio from '../../assets/images/portfolio/portfolioOrigin900x800.png';

function Portfolio() {

  const [navMenu, setNavMenu] = React.useState(false);
  const openMenu = () => {
    const menu = document.querySelector('.smallscreen-nav');
    const backdrop = document.querySelector('.backdrop');
    const backnav = document.querySelector('.backnav');

    const homeIcon = document.querySelector('.homeicon');

    if (!navMenu) {
      setNavMenu(true);
      menu.classList.add('open');
      backdrop.classList.add('backopen');
      backnav.classList.add('backnavopen');
      homeIcon.classList.add('openIcon');
    } else {
      setNavMenu(false);
      menu.classList.remove('open');
      backdrop.classList.remove('backopen');
      backnav.classList.remove('backnavopen');
      homeIcon.classList.remove('openIcon');
    }
  }

  // Mobile portfolio
  const leftArrow = () => {
    const slides = Array.from(document.querySelectorAll('.mobile-slide'));

    let currentSlide;

    function getBlock(slides) {
      for (let i = 0; i < slides.length; i++ ) {
        if (slides[i].style.display === 'block') {
          currentSlide = slides[i]

          return currentSlide;
        }
      }
    } 

    currentSlide = getBlock(slides);
    let prevSibling = null;

    function getPrev(currentSlide, slides) {

      for (let i = 0; i < slides.length; i++) {
        if (currentSlide === slides[i]) {

          if (slides[i].previousElementSibling === null) {
            prevSibling = slides[6];
            return prevSibling;
          } else {
            prevSibling = slides[i].previousElementSibling;
            return prevSibling;
          }
        }
      }
    }

    prevSibling = getPrev(currentSlide, slides);

    currentSlide.style.setProperty('display', 'none');
    prevSibling.style.setProperty('display', 'block');
  }

  const rightArrow = () => {
    const slides = Array.from(document.querySelectorAll('.mobile-slide'));

    let currentSlide = null;

    function getBlock(slides) {
      for (let i = 0; i < slides.length; i++ ) {
        if (slides[i].style.display === 'block') {
          currentSlide = slides[i]

          return currentSlide;
        }
      }
    } 

    currentSlide = getBlock(slides);
    let nextSibling = null;

    function getNext(currentSlide, slides) {
      let mobileControls = document.querySelector('.mobile-controls');

      for (let i = 0; i < slides.length; i++) {
        if (currentSlide === slides[i]) {

          if (slides[i].nextElementSibling === mobileControls) {
            nextSibling = slides[0];
            return nextSibling;
          } else {
            nextSibling = slides[i].nextElementSibling;
            return nextSibling;
          }
        }
      }
    }

    nextSibling = getNext(currentSlide, slides);

    currentSlide.style.setProperty('display', 'none');
    nextSibling.style.setProperty('display', 'block');
  }

  const openProject = () => {
    console.log("Clicked");
  }

  return (
    <div id="portfolio" className="portfolio">

      <div className="content-nav">
        <h1>Portfolio</h1>
        <Link to="/ts-react-portfolio">
          <div className="homeicon">
            <FontAwesomeIcon icon={faHome} className="divIcon fa-fw" />
          </div>
        </Link>

        <div className="spacer"></div>

        <div className="navbar">

          <div className="bigscreen-nav">
            <Link to="/ts-react-portfolio/about">About</Link>
            <Link to="/ts-react-portfolio/portfolio">Portfolio</Link>
            <Link to="/ts-react-portfolio/resume">Resume</Link>
            <Link to="/ts-react-portfolio/contact">Contact</Link>
          </div>

          <div className="smallscreen-nav" onClick={openMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </div>

      <div className="content-details">

        <div className="portfolio-mobile">

          <div className="mobile-slide" style={{display: 'block'}}>
            <div className="mobile-image">
              <img src={portfolio} alt="Nibbler" />
              <div className="mobile-description">
                <p>React, JavaScript, HTML/CSS</p>
                <h3>Portfolio</h3>
              </div>
            </div>
          </div>

          {projectList.map(project => (
            <div key={project.name} className="mobile-slide" style={{display: 'none'}}>
              <div className="mobile-image">
                <img 
                  src={require(`../../assets/images/portfolio/${project.image}`)} 
                  alt={project.altText} 
                />
                <div className="mobile-description">
                  <p>{project.techUsed}</p>
                  <h3>{project.name}</h3>
                </div>
              </div>
            </div>
          ))}

          <div className="mobile-controls">
            <div id="left" onClick={leftArrow}>
              <FontAwesomeIcon id="leftArrow" icon={faLongArrowAltLeft} />
            </div>

            <div className="spacer"></div>

            <div id="right" onClick={rightArrow}>
              <FontAwesomeIcon id="rightArrow" icon={faLongArrowAltRight} />
            </div>
          </div>
          
        </div>

        <div className="portfolio-grid">
            
          <div className="project">
            <img 
              src={portfolio}
              alt="Portfolio"
              onClick={openProject}
            />
          </div>

          {projectList.map(project => (
            <div key={project.name} className="project">
              <img 
                src={require(`../../assets/images/portfolio/${project.image}`)}
                alt={project.altText}
              />
            </div>
          ))}

        </div>

      </div>



      <div className="backdrop">
        <div className="backnav">
          <div className="navigator">
            <Link className="navItem" to="/ts-react-portfolio/about">About</Link>
            <Link className="navItem" to="/ts-react-portfolio/portfolio">Portfolio</Link>
            <Link className="navItem" to="/ts-react-portfolio/resume">Resume</Link>
            <Link className="navItem" to="/ts-react-portfolio/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
