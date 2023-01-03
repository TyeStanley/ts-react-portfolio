import "./coverPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faBriefcase,
  // faGraduationCap,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CoverPage() {
  return (
    <section id="home">
      <div className="home">
        <div className="home-dev">
          <p>Full-Stack Developer</p>
        </div>

        <div className="home-name">
          <h1>TYE STANLEY</h1>
        </div>

        <div className="underline"></div>

        <div className="home-buttons">
          <Link
            className="home-link"
            to="/about"
          >
            <div className="home-button pointer">
              <FontAwesomeIcon
                icon={faUser}
                className="fa-fw"
              />{" "}
              About
            </div>
          </Link>

          <div className="home-button pointer">
            <Link
              className="home-link"
              to="/portfolio"
            >
              <FontAwesomeIcon
                icon={faBriefcase}
                className="fa-fw"
              />{" "}
              Portfolio
            </Link>
          </div>

          {/* <div className="home-button pointer">
            <Link
              className="home-link"
              to="/resume"
            >
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="fa-fw"
              />{" "}
              Resume
            </Link>
          </div> */}

          {/* <div className="home-button hidden-button"></div> */}

          <div className="home-button pointer">
            <Link
              className="home-link"
              to="/contact"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="fa-fw"
              />{" "}
              Contact
            </Link>
          </div>
        </div>

        <div className="home-social">
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/tye-stanley/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="fa-2xl"
              />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://github.com/TyeStanley"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="fa-2xl"
              />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://stackoverflow.com/users/17858669/tye-stanley"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faStackOverflow}
                className="fa-2xl"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoverPage;
