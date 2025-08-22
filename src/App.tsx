import React from 'react';
import Hero from './components/Hero';
import Engineering from './components/Engineering';
import SoftwareDevelopment from './components/SoftwareDevelopment';
import CyberSecurity from './components/CyberSecurity';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Engineering />
      <SoftwareDevelopment />
      <CyberSecurity />
    </div>
  );
}

export default App;
