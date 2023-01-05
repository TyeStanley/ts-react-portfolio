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
            // * When adding more projects change this number to the number of projects added
            prevSibling = slides[7];
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
  const [tesla, setTesla] = React.useState(false);
  // const [leagueApi, setLeagueApi] = React.useState(false);
  const [nibbler, setNibbler] = React.useState(false);
  const [foodPlanner, setFoodPlanner] = React.useState(false);
  const [techBlog, setTechBlog] = React.useState(false);
  const [weather, setWeather] = React.useState(false);
  const [noteTaker, setNoteTaker] = React.useState(false);
  const [generator, setGenerator] = React.useState(false);

  const openTesla = () => {
    setTesla(true);
  };
  const closeTesla = () => {
    setTesla(false);
  };

  // const openLeagueApi = () => {
  //   setLeagueApi(true);
  // };
  // const closeLeagueApi = () => {
  //   setLeagueApi(false);
  // };

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
                src={require("../../assets/images/portfolio/teslaWebsite.png")}
                alt="Tesla Website Clone"
                onClick={openTesla}
              />
              <div className="mobile-description">
                <p>React, Nextjs, Tailwind CSS</p>
                <h3>Tesla Website Clone</h3>
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
                        Welcome to my most recent project! I am proud to present
                        a clean and easy-to-navigate website featuring my
                        portfolio. With a mobile-first design, this website
                        offers excellent compatibility with phones and other
                        portable devices. Thank you for visiting and I hope you
                        enjoy exploring the site.
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
              src={require("../../assets/images/portfolio/teslaWebsite.png")}
              alt="Tesla Clone Website"
              onClick={openTesla}
            />
            <Modal
              hideBackdrop
              open={tesla}
              onClose={closeTesla}
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
            >
              <Box className="modal-container">
                <div className="modal-content">
                  <div className="close-box">
                    <div className="spacer"></div>
                    <div className="close-icon">
                      <Button onClick={closeTesla}>Close</Button>
                    </div>
                  </div>

                  <div className="project-container">
                    <div className="project-image">
                      <img
                        src={require("../../assets/images/portfolio/teslaWebsite.png")}
                        alt="Tesla Website Clone"
                      />
                    </div>

                    <div className="project-description">
                      <h2>Tesla Website Clone</h2>
                      <h3>React, Nextjs, Tailwind CSS</h3>
                      <hr />
                      <p>
                        This website is a clone of the Tesla website and is
                        currently under development. However, I have made it
                        available for viewing. I am working to ensure that all
                        features and functionality on the site mimic the
                        behavior of the original Tesla website as closely as
                        possible. Thank you for your interest in the site!
                      </p>
                      <a
                        href="https://tesla-website-clone-blue.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button>website</Button>
                      </a>
                      <a
                        href="https://github.com/TyeStanley/tesla-website-clone"
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
                        Our team set out to create an online social network for
                        foodies with the goal of connecting people who love
                        food. We built a full-stack MERN application to allow
                        users to compare restaurants and dishes, read reviews,
                        and view prices to find the perfect restaurant for their
                        needs. We hope that our platform will help food
                        enthusiasts connect and make informed dining decisions.
                        (Team Project)
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
                        We developed this website to help busy individuals plan
                        their weekly meals with ease. With a simple search, you
                        can discover a wide variety of recipes to choose from
                        and generate a grocery list that will be sent to you via
                        text or email based on your selected recipes. Our goal
                        is to make the upcoming week as seamless and stress-free
                        as possible by helping you plan and prepare your meals
                        in advance. (Team Project)
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
                        Welcome to my tech blog powered by a Sequelize-enabled
                        MySQL database. To participate in the community by
                        publishing, commenting, and upvoting on posts, you must
                        first create an account. For added security, we use
                        bcrypt to hash passwords. Once you are logged in, you
                        can access the dashboard to write new posts and view the
                        ones you have previously written. The homepage is where
                        you can browse the latest posts and leave comments.
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
                        Welcome to my weather dashboard! Here, you can search
                        for and view the current weather conditions for any
                        location. The dashboard also provides a 5-day forecast
                        to help you stay up to date. Your previous search
                        history will be saved, allowing you to easily access
                        your frequently viewed cities and automatically loading
                        up your last searched city when you return to the
                        dashboard.
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
                        Welcome to my simple note-taking application! This tool
                        allows you to write and save notes using Express.js on
                        the back end to store and retrieve them from a JSON
                        file. Whether you need to jot down ideas, create to-do
                        lists, or just keep track of important information, this
                        application is an essential tool to have on hand. Thanks
                        for using it!
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
                        Welcome to my complete random password generator! With
                        this tool, you can generate a password of any length
                        between 8 and 128 characters. You can customize your
                        password by choosing to include lowercase letters,
                        uppercase letters, numbers, and special characters.
                        Simply select your desired options and let the generator
                        create a secure and unique password for you.
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
