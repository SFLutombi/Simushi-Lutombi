import React from 'react';
import Button from './ui/button';
import { Card, CardContent } from './ui/card';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-subtle-gradient pt-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Profile Picture */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Main profile circle */}
              <div className="w-80 h-80 rounded-full bg-dark-card border border-dark-border/50 relative overflow-hidden shadow-elevated">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-bold text-text-muted">👨‍💻</div>
                </div>
                
                {/* Subtle accent ring */}
                <div className="absolute inset-4 rounded-full border border-primary/20"></div>
              </div>
              
              {/* Professional accent */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-elevated">
                <span className="text-white text-2xl">⚡</span>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left">
            <Card className="glass border-dark-border/30 shadow-subtle">
              <CardContent className="p-0">
                {/* Name with professional styling */}
                <div className="mb-8">
                  <h1 className="text-display text-text-primary mb-4 font-sf">
                    John Doe
                  </h1>
                  <div className="w-24 h-0.5 bg-primary rounded-full mx-auto lg:mx-0"></div>
                </div>
                
                {/* Title */}
                <h2 className="text-heading text-primary mb-8 font-sf">
                  Software Engineer & Cybersecurity Specialist
                </h2>
                
                {/* Description */}
                <p className="text-body mb-10 max-w-2xl">
                  Passionate about creating innovative solutions that bridge the gap between 
                  engineering excellence and cutting-edge technology. I specialize in full-stack 
                  development, cybersecurity, and building robust systems that solve real-world problems.
                </p>
                
                {/* Skills with professional styling */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  <span className="px-4 py-2 bg-dark-card border border-primary/20 text-primary rounded-lg text-sm font-medium hover:border-primary/40 transition-colors duration-300">
                    React
                  </span>
                  <span className="px-4 py-2 bg-dark-card border border-secondary/20 text-secondary rounded-lg text-sm font-medium hover:border-secondary/40 transition-colors duration-300">
                    Node.js
                  </span>
                  <span className="px-4 py-2 bg-dark-card border border-accent/20 text-accent rounded-lg text-sm font-medium hover:border-accent/40 transition-colors duration-300">
                    Python
                  </span>
                  <span className="px-4 py-2 bg-dark-card border border-danger/20 text-danger rounded-lg text-sm font-medium hover:border-danger/40 transition-colors duration-300">
                    Cybersecurity
                  </span>
                  <span className="px-4 py-2 bg-dark-card border border-warning/20 text-warning rounded-lg text-sm font-medium hover:border-warning/40 transition-colors duration-300">
                    AWS
                  </span>
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary-dark transition-all duration-300 shadow-subtle hover:shadow-elevated hover:-translate-y-0.5 font-medium"
                  >
                    View Projects
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 font-medium"
                  >
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
