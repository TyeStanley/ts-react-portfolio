import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {  faUser, faBriefcase, faGraduationCap, faEnvelope } from '@fortawesome/free-solid-svg-icons'

  // library.add(fab)


function App() {

  // JavaScript goes goes here

  return (
    <div className="App">
      <div>

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
              <div className="home-button pointer">
                <FontAwesomeIcon icon={faUser} className="fa-fw" />
                {' '}About
              </div>
              <div className="home-button pointer">
                <FontAwesomeIcon icon={faBriefcase} className="fa-fw" />
                {' '}Portfolio
              </div>
              <div className="home-button pointer">
                <FontAwesomeIcon icon={faGraduationCap} className="fa-fw" />
                {' '}Resume
              </div>
              <div className="home-button hidden-button"></div>
              <div className="home-button pointer">
                <FontAwesomeIcon icon={faEnvelope} className="fa-fw" />
                {' '}Contact
              </div>
            </div>

            <div className="home-social">
              <div className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className="fa-2xl" />
              </div>
              <div className="social-icon">
                <FontAwesomeIcon icon={faGithub} className="fa-2xl" />
              </div>
              <div className="social-icon">
                <FontAwesomeIcon icon={faStackOverflow} className="fa-2xl" />
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
