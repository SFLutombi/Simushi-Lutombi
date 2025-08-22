import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Engineering: React.FC = () => {
  const bentoProjects = [
    {
      title: "Smart Home Automation",
      description: "IoT-based home control system",
      icon: "🏠",
      color: "bg-blue-500"
    },
    {
      title: "Drone Navigation",
      description: "Autonomous flight control algorithms",
      icon: "🚁",
      color: "bg-green-500"
    },
    {
      title: "Robotic Arm",
      description: "Precision control system",
      icon: "🤖",
      color: "bg-purple-500"
    },
    {
      title: "Solar Panel Tracker",
      description: "Maximum efficiency optimization",
      icon: "☀️",
      color: "bg-yellow-500"
    },
    {
      title: "Water Quality Monitor",
      description: "Real-time sensor network",
      icon: "💧",
      color: "bg-cyan-500"
    },
    {
      title: "Smart Grid Controller",
      description: "Energy distribution optimization",
      icon: "⚡",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Engineering</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative engineering solutions that combine creativity with technical excellence. 
            From automation to renewable energy, each project represents a step forward in 
            technological advancement.
          </p>
        </div>

        {/* Featured Project */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="order-2 lg:order-1">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Autonomous Vehicle Control System
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Advanced driver assistance and autonomous navigation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Developed a comprehensive autonomous vehicle control system that integrates 
                  computer vision, sensor fusion, and machine learning algorithms. The system 
                  provides real-time obstacle detection, path planning, and vehicle control 
                  for safe autonomous navigation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Computer Vision
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Machine Learning
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    ROS
                  </span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                    Python
                  </span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  View Project Details
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center">
                <div className="text-8xl">🚗</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-4xl">🎯</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {bentoProjects.map((project, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${project.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{project.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engineering;
