import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import Button from './ui/button';

const CyberSecurity: React.FC = () => {
  const bentoProjects = [
    {
      title: "Network Monitor",
      description: "Real-time threat detection",
      icon: "🛡️",
      color: "bg-red-500"
    },
    {
      title: "Penetration Testing",
      description: "Security assessment tools",
      icon: "🔍",
      color: "bg-orange-500"
    },
    {
      title: "Encryption System",
      description: "Advanced cryptography",
      icon: "🔐",
      color: "bg-yellow-500"
    },
    {
      title: "Firewall Management",
      description: "Network security control",
      icon: "🔥",
      color: "bg-red-600"
    },
    {
      title: "Vulnerability Scanner",
      description: "Automated security audit",
      icon: "🔎",
      color: "bg-purple-500"
    },
    {
      title: "Incident Response",
      description: "Security breach handling",
      icon: "🚨",
      color: "bg-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cyber Security</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protecting digital assets through advanced security solutions and ethical hacking. 
            From threat detection to incident response, each project strengthens the security 
            posture of organizations and individuals.
          </p>
        </div>

        {/* Featured Project */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="order-2 lg:order-1">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  AI-Powered Threat Intelligence Platform
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Machine learning-based security monitoring
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Built a comprehensive threat intelligence platform that uses artificial 
                  intelligence to detect, analyze, and respond to cybersecurity threats in 
                  real-time. The system integrates multiple data sources, applies machine 
                  learning algorithms for pattern recognition, and provides automated incident 
                  response capabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    TensorFlow
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Elasticsearch
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    Docker
                  </span>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  View Project Details
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-red-400 to-orange-600 rounded-2xl flex items-center justify-center">
                <div className="text-8xl">🔒</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-4xl">🤖</span>
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

export default CyberSecurity;
