import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Picture */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <div className="text-6xl font-bold text-gray-400">👨‍💻</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🚀</span>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left">
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  John Doe
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600 mb-6">
                  Software Engineer & Cybersecurity Specialist
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                  Passionate about creating innovative solutions that bridge the gap between 
                  engineering excellence and cutting-edge technology. I specialize in full-stack 
                  development, cybersecurity, and building robust systems that solve real-world problems.
                </p>
                <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    React
                  </span>
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Node.js
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    Python
                  </span>
                  <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                    Cybersecurity
                  </span>
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    AWS
                  </span>
                </div>
                <div className="flex gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    View Projects
                  </Button>
                  <Button size="lg" variant="outline">
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
