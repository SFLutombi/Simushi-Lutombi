import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import Button from './ui/button';

const SoftwareDevelopment: React.FC = () => {
  const bentoProjects = [
    {
      title: "Caption Engine",
      description: "AI powered transcription webapp",
      icon: "🎬",
      color: "border-primary/20 text-primary",
      hoverColor: "hover:border-primary/40"
    },
    {
      title: "BloomFund",
      description: "Blockchain microinsurance for SA mothers",
      icon: "🌱",
      color: "border-accent/20 text-accent",
      hoverColor: "hover:border-accent/40"
    },
    {
      title: "SiteSnag",
      description: "AI powered website name generator",
      icon: "🌐",
      color: "border-secondary/20 text-secondary",
      hoverColor: "hover:border-secondary/40"
    },
    {
      title: "Flashcards Webapp",
      description: "Helping students study",
      icon: "📚",
      color: "border-warning/20 text-warning",
      hoverColor: "hover:border-warning/40"
    },
    {
      title: "Twitter Content Generator",
      description: "Uses AI to generate twitter content",
      icon: "🐦",
      color: "border-primary/20 text-primary",
      hoverColor: "hover:border-primary/40"
    },
    {
      title: "Webscraping Automation",
      description: "Using make.com",
      icon: "🤖",
      color: "border-accent/20 text-accent",
      hoverColor: "hover:border-accent/40"
    }
  ];

  return (
    <section className="py-24 bg-bg-grid bg-grid relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-subtle">
              <span className="text-white font-semibold text-sm">💻</span>
            </div>
            <h2 className="text-heading text-text-primary font-sf">Software Development</h2>
          </div>
          <div className="w-20 h-0.5 bg-primary rounded-full mx-auto mb-8"></div>
          <p className="text-body max-w-4xl mx-auto text-text-secondary">
            Code is the magic layer that makes engineering come alive. I like using software to
            automate the boring stuff, simulate complex systems, or just make things more user-
            friendly. For me, coding isn't separate from engineering. It's the language that makes
            technology smarter and more adaptable.
          </p>
        </div>

        {/* Featured Project */}
        <div className="grid lg:grid-cols-2 gap-20 mb-24 items-center">
          <div className="order-1">
            <div className="relative group">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 border border-border-light rounded-2xl flex items-center justify-center relative overflow-hidden shadow-elevated">
                <img 
                  src="/webwriter.png" 
                  alt="Webwriter - AI-powered webapp for webserialists" 
                  className="w-full h-full object-cover object-[center_40%] rounded-2xl"
                />
                
                {/* Subtle accent ring */}
                <div className="absolute inset-4 rounded-2xl border border-primary/20"></div>
              </div>
              
              {/* Professional accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full flex items-center justify-center shadow-elevated">
                <span className="text-white text-4xl">✨</span>
              </div>
            </div>
          </div>

          <div className="order-2">
            <Card className="bg-card-bg border-border-light shadow-subtle hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-3xl font-semibold text-text-primary font-sf mb-3">
                  Webwriter
                </CardTitle>
                <CardDescription className="text-lg text-primary font-medium">
                  AI-powered webapp designed to help webserialists
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-text-secondary leading-relaxed">
                  Developed a comprehensive web application that helps webserialists write and manage their stories. 
                  The platform features an intelligent text editor with AI-powered suggestions, world-building tools, 
                  and chapter management. Built with modern web technologies and integrated Gemini AI for enhanced 
                  writing assistance.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-gray-50 border border-primary/20 text-primary rounded-lg text-sm font-medium">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-gray-50 border border-accent/20 text-accent rounded-lg text-sm font-medium">
                    Django Ninja
                  </span>
                  <span className="px-3 py-1 bg-gray-50 border border-secondary/20 text-secondary rounded-lg text-sm font-medium">
                    Figma
                  </span>
                  <span className="px-3 py-1 bg-gray-50 border border-danger/20 text-danger rounded-lg text-sm font-medium">
                    Gemini AI
                  </span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary-dark transition-all duration-300 shadow-subtle hover:shadow-elevated hover:-translate-y-0.5 font-medium">
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

export default SoftwareDevelopment;
