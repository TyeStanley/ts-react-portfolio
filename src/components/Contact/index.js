import React, { useState } from 'react';
import "./contact.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import Box from '@mui/material/Box';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Contact() {

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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    if (event.target.value === name) {
    setName(event.target.value);
    }
    console.log(event.target === name)
  };

  return (
    <div id="contact" class="contact">

      <div className="content-nav">
        <h1>Contact</h1>
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
      <div className="contact-details">
        <h2>Send me a message!</h2>
        <div className="contact-form">
          <form>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1 },
                
              }}
              noValidate
              autoComplete="off"
            >
              <FormControl fullWidth>
                <InputLabel htmlFor="name-input">Name</InputLabel>
                <OutlinedInput
                  id="name-input"
                  value={name}
                  onChange={handleChange}
                  label="Name"
                />
              </FormControl>
            </Box>

            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <FormControl fullWidth>
                <InputLabel htmlFor="email-input">Email</InputLabel>
                <OutlinedInput
                  id="email-input"
                  value={email}
                  onChange={handleChange}
                  label="Name"
                />
              </FormControl>
            </Box>
          
            <TextField 
              sx={{
                '& > :not(style)': { m: 1 },
              }}
              id="message-input" 
              label="Message" 
              variant="outlined" 
              multiline
              rows={7}
              fullWidth
            />
          
            <Button
              sx={{
                '& > :not(style)': { m: 1 },
                marginTop: 2,
                paddingRight: 1,
                paddingTop: 0,
                paddingBottom: 0,
              }}
              variant="contained"
              color="primary"
              size="meduim"
              endIcon={<SendIcon />}
            > 
              send
            </Button>

          </form>
        </div>
        
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>Email: tyestanley090@gmail.com</p>
        </div>

      </div>
    </div>



      <div className="backdrop">
        <div className="backnav">
          <div className="navigator">
            <Link class="navItem" to="/ts-react-portfolio/about">About</Link>
            <Link class="navItem" to="/ts-react-portfolio/portfolio">Portfolio</Link>
            <Link class="navItem" to="/ts-react-portfolio/resume">Resume</Link>
            <Link class="navItem active" to="/ts-react-portfolio/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
