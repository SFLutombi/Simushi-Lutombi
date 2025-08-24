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
              <h1 className="text-6xl font-bold text-primary tracking-tight">SFL</h1>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-medium text-secondary mb-2">Hello, I'm Simushi Fortune Lutombi</h2>
                <h3 className="text-5xl font-bold text-primary mb-6">Engineering Student & Builder</h3>
              </div>
              
              <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
                I'm an engineering student pursuing a Mechatronics Degree at UCT. I believe in the
                interconnectedness of different fields and the value of being a versatile problem
                solver. By exploring a broad range of disciplines, I aim to bridge gaps between
                ideas, teams, and technologies.
              </p>
            </div>
          </div>

          {/* Right side - Portrait Image */}
          <div className="flex-1 flex justify-center items-center relative">
            <div className="relative">
              {/* Circular Portrait */}
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-elevated border-4 border-white">
                <img 
                  src="/portrait.jpg" 
                  alt="Simushi Fortune Lutombi" 
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
              
              {/* Subtle accent ring */}
              <div className="absolute inset-4 rounded-full border-2 border-primary/20"></div>
              
              {/* Professional accent */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-accent rounded-full flex items-center justify-center shadow-elevated">
                <span className="text-white text-3xl">🎯</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right - Call to Action Button */}
        <div className="absolute bottom-16 right-10">
          <Button 
            size="lg" 
            className="w-64 h-14 btn-primary text-base uppercase tracking-wide rounded-full rotate-2 shadow-elevated shadow-primary-glow"
          >
            get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
