import React from 'react';
import "./portfolio.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

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

  return (
    <div id="portfolio" class="portfolio">

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

      <div className="backdrop">
        <div className="backnav">
          <div className="navigator">
            <Link class="navItem" to="/ts-react-portfolio/about">About</Link>
            <Link class="navItem" to="/ts-react-portfolio/portfolio">Portfolio</Link>
            <Link class="navItem" to="/ts-react-portfolio/resume">Resume</Link>
            <Link class="navItem" to="/ts-react-portfolio/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
