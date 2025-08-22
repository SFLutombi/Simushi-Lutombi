import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Engineering from './components/Engineering';
import SoftwareDevelopment from './components/SoftwareDevelopment';
import CyberSecurity from './components/CyberSecurity';
import CV from './components/CV';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-light">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div id="hero">
                <Hero />
              </div>
              <div id="engineering">
                <Engineering />
              </div>
              <div id="software">
                <SoftwareDevelopment />
              </div>
              <div id="cybersecurity">
                <CyberSecurity />
              </div>
            </>
          } />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
