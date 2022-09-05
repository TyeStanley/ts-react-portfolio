import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
  import { fab } from '@fortawesome/free-brands-svg-icons'
  import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

  library.add(fab, faCheckSquare, faCoffee)


function App() {

  // JavaScript goes goes here

  return (
    <div className="App">
      <div>

        <section id="home">
          <div class="home">

            <div class="home-dev">
              <p>Full-Stack Developer</p>
            </div>

            <div class="home-name">
              <h1>TYE STANLEY</h1>
            </div>

            <div class="underline"></div>

            <div class="home-buttons">
              <div class="home-button pointer">About</div>
              <div class="home-button pointer">Portfolio</div>
              <div class="home-button pointer">Resume</div>
              <div class="home-button hidden-button"></div>
              <div class="home-button pointer">Contact</div>
              
            </div>

            <div class="home-social">
              <div class="social-icon">
                <FontAwesomeIcon icon="fab fa-linkedin-in" className="m-1 fa-2xl"></FontAwesomeIcon>
              </div>
                <div class="social-icon">
                <FontAwesomeIcon icon={faGithub} className="m-1 fa-2xl"></FontAwesomeIcon>
                </div>
              <div class="social-icon">
                <FontAwesomeIcon icon={faStackOverflow} className="m-1 fa-2xl"></FontAwesomeIcon>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
