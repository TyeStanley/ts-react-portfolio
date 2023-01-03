import React from "react";
import "./portfolio.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLongArrowAltLeft,
  faLongArrowAltRight
} from "@fortawesome/free-solid-svg-icons";

import portfolio from "../../assets/images/portfolio/portfolioOrigin900x800.png";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

function Portfolio() {
  const [navMenu, setNavMenu] = React.useState(false);
  const openMenu = () => {
    const menu = document.querySelector(".smallscreen-nav");
    const backdrop = document.querySelector(".backdrop");
    const backnav = document.querySelector(".backnav");

    const homeIcon = document.querySelector(".homeicon");

    if (!navMenu) {
      setNavMenu(true);
      menu.classList.add("open");
      backdrop.classList.add("backopen");
      backnav.classList.add("backnavopen");
      homeIcon.classList.add("openIcon");
    } else {
      setNavMenu(false);
      menu.classList.remove("open");
      backdrop.classList.remove("backopen");
      backnav.classList.remove("backnavopen");
      homeIcon.classList.remove("openIcon");
    }
  };

  // Mobile portfolio
  const leftArrow = () => {
    const slides = Array.from(document.querySelectorAll(".mobile-slide"));

    let currentSlide;

    function getBlock(slides) {
      for (let i = 0; i < slides.length; i++) {
        if (slides[i].style.display === "block") {
          currentSlide = slides[i];

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

    currentSlide.style.setProperty("display", "none");
    prevSibling.style.setProperty("display", "block");
  };

  const rightArrow = () => {
    const slides = Array.from(document.querySelectorAll(".mobile-slide"));

    let currentSlide = null;

    function getBlock(slides) {
      for (let i = 0; i < slides.length; i++) {
        if (slides[i].style.display === "block") {
          currentSlide = slides[i];

          return currentSlide;
        }
      }
    }

    currentSlide = getBlock(slides);
    let nextSibling = null;

    function getNext(currentSlide, slides) {
      let mobileControls = document.querySelector(".mobile-controls");

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

    currentSlide.style.setProperty("display", "none");
    nextSibling.style.setProperty("display", "block");
  };

  // Portfolio Project
  const [myPortfolio, setMyPortfolio] = React.useState(false);

  const openMyPortfolio = () => {
    setMyPortfolio(true);
  };
  const closeMyPortfolio = () => {
    setMyPortfolio(false);
  };
  // Other projects
  const [nibbler, setNibbler] = React.useState(false);
  const [foodPlanner, setFoodPlanner] = React.useState(false);
  const [techBlog, setTechBlog] = React.useState(false);
  const [weather, setWeather] = React.useState(false);
  const [noteTaker, setNoteTaker] = React.useState(false);
  const [generator, setGenerator] = React.useState(false);

  const openNibbler = () => {
    setNibbler(true);
  };
  const closeNibbler = () => {
    setNibbler(false);
  };

  const openFoodPlanner = () => {
    setFoodPlanner(true);
  };
  const closeFoodPlanner = () => {
    setFoodPlanner(false);
  };

  const openTechBlog = () => {
    setTechBlog(true);
  };
  const closeTechBlog = () => {
    setTechBlog(false);
  };

  const openWeather = () => {
    setWeather(true);
  };
  const closeWeather = () => {
    setWeather(false);
  };

  const openNoteTaker = () => {
    setNoteTaker(true);
  };
  const closeNoteTaker = () => {
    setNoteTaker(false);
  };

  const openGenerator = () => {
    setGenerator(true);
  };
  const closeGenerator = () => {
    setGenerator(false);
  };

  return (
    <div
      id="portfolio"
      className="portfolio"
    >
      <div className="content-nav">
        <h1>Portfolio</h1>
        <Link to="/">
          <div className="homeicon">
            <FontAwesomeIcon
              icon={faHome}
              className="divIcon fa-fw"
            />
          </div>
        </Link>

        <div className="spacer"></div>

        <div className="navbar">
          <div className="bigscreen-nav">
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            {/* <Link to="/resume">Resume</Link> */}
            <Link to="/contact">Contact</Link>
          </div>

          <div
            className="smallscreen-nav"
            onClick={openMenu}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="content-details">
        <div className="portfolio-mobile">
          <div
            className="mobile-slide"
            style={{ display: "block" }}
          >
            <div className="mobile-image">
              <img
                src={require("../../assets/images/portfolio/portfolioOrigin900x800.png")}
                alt="Portfolio"
                onClick={openMyPortfolio}
              />
              <div className="mobile-description">
                <p>React, JavaScript, HTML/CSS</p>
                <h3>Portfolio</h3>
              </div>
            </div>
          </div>

          <div
            className="mobile-slide"
            style={{ display: "none" }}
          >
            <div className="mobile-image">
              <img
                src={require("../../assets/images/portfolio/nibblerOrigin900x800.png")}
                alt="Nibbler"
                onClick={openNibbler}
              />
            </div>
            <div className="mobile-description">
              <p>React, JavaScript, Node, Express, GraphQL, JWT</p>
              <h3>Nibbler</h3>
            </div>
          </div>

          <div
            className="mobile-slide"
            style={{ display: "none" }}
          >
            <div className="mobile-image">
              <img
                src={require("../../assets/images/portfolio/foodPlanner900x800.png")}
                alt="Food Planner"
                onClick={openFoodPlanner}
              />
            </div>
            <div className="mobile-description">
              <p>JavaScript, jQuery, Bulma, HTML/CSS</p>
              <h3>Food Planner</h3>
            </div>
          </div>

          <div
            className="mobile-slide"
            style={{ display: "none" }}
          >
            <div className="mobile-image">
              <img
                src={require("../../assets/images/portfolio/techblogOrigin900x800.png")}
                alt="My Tech Blog"
                onClick={openTechBlog}
              />
            </div>
            <div className="mobile-description">
              <p>JavaScript, Node, Express, mySQL, Handlebars, HTML/CSS</p>
              <h3>My Tech Blog</h3>
            </div>
          </div>

          <div
            className="mobile-slide"
            style={{ display: "none" }}
          >
            <div className="mobile-image">
              <img
                src={require("../../assets/images/portfolio/weatherOrigin900x800.png")}
                alt="Weather Dashboard"
                onClick={openWeather}
              />
            </div>
            <div className="mobile-description">
              <p>JavaScript, jQuery, Bootstrap, HTML/CSS, OpenWeather API</p>
              <h3>Weather Dashboard</h3>
            </div>
          </div>

          <div
            className="mobile-slide"
            style={{ display: "none" }}
          >
            <div className="mobile-image">
              <img
                src={require("../../assets/images/portfolio/noteTaker900x800.png")}
                alt="Note Taker"
                onClick={openNoteTaker}
              />
            </div>
            <div className="mobile-description">
              <p>JavaScript, Node, Express, HTML/CSS</p>
              <h3>Note Taker</h3>
            </div>
          </div>

          <div
            className="mobile-slide"
            style={{ display: "none" }}
          >
            <div className="mobile-image">
              <img
                src={require("../../assets/images/portfolio/passwordOrigin900x800.png")}
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
            <div
              id="left"
              onClick={leftArrow}
            >
              <FontAwesomeIcon
                id="leftArrow"
                icon={faLongArrowAltLeft}
              />
            </div>

            <div className="spacer"></div>

            <div
              id="right"
              onClick={rightArrow}
            >
              <FontAwesomeIcon
                id="rightArrow"
                icon={faLongArrowAltRight}
              />
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
                      <Button onClick={closeMyPortfolio}>Close</Button>
                    </div>
                  </div>

                  <div className="project-container">
                    <div className="project-image">
                      <img
                        src={portfolio}
                        alt="Portfolio"
                      />
                    </div>

                    <div className="project-description">
                      <h2>Portfolio</h2>
                      <h3>React, JavaScript, HTML/CSS, Material UI</h3>
                      <hr />
                      <p>
                        This is my most recent project. It boast a clean look
                        and easy navigation to go through my portfolio pages.
                        It's also built with mobile first approach to support
                        excellent phone compatibility.
                      </p>
                      <a
                        href="https://tyestanley.github.io/ts-react-portfolio"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button>website</Button>
                      </a>
                      <a
                        href="https://github.com/TyeStanley/ts-react-portfolio"
                        target="_blank"
                        rel="noreferrer"
                      >
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
              src={require("../../assets/images/portfolio/nibblerOrigin900x800.png")}
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
                      <Button onClick={closeNibbler}>Close</Button>
                    </div>
                  </div>

                  <div className="project-container">
                    <div className="project-image">
                      <img
                        src={require("../../assets/images/portfolio/nibblerOrigin900x800.png")}
                        alt="Nibbler"
                      />
                    </div>

                    <div className="project-description">
                      <h2>Nibbler</h2>
                      <h3>React, JavaScript, Node, Express, GraphQL, JWT</h3>
                      <hr />
                      <p>
                        The purpose of this project was to build a full-stack
                        MERN application with my team that would create an
                        online social network to directly connect foodies. Users
                        are able to compare restaurants and their dishes as well
                        as reviews and prices in order to find the right
                        restaurant for them.
                      </p>
                      <a
                        href="https://fathomless-peak-48299.herokuapp.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button>website</Button>
                      </a>
                      <a
                        href="https://github.com/TyeStanley/nibbler"
                        target="_blank"
                        rel="noreferrer"
                      >
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
              src={require("../../assets/images/portfolio/foodPlanner900x800.png")}
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
                      <Button onClick={closeFoodPlanner}>Close</Button>
                    </div>
                  </div>

                  <div className="project-container">
                    <div className="project-image">
                      <img
                        src={require("../../assets/images/portfolio/foodPlanner900x800.png")}
                        alt="Food Planner"
                      />
                    </div>

                    <div className="project-description">
                      <h2>Food Planner</h2>
                      <h3>JavaScript, jQuery, Bulma, HTML/CSS</h3>
                      <hr />
                      <p>
                        My team and I developed this website so we can have help
                        enhance the lives of people who don't have time to
                        adequately plan out a weekly meal. With a quick search,
                        you may uncover a plethora of recipes to pick through
                        and create an automatic grocery list that will be texted
                        or sent to you with your selection. Making the
                        forthcoming week go as well as possible.
                      </p>
                      <a
                        href="https://tyestanley.github.io/my-food-planner"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button>website</Button>
                      </a>
                      <a
                        href="https://github.com/TyeStanley/my-food-planner"
                        target="_blank"
                        rel="noreferrer"
                      >
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
              src={require("../../assets/images/portfolio/techblogOrigin900x800.png")}
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
                      <Button onClick={closeTechBlog}>Close</Button>
                    </div>
                  </div>

                  <div className="project-container">
                    <div className="project-image">
                      <img
                        src={require("../../assets/images/portfolio/techblogOrigin900x800.png")}
                        alt="My Tech Blog"
                      />
                    </div>

                    <div className="project-description">
                      <h2>My Tech Blog</h2>
                      <h3>
                        JavaScript, Node, Express, mySQL, Handlebars, HTML/CSS
                      </h3>
                      <hr />
                      <p>
                        This is a sequelize-powered mysql database that houses
                        my tech blog. To publish, comment, and upvote on posts,
                        you must first establish an account. By hashing the
                        passwords, it employs bcrypt to strengthen the site's
                        security. After logging in, the site will take you to
                        the dashboard where you may write new posts and browse
                        those you've already written. The homepage is where you
                        may browse the most current posts and leave comments.
                      </p>
                      <a
                        href="https://tech-blog-by-tye.herokuapp.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button>website</Button>
                      </a>
                      <a
                        href="https://github.com/TyeStanley/my-tech-blog"
                        target="_blank"
                        rel="noreferrer"
                      >
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
              src={require("../../assets/images/portfolio/weatherOrigin900x800.png")}
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
                      <Button onClick={closeWeather}>Close</Button>
                    </div>
                  </div>

                  <div className="project-container">
                    <div className="project-image">
                      <img
                        src={require("../../assets/images/portfolio/weatherOrigin900x800.png")}
                        alt="Weather Dashboard"
                      />
                    </div>

                    <div className="project-description">
                      <h2>Weather Dashboard</h2>
                      <h3>
                        JavaScript, jQuery, Bootstrap, HTML/CSS, OpenWeather API
                      </h3>
                      <hr />
                      <p>
                        This is a simple weather dashboard that displays the
                        current weather conditions for the search that you
                        searched from the search box. It'll also will display a
                        5-Day forecast so you can stay updated! If you want to
                        come back to the weather dashboard your previous cities
                        will persist along with automatically loading up your
                        last searched city.
                      </p>
                      <a
                        href="https://tyestanley.github.io/weather-dashboard"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button>website</Button>
                      </a>
                      <a
                        href="https://github.com/TyeStanley/weather-dashboard"
                        target="_blank"
                        rel="noreferrer"
                      >
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
              src={require("../../assets/images/portfolio/noteTaker900x800.png")}
              alt="Note Taker"
              onClick={openNoteTaker}
            />
            <Modal
              hideBackdrop
              open={noteTaker}
              onClose={closeNoteTaker}
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
            >
              <Box className="modal-container">
                <div className="modal-content">
                  <div className="close-box">
                    <div className="spacer"></div>
                    <div className="close-icon">
                      <Button onClick={closeNoteTaker}>Close</Button>
                    </div>
                  </div>

                  <div className="project-container">
                    <div className="project-image">
                      <img
                        src={require("../../assets/images/portfolio/noteTaker900x800.png")}
                        alt="Note Taker"
                      />
                    </div>

                    <div className="project-description">
                      <h2>Note Taker</h2>
                      <h3>JavaScript, Node, Express, HTML/CSS</h3>
                      <hr />
                      <p>
                        This is a simple note taker that can be used to write
                        and save notes. This application is using Express.js
                        back end to save and retrieve your notes from a JSON
                        file to display them on screen. It's always on a good
                        note to have a handy application like this one!
                      </p>
                      <a
                        href="https://tye-note-taker.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button>website</Button>
                      </a>
                      <a
                        href="https://github.com/TyeStanley/note-taker"
                        target="_blank"
                        rel="noreferrer"
                      >
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
              src={require("../../assets/images/portfolio/passwordOrigin900x800.png")}
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
                      <Button onClick={closeGenerator}>Close</Button>
                    </div>
                  </div>

                  <div className="project-container">
                    <div className="project-image">
                      <img
                        src={require("../../assets/images/portfolio/passwordOrigin900x800.png")}
                        alt="Password Generator"
                      />
                    </div>

                    <div className="project-description">
                      <h2>Password Generator</h2>
                      <h3>JavaScript, HTML/CSS</h3>
                      <hr />
                      <p>
                        This is a simple complete random password generator that
                        can generate any password length between 8 and 128. You
                        can choose between having lowercase, uppercase, numbers
                        and even have special characters in your password!
                      </p>
                      <a
                        href="https://tyestanley.github.io/password-generator"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button>website</Button>
                      </a>
                      <a
                        href="https://github.com/TyeStanley/password-generator"
                        target="_blank"
                        rel="noreferrer"
                      >
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
            <Link
              className="navItem"
              to="/about"
            >
              About
            </Link>
            <Link
              className="navItem active"
              to="/portfolio"
            >
              Portfolio
            </Link>
            {/* <Link
              className="navItem"
              to="/resume"
            >
              Resume
            </Link> */}
            <Link
              className="navItem"
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
