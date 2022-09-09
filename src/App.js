import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

import CoverPage from "./components/CoverPage";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {

  // JavaScript goes goes here

  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={<CoverPage />}
            />
            <Route
              path="/ts-react-portfolio/about"
              element={<About />}
            />
            <Route
              path="/ts-react-portfolio/portfolio"
              element={<Portfolio />}
            />
            <Route
              path="/ts-react-portfolio/resume"
              element={<Resume />}
            />
            <Route
              path="/ts-react-portfolio/contact"
              element={<Contact />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
