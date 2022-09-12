import React from 'react';
import "./portfolio.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

import portfolio from '../../assets/images/portfolio/portfolioOrigin900x800.png';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

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

  // Portfolio Project
  const [myPortfolio, setMyPortfolio] = React.useState(false);

  const openMyPortfolio = () => {
    setMyPortfolio(true);
  }
  const closeMyPortfolio = () => {
    setMyPortfolio(false);
  }
  // Other projects
  const [nibbler, setNibbler] = React.useState(false);
  const [foodPlanner, setFoodPlanner] = React.useState(false);
  const [techBlog, setTechBlog] = React.useState(false);
  const [weather, setWeather] = React.useState(false);
  const [codeQuiz, setCodeQuiz] = React.useState(false);
  const [generator, setGenerator] = React.useState(false);

  const openNibbler = () => {
    setNibbler(true);
  }
  const closeNibbler = () => {
    setNibbler(false);
  }

  const openFoodPlanner = () => {
    setFoodPlanner(true);
  }
  const closeFoodPlanner = () => {
    setFoodPlanner(false);
  }

  const openTechBlog = () => {
    setTechBlog(true);
  }
  const closeTechBlog = () => {
    setTechBlog(false);
  }

  const openWeather = () => {
    setWeather(true);
  }
  const closeWeather = () => {
    setWeather(false);
  }

  const openCodeQuiz = () => {
    setCodeQuiz(true);
  }
  const closeCodeQuiz = () => {
    setCodeQuiz(false);
  }

  const openGenerator = () => {
    setGenerator(true);
  }
  const closeGenerator = () => {
    setGenerator(false);
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
              <img 
                src={require('../../assets/images/portfolio/portfolioOrigin900x800.png')}
                alt="Portfolio"
                onClick={openMyPortfolio}
              />
              <div className="mobile-description">
                <p>React, JavaScript, HTML/CSS</p>
                <h3>Portfolio</h3>
              </div>
            </div>
          </div>

          <div className="mobile-slide" style={{display: 'none'}}>
            <div className="mobile-image">
              <img 
                src={require('../../assets/images/portfolio/nibblerOrigin900x800.png')} 
                alt="Nibbler"
                onClick={openNibbler}
              />
            </div>
            <div className="mobile-description">
              <p>React, JavaScript, Node, Express, GraphQL, JWT</p>
              <h3>Nibbler</h3>
            </div>
          </div>

          <div className="mobile-slide" style={{display: 'none'}}>
            <div className="mobile-image">
              <img 
                src={require('../../assets/images/portfolio/foodPlanner900x800.png')} 
                alt="Food Planner"
                onClick={openFoodPlanner}
              />
            </div>
            <div className="mobile-description">
              <p>JavaScript, jQuery, Bulma, HTML/CSS</p>
              <h3>Food Planner</h3>
            </div>
          </div>

          <div className="mobile-slide" style={{display: 'none'}}>
            <div className="mobile-image">
              <img 
                src={require('../../assets/images/portfolio/techblogOrigin900x800.png')} 
                alt="My Tech Blog"
                onClick={openTechBlog}
              />
            </div>
            <div className="mobile-description">
              <p>JavaScript, Node, Express, mySQL, Handlebars, HTML/CSS</p>
              <h3>My Tech Blog</h3>
            </div>
          </div>

          <div className="mobile-slide" style={{display: 'none'}}>
            <div className="mobile-image">
              <img 
                src={require('../../assets/images/portfolio/weatherOrigin900x800.png')} 
                alt="Weather Dashboard"
                onClick={openWeather}
              />
            </div>
            <div className="mobile-description">
              <p>JavaScript, jQuery, Bootstrap, HTML/CSS, OpenWeather API</p>
              <h3>Weather Dashboard</h3>
            </div>
          </div>

          <div className="mobile-slide" style={{display: 'none'}}>
            <div className="mobile-image">
              <img 
                src={require('../../assets/images/portfolio/quizOrigin900x800.png')} 
                alt="Code Quiz"
                onClick={openCodeQuiz}
              />
            </div>
            <div className="mobile-description">
              <p>JavaScript, Bootstrap, HTML/CSS</p>
              <h3>Code Quiz</h3>
            </div>
          </div>

          <div className="mobile-slide" style={{display: 'none'}}>
            <div className="mobile-image">
              <img 
                src={require('../../assets/images/portfolio/passwordOrigin900x800.png')} 
                alt="Password Generator"
                onClick={openGenerator}
              />
            </div>
            <div className="mobile-description">
              <p>JavaScript, HTML/CSS</p>
              <h3>Password Generator</h3>
            </div>
          </div>

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
              onClick={openMyPortfolio}
            />
            <Modal
              hideBackdrop
              open={myPortfolio}
              onClose={closeMyPortfolio}
              aria-labelledby="modal-title"
              aria-describedby="modal-description" 
            >
              <Box className="modal-container">
                <div className="modal-content">
                  <div className="close-box">
                    <div className="spacer"></div>
                    <div className="close-icon">
                      <Button onClick={closeMyPortfolio}>
                        Close
                      </Button>
                    </div>
                  </div>
                
                  <div className="project-container">
                    <div className="project-image">
                      <img src={portfolio} alt="Portfolio" />
                    </div>

                    <div className="project-description">
                      <h2>Portfolio</h2>
                      <h3>React, JavaScript, Node, HTML/CSS</h3>
                      <hr />
                      <p>Text is filled in here with a bunch of it.</p>
                      <a href="https://google.com">
                        <Button>website</Button>
                      </a>
                      <a href="https://google.com">
                        <Button>source</Button>
                      </a>
                    </div>

                  </div>

                </div>
              </Box>
            </Modal>
          </div>

          <div className="project">
            <img 
              src={require('../../assets/images/portfolio/nibblerOrigin900x800.png')}
              alt="Nibbler"
              onClick={openNibbler}
            />
            <Modal
              hideBackdrop
              open={nibbler}
              onClose={closeNibbler}
              aria-labelledby="modal-title"
              aria-describedby="modal-description" 
            >
              <Box className="modal-container">
                <div className="modal-content">

                  <div className="close-box">
                    <div className="spacer"></div>
                    <div className="close-icon">
                      <Button onClick={closeNibbler}>
                        Close
                      </Button>
                    </div>
                  </div>
                
                  <div className="project-container">

                    <div className="project-image">
                      <img 
                        src={require('../../assets/images/portfolio/nibblerOrigin900x800.png')} 
                        alt="Nibbler"
                      />
                    </div>

                    <div className="project-description">
                      <h2>Nibbler</h2>
                      <h3>React, JavaScript, Node, Express, GraphQL, JWT</h3>
                      <hr />
                      <p>Text is filled in here with a bunch of it.</p>
                      <a href="https://fathomless-peak-48299.herokuapp.com">
                        <Button>website</Button>
                      </a>
                      <a href="https://github.com/TyeStanley/nibbler">
                        <Button>source</Button>
                      </a>
                    </div>

                  </div>
                </div>
              </Box>
            </Modal>
          </div>

          <div className="project">
            <img 
              src={require('../../assets/images/portfolio/foodPlanner900x800.png')}
              alt="Food Planner"
              onClick={openFoodPlanner}
            />
            <Modal
              hideBackdrop
              open={foodPlanner}
              onClose={closeFoodPlanner}
              aria-labelledby="modal-title"
              aria-describedby="modal-description" 
            >
              <Box className="modal-container">
                <div className="modal-content">
                  
                  <div className="close-box">
                    <div className="spacer"></div>
                    <div className="close-icon">
                      <Button onClick={closeFoodPlanner}>
                        Close
                      </Button>
                    </div>
                  </div>
                
                  <div className="project-container">

                    <div className="project-image">
                      <img 
                        src={require('../../assets/images/portfolio/foodPlanner900x800.png')} 
                        alt="Food Planner"
                      />
                    </div>

                    <div className="project-description">
                      <h2>Food Planner</h2>
                      <h3>JavaScript, jQuery, Bulma, HTML/CSS</h3>
                      <hr />
                      <p>Text is filled in here with a bunch of it.</p>
                      <a href="https://tyestanley.github.io/my-food-planner">
                        <Button>website</Button>
                      </a>
                      <a href="https://github.com/TyeStanley/my-food-planner">
                        <Button>source</Button>
                      </a>
                    </div>

                  </div>
                </div>
              </Box>
            </Modal>
          </div>

          <div className="project">
            <img 
              src={require('../../assets/images/portfolio/techblogOrigin900x800.png')}
              alt="My Tech Blog"
              onClick={openTechBlog}
            />
            <Modal
              hideBackdrop
              open={techBlog}
              onClose={closeTechBlog}
              aria-labelledby="modal-title"
              aria-describedby="modal-description" 
            >
              <Box className="modal-container">
                <div className="modal-content">
                  
                  <div className="close-box">
                    <div className="spacer"></div>
                    <div className="close-icon">
                      <Button onClick={closeTechBlog}>
                        Close
                      </Button>
                    </div>
                  </div>
                
                  <div className="project-container">

                    <div className="project-image">
                      <img 
                        src={require('../../assets/images/portfolio/techblogOrigin900x800.png')} 
                        alt="My Tech Blog"
                      />
                    </div>

                    <div className="project-description">
                      <h2>My Tech Blog</h2>
                      <h3>JavaScript, Node, Express, mySQL, Handlebars, HTML/CSS</h3>
                      <hr />
                      <p>Text is filled in here with a bunch of it.</p>
                      <a href="https://tech-blog-by-tye.herokuapp.com">
                        <Button>website</Button>
                      </a>
                      <a href="https://github.com/TyeStanley/my-tech-blog">
                        <Button>source</Button>
                      </a>
                    </div>

                  </div>
                </div>
              </Box>
            </Modal>
          </div>
          
          <div className="project">
            <img 
              src={require('../../assets/images/portfolio/weatherOrigin900x800.png')}
              alt="Weather Dashboard"
              onClick={openWeather}
            />
            <Modal
              hideBackdrop
              open={weather}
              onClose={closeWeather}
              aria-labelledby="modal-title"
              aria-describedby="modal-description" 
            >
              <Box className="modal-container">
                <div className="modal-content">
                  
                  <div className="close-box">
                    <div className="spacer"></div>
                    <div className="close-icon">
                      <Button onClick={closeWeather}>
                        Close
                      </Button>
                    </div>
                  </div>
                
                  <div className="project-container">

                    <div className="project-image">
                      <img 
                        src={require('../../assets/images/portfolio/weatherOrigin900x800.png')} 
                        alt="Weather Dashboard"
                      />
                    </div>

                    <div className="project-description">
                      <h2>Weather Dashboard</h2>
                      <h3>JavaScript, jQuery, Bootstrap, HTML/CSS, OpenWeather API</h3>
                      <hr />
                      <p>Text is filled in here with a bunch of it.</p>
                      <a href="https://tyestanley.github.io/weather-dashboard">
                        <Button>website</Button>
                      </a>
                      <a href="https://github.com/TyeStanley/weather-dashboard">
                        <Button>source</Button>
                      </a>
                    </div>

                  </div>
                </div>
              </Box>
            </Modal>
          </div>
          
          <div className="project">
            <img 
              src={require('../../assets/images/portfolio/quizOrigin900x800.png')}
              alt="Code Quiz"
              onClick={openCodeQuiz}
            />
            <Modal
              hideBackdrop
              open={codeQuiz}
              onClose={closeCodeQuiz}
              aria-labelledby="modal-title"
              aria-describedby="modal-description" 
            >
              <Box className="modal-container">
                <div className="modal-content">
                  
                  <div className="close-box">
                    <div className="spacer"></div>
                    <div className="close-icon">
                      <Button onClick={closeCodeQuiz}>
                        Close
                      </Button>
                    </div>
                  </div>
                
                  <div className="project-container">

                    <div className="project-image">
                      <img 
                        src={require('../../assets/images/portfolio/quizOrigin900x800.png')} 
                        alt="Code Quiz"
                      />
                    </div>

                    <div className="project-description">
                      <h2>Code Quiz</h2>
                      <h3>JavaScript, Bootstrap, HTML/CSS</h3>
                      <hr />
                      <p>Text is filled in here with a bunch of it.</p>
                      <a href="https://tyestanley.github.io/code-quiz">
                        <Button>website</Button>
                      </a>
                      <a href="https://github.com/TyeStanley/code-quiz">
                        <Button>source</Button>
                      </a>
                    </div>

                  </div>
                </div>
              </Box>
            </Modal>
          </div>

          <div className="project">
            <img 
              src={require('../../assets/images/portfolio/passwordOrigin900x800.png')}
              alt="Password Generator"
              onClick={openGenerator}
            />
            <Modal
              hideBackdrop
              open={generator}
              onClose={closeGenerator}
              aria-labelledby="modal-title"
              aria-describedby="modal-description" 
            >
              <Box className="modal-container">
                <div className="modal-content">
                  
                  <div className="close-box">
                    <div className="spacer"></div>
                    <div className="close-icon">
                      <Button onClick={closeGenerator}>
                        Close
                      </Button>
                    </div>
                  </div>
                
                  <div className="project-container">

                    <div className="project-image">
                      <img 
                        src={require('../../assets/images/portfolio/passwordOrigin900x800.png')} 
                        alt="Password Generator"
                      />
                    </div>

                    <div className="project-description">
                      <h2>Password Generator</h2>
                      <h3>JavaScript, HTML/CSS</h3>
                      <hr />
                      <p>Text is filled in here with a bunch of it.</p>
                      <a href="https://tyestanley.github.io/password-generator">
                        <Button>website</Button>
                      </a>
                      <a href="https://github.com/TyeStanley/password-generator">
                        <Button>source</Button>
                      </a>
                    </div>

                  </div>
                </div>
              </Box>
            </Modal>
          </div>

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
