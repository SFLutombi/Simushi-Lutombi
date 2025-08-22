import React from 'react';
import Button from './ui/button';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-bg-light bg-grid bg-grid relative overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-6 pt-10 relative z-10">
        <div className="flex items-center justify-between min-h-[calc(100vh-6rem)]">
          
          {/* Left side - Logo and Content */}
          <div className="flex-1 max-w-2xl">
            {/* Logo */}
            <div className="mb-16">
              <h1 className="text-6xl font-bold text-primary tracking-tight">LUTOMBI</h1>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-medium text-secondary mb-2">Simushi Fortune Lutombi</h2>
                <h3 className="text-5xl font-bold text-primary mb-6">Engineering Student & Builder</h3>
              </div>
              
              <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
                I’m an engineering student pursuing a Mechatronics Degree at UCT. I believe in the
                interconnectedness of different fields and the value of being a versatile problem
                solver. By exploring a broad range of disciplines, I aim to bridge gaps between
                ideas, teams, and technologies.
              </p>
            </div>
          </div>

          {/* Right side - Spray Paint Can */}
          <div className="flex-1 flex justify-center items-center relative">
            <div className="relative transform rotate-12">
              {/* Spray Paint Can */}
              <div className="w-80 h-96 relative">
                {/* Can Body */}
                <div className="absolute inset-0 bg-primary rounded-t-3xl rounded-b-2xl shadow-elevated">
                  {/* Can texture and details */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-t-3xl rounded-b-2xl"></div>
                  
                  {/* Metallic top rim */}
                  <div className="absolute top-0 left-4 right-4 h-3 bg-gray-300 rounded-t-3xl"></div>
                  
                  {/* Metallic bottom rim */}
                  <div className="absolute bottom-0 left-4 right-4 h-3 bg-gray-300 rounded-b-2xl"></div>
                  
                  {/* "OK" text on can */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <span className="text-8xl font-bold tracking-wider">O</span>
                    <span className="text-8xl font-bold tracking-wider -mt-4">K</span>
                  </div>
                  
                  {/* Paint splatter texture */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-8 left-8 w-4 h-4 bg-white rounded-full"></div>
                    <div className="absolute top-16 right-12 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute bottom-20 left-16 w-3 h-3 bg-white rounded-full"></div>
                    <div className="absolute bottom-12 right-8 w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                
                {/* Nozzle */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-12 bg-primary rounded-t-full"></div>
                </div>
                
                {/* Shadow */}
                <div className="absolute -bottom-4 left-8 right-8 h-4 bg-black/10 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right - Call to Action Buttons */}
        <div className="absolute bottom-12 right-6 space-y-4">
          <Button 
            size="lg" 
            className="w-48 btn-secondary text-sm uppercase tracking-wide"
          >
            get in touch
          </Button>
          <Button 
            size="lg" 
            className="w-48 btn-primary text-sm uppercase tracking-wide"
          >
            let's get started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
