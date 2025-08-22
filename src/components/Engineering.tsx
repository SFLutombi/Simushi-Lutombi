import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import Button from './ui/button';

const Engineering: React.FC = () => {
  const bentoProjects = [
    {
      title: "Smart Home Automation",
      description: "IoT-based home control system",
      icon: "🏠",
      color: "border-primary/20 text-primary",
      hoverColor: "hover:border-primary/40"
    },
    {
      title: "Drone Navigation",
      description: "Autonomous flight control algorithms",
      icon: "🚁",
      color: "border-accent/20 text-accent",
      hoverColor: "hover:border-accent/40"
    },
    {
      title: "Robotic Arm",
      description: "Precision control system",
      icon: "🤖",
      color: "border-secondary/20 text-secondary",
      hoverColor: "hover:border-secondary/40"
    },
    {
      title: "Solar Panel Tracker",
      description: "Maximum efficiency optimization",
      icon: "☀️",
      color: "border-warning/20 text-warning",
      hoverColor: "hover:border-warning/40"
    },
    {
      title: "Water Quality Monitor",
      description: "Real-time sensor network",
      icon: "💧",
      color: "border-primary/20 text-primary",
      hoverColor: "hover:border-primary/40"
    },
    {
      title: "Smart Grid Controller",
      description: "Energy distribution optimization",
      icon: "⚡",
      color: "border-accent/20 text-accent",
      hoverColor: "hover:border-accent/40"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-subtle">
              <span className="text-white font-semibold text-sm">⚙️</span>
            </div>
            <h2 className="text-heading text-text-primary font-sf">Engineering</h2>
          </div>
          <div className="w-20 h-0.5 bg-primary rounded-full mx-auto mb-8"></div>
          <p className="text-body max-w-4xl mx-auto text-text-secondary">
            Engineering is where it all starts for me. It’s hands-on problem solving, taking big
            ideas and turning them into things that move, work, and make sense. From mechanical
            design to electronics, I enjoy figuring out how each part of a system talks to the
            others and how to make it all run smoothly.
          </p>
        </div>

        {/* Featured Project */}
        <div className="grid lg:grid-cols-2 gap-20 mb-24 items-center">
          <div className="order-2 lg:order-1">
            <Card className="bg-card-bg border-border-light shadow-subtle hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-3xl font-semibold text-text-primary font-sf mb-3">
                  Autonomous Vehicle Control System
                </CardTitle>
                <CardDescription className="text-lg text-primary font-medium">
                  Advanced driver assistance and autonomous navigation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-text-secondary">
                  Developed a comprehensive autonomous vehicle control system that integrates 
                  computer vision, sensor fusion, and machine learning algorithms. The system 
                  provides real-time obstacle detection, path planning, and vehicle control 
                  for safe autonomous navigation.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-gray-50 border border-primary/20 text-primary rounded-lg text-sm font-medium">
                    Computer Vision
                  </span>
                  <span className="px-3 py-1 bg-gray-50 border border-accent/20 text-accent rounded-lg text-sm font-medium">
                    Machine Learning
                  </span>
                  <span className="px-3 py-1 bg-gray-50 border border-secondary/20 text-secondary rounded-lg text-sm font-medium">
                    ROS
                  </span>
                  <span className="px-3 py-1 bg-gray-50 border border-danger/20 text-danger rounded-lg text-sm font-medium">
                    Python
                  </span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary-dark transition-all duration-300 shadow-subtle hover:shadow-elevated hover:-translate-y-0.5 font-medium">
                  View Project Details
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="w-full h-96 bg-gray-50 border border-border-light rounded-2xl flex items-center justify-center relative overflow-hidden shadow-elevated">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                <div className="text-8xl relative z-10">🚗</div>
                
                {/* Subtle accent ring */}
                <div className="absolute inset-4 rounded-2xl border border-primary/20"></div>
              </div>
              
              {/* Professional accent */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-accent rounded-full flex items-center justify-center shadow-elevated">
                <span className="text-white text-3xl">🎯</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {bentoProjects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-card-bg border-border-light group cursor-pointer hover:shadow-elevated ${project.hoverColor} transition-all duration-300`}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 bg-gray-50 border ${project.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  <span className="text-3xl">{project.icon}</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-2 font-sf">{project.title}</h3>
                <p className="text-sm text-text-secondary">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engineering;
