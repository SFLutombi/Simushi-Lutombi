import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SoftwareDevelopment: React.FC = () => {
  const bentoProjects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack online shopping solution",
      icon: "🛒",
      color: "bg-indigo-500"
    },
    {
      title: "Task Management App",
      description: "Collaborative project organization",
      icon: "📋",
      color: "bg-emerald-500"
    },
    {
      title: "Real-time Chat",
      description: "WebSocket-based messaging",
      icon: "💬",
      color: "bg-pink-500"
    },
    {
      title: "Data Visualization",
      description: "Interactive charts and graphs",
      icon: "📊",
      color: "bg-amber-500"
    },
    {
      title: "API Gateway",
      description: "Microservices orchestration",
      icon: "🔗",
      color: "bg-teal-500"
    },
    {
      title: "Mobile App",
      description: "Cross-platform development",
      icon: "📱",
      color: "bg-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Software Development</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building scalable, user-centric applications that solve complex problems. 
            From web applications to mobile apps, each project demonstrates clean code, 
            modern architecture, and exceptional user experience.
          </p>
        </div>

        {/* Featured Project */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="order-1">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl flex items-center justify-center">
                <div className="text-8xl">💻</div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-4xl">⚡</span>
              </div>
            </div>
          </div>

          <div className="order-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  AI-Powered Learning Platform
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Personalized education with machine learning
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Developed a comprehensive learning management system that uses artificial 
                  intelligence to personalize educational content for each student. The platform 
                  features adaptive learning paths, real-time progress tracking, and intelligent 
                  content recommendations based on learning patterns.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    TensorFlow
                  </span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                    MongoDB
                  </span>
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  View Project Details
                </Button>
              </CardContent>
            </Card>
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

export default SoftwareDevelopment;
