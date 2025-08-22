import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const goToCV = () => {
    navigate('/cv');
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-dark-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-subtle">
              <span className="text-white font-semibold text-sm">JD</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg text-text-primary">John Doe</span>
              <span className="text-xs text-primary font-medium tracking-wide">Engineer</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium text-sm tracking-wide"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('engineering')}
              className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium text-sm tracking-wide"
            >
              Engineering
            </button>
            <button
              onClick={() => scrollToSection('software')}
              className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium text-sm tracking-wide"
            >
              Software
            </button>
            <button
              onClick={() => scrollToSection('cybersecurity')}
              className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium text-sm tracking-wide"
            >
              Cybersecurity
            </button>
            <Button 
              onClick={goToCV}
              className="bg-primary hover:bg-primary-dark transition-all duration-300 shadow-subtle hover:shadow-elevated hover:-translate-y-0.5"
            >
              View CV
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-dark-card/50 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-border/50 bg-dark-surface/80 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-text-secondary hover:text-primary transition-colors duration-300 font-medium py-2 text-sm tracking-wide"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('engineering')}
                className="text-left text-text-secondary hover:text-primary transition-colors duration-300 font-medium py-2 text-sm tracking-wide"
              >
                Engineering
              </button>
              <button
                onClick={() => scrollToSection('software')}
                className="text-left text-text-secondary hover:text-primary transition-colors duration-300 font-medium py-2 text-sm tracking-wide"
              >
                Software
              </button>
              <button
                onClick={() => scrollToSection('cybersecurity')}
                className="text-left text-text-secondary hover:text-primary transition-colors duration-300 font-medium py-2 text-sm tracking-wide"
              >
                Cybersecurity
              </button>
              <Button 
                onClick={goToCV}
                className="w-full bg-primary hover:bg-primary-dark transition-all duration-300 shadow-subtle"
              >
                View CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
