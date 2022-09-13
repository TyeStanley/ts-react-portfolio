import React from 'react';
import "./resume.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

import Button from '@mui/material/Button';

function Resume() {

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

  // resume section
  const leftArrow = () => {
    const slides = Array.from(document.querySelectorAll('.resume-slide'));

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
    let prevSibling = null;

    function getPrev(currentSlide, slides) {

      for (let i = 0; i < slides.length; i++) {
        if (currentSlide === slides[i]) {

          if (slides[i].previousElementSibling === null) {
            prevSibling = slides[2];
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
    const slides = Array.from(document.querySelectorAll('.resume-slide'));

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
    let nextSibling = null;

    function getNext(currentSlide, slides) {

      for (let i = 0; i < slides.length; i++) {
        if (currentSlide === slides[i]) {

          if (slides[i].nextElementSibling === null) {
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

  return (
    <div id="resume" class="resume">

      <div className="content-nav">
        <h1>Resume</h1>
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

        <div className="pdf">

          <div className="pdf-link">
            <Button className="download-button" style={{color: 'white'}}>
              Download
            </Button>
          </div>

        </div>

        <div className="resume-controls">
          <div id="left" onClick={leftArrow}>
            <FontAwesomeIcon id="leftArrow" icon={faLongArrowAltLeft} />
          </div>

          <div className="spacer"></div>

          <div id="right" onClick={rightArrow}>
            <FontAwesomeIcon id="rightArrow" icon={faLongArrowAltRight} />
          </div>
        </div>

        <div className="resume-container">

          <div className="resume-slide" style={{display: 'block'}}>
            <p className="current-page"><strong>Page: 1 of 3</strong></p>

            <div className="resume-image">
              <img 
                src={require('../../assets/images/resume/1ST_PAGE_OF_RESUME.png')}
                alt="Resume Page 1"
              />
            </div>

          </div>

          <div className="resume-slide" style={{display: 'none'}}>
            <div className="current-page"><strong>Page: 2 of 3</strong></div>

            <div className="resume-image">
              <img 
                src={require('../../assets/images/resume/2ND_PAGE_OF_RESUME.png')}
                alt="Resume Page 2"
              />
            </div>

          </div>

          <div className="resume-slide" style={{display: 'none'}}>
            <div className="current-page"><strong>Page: 3 of 3</strong></div>

            <div className="resume-image">
              <img 
                src={require('../../assets/images/resume/3RD_PAGE_OF_RESUME.png')}
                alt="Resume Page 3"
              />
            </div>

          </div>

        </div>
        
      </div>


      <div className="backdrop">
        <div className="backnav">
          <div className="navigator">
            <Link class="navItem" to="/ts-react-portfolio/about">About</Link>
            <Link class="navItem" to="/ts-react-portfolio/portfolio">Portfolio</Link>
            <Link class="navItem active" to="/ts-react-portfolio/resume">Resume</Link>
            <Link class="navItem" to="/ts-react-portfolio/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
