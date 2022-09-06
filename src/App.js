import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

import CoverPage from "./components/CoverPage"
import About from "./components/About"


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
              path="about"
              element={<About />}
            />
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
