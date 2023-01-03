import React, { useEffect, useState } from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  validateName,
  validateEmail,
  validateMessage
} from "../../utils/helpers";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { SendEmail } from "../../API";

function Contact() {
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Error
  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [messageError, setMessageError] = useState();

  const [send, setSend] = useState();

  useEffect(() => {
    // VALIDATION
    validateName({ name, setNameError });
    validateEmail({ email, setEmailError });
    validateMessage({ message, setMessageError });

    if (send) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [name, email, message, send]);

  const submitHandler = e => {
    e.preventDefault();

    if (
      !nameError &&
      !emailError &&
      !messageError &&
      name !== "" &&
      email !== "" &&
      message !== ""
    ) {
      SendEmail({ name, email, message, setSend });
    }
  };

  return (
    <div
      id="contact"
      class="contact"
    >
      <div className="content-nav">
        <h1>Contact</h1>
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
        <div className="contact-details">
          <h2>Send me a message!</h2>
          <div className="contact-container">
            <form onSubmit={submitHandler}>
              <Box
                sx={{
                  "& > :not(style)": { m: 1 }
                }}
              >
                <FormControl
                  fullWidth
                  required
                >
                  <InputLabel
                    required
                    htmlFor="name-input"
                  >
                    Name
                  </InputLabel>
                  <OutlinedInput
                    id="name-input"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    label="Name"
                    required
                  />
                  <FormHelperText
                    id="my-helper-text"
                    sx={{ color: "#d8364c" }}
                  >
                    {nameError}
                  </FormHelperText>
                </FormControl>
              </Box>

              <Box
                sx={{
                  "& > :not(style)": { m: 1 }
                }}
              >
                <FormControl
                  fullWidth
                  required
                >
                  <InputLabel htmlFor="email-input">Email</InputLabel>
                  <OutlinedInput
                    id="email-input"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    label="Name"
                    required
                  />
                  <FormHelperText
                    id="my-helper-text"
                    sx={{ color: "#d8364c" }}
                  >
                    {emailError}
                  </FormHelperText>
                </FormControl>
              </Box>

              <FormControl fullWidth>
                <TextField
                  sx={{
                    "& > :not(style)": { m: 1 }
                  }}
                  id="message-input"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  label="Message"
                  variant="outlined"
                  min="5"
                  max="24"
                  required
                  multiline
                  rows={7}
                  fullWidth
                />
                <FormHelperText
                  id="my-helper-text"
                  sx={{ color: "#d8364c", paddingLeft: 1.5 }}
                >
                  {messageError}
                </FormHelperText>
              </FormControl>
              <FormControl className="center">
                <Button
                  sx={{
                    "& > :not(style)": { m: 1 },
                    marginTop: 2,
                    paddingRight: 1,
                    paddingTop: 0,
                    paddingBottom: 0
                  }}
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="meduim"
                  endIcon={<SendIcon />}
                >
                  send
                </Button>
              </FormControl>

              <p style={{ color: "green", marginTop: 5 }}>
                {send ? "Message has been successfully sent!" : ""}
              </p>
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
            <Link
              class="navItem"
              to="/about"
            >
              About
            </Link>
            <Link
              class="navItem"
              to="/portfolio"
            >
              Portfolio
            </Link>
            {/* <Link class="navItem" to="/resume">Resume</Link> */}
            <Link
              class="navItem active"
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

export default Contact;
