import React from 'react';
import "./about.css";
import me from '../../assets/images/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';


function About() {
  // Front-end button modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // Back-end button modal
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

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

  // style for modal
  const style = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    border: '2px solid #000',
    textAlign: 'center',
    pt: 50,
    px: 7,
    pb: 4,
    opacity: 0.98,
    
  };

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
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
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

          <Button onClick={handleOpen}>Front-End</Button>
          <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box sx={ style } className="modal-content">

              <div className="frontend">

                <h1 className="modal-title">Front-End</h1>

                <div className="about-underline"></div>

                <div className="frontend-description">
                  <strong>React, jQuery, Material UI, Bootstrap, CSS</strong>
                </div>

                <p>
                  I am a Full-Stack Developer, who focuses on the MERN Stack.
                  React is my favorite framework for designing because of its
                  seperation of concerns and efficiency it provides. I'm a fan of
                  performance and optimization to make sites run great!
                </p>

                <div className="close-box">
                  <Button 
                    onClick={handleClose}
                    sx={{ 
                      color: '#000', 
                      bgcolor: '#FDFD96', 
                      border: '1px solid #000'
                    
                    }}
                    className="close-icon"
                  >
                    <strong>close</strong>
                  </Button>
                </div>

              </div>

            </Box>
          </Modal>

          <Button onClick={handleOpen2}>Back-End</Button>
          <Modal
            hideBackdrop
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box sx={ style } className="modal-content">

              <div className="frontend">

                <h1 className="modal-title">Back-End</h1>

                <div className="about-underline"></div>

                <div className="frontend-description">
                  <strong>Node.js, Express, MongoDB, mySQL, REST, GraphQL</strong>
                </div>

                <p>
                  I think that without a solid back-end foundation, you cannot succeed 
                  as a great front-end developer. I prefer utilizing Node.js framework 
                  to develop Restful Api and apply it to my back-end projects. I have knowledge
                  to utilize GraphQL, PWA and I'm excited to learn about other new back-end 
                  technology!
                </p>

                <div className="close-box">
                  <Button 
                    onClick={handleClose2}
                    sx={{ 
                      color: '#000', 
                      bgcolor: '#FDFD96', 
                      border: '1px solid #000',
                    }}
                    className="close-icon"
                  >
                    <strong>close</strong>
                  </Button>
                </div>

              </div>

            </Box>
          </Modal>

        </div>

      </div>

      <div className="backdrop">
        <div className="backnav">
          <div className="navigator">
            <Link class="navItem" to="/about">About</Link>
            <Link class="navItem" to="/portfolio">Portfolio</Link>
            <Link class="navItem" to="/resume">Resume</Link>
            <Link class="navItem" to="/contact">Contact</Link>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About;
