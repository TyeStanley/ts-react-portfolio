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
              path="/about"
              element={<About />}
            />
            <Route
              path="/portfolio"
              element={<Portfolio />}
            />
            <Route
              path="/resume"
              element={<Resume />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
