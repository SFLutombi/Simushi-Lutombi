import React from 'react';
import Button from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const CV: React.FC = () => {
  const handleDownload = () => {
    // Create a simple text-based CV for download
    const cvContent = `SIMUSHI FORTUNE LUTOMBI
Engineering Student & Builder

CONTACT INFORMATION
Email: ltmsim001@myuct.ac.za
Phone: +27 64 133 6645
LinkedIn: Simushi Lutombi
GitHub: SFLutombi
Location: Cape Town, South Africa

PROFESSIONAL SUMMARY
Engineering student passionate about building practical solutions that bridge different fields. I enjoy working with electronics, software, and sustainable design to create innovative projects. Currently pursuing a Mechatronics degree while gaining hands-on experience through various projects and work opportunities.

TECHNICAL SKILLS
Programming Languages: Python, JavaScript, TypeScript, C++
Frontend: React, Next.js, HTML5, CSS3, Tailwind CSS
Backend: Django Ninja, Node.js
Databases: MongoDB, PostgreSQL
Hardware: Arduino, Circuit Design, CAD Design
AI/ML: Gemini AI, TensorFlow, Machine Learning
Cybersecurity: CTF Challenges, Digital Forensics, Penetration Testing
Engineering: Mechatronics, IoT, Sustainable Design

PROFESSIONAL EXPERIENCE

Tutor and Builder | Invent Afrika | 2025 - Present
• Teaching and mentoring students in various technical subjects
• Building and developing innovative solutions and projects

Web Developer | JTP Solutions | 2023 - 2024
• Developed web applications and digital solutions
• Collaborated with teams to deliver client projects

EDUCATION
Bachelor of Engineering in Mechatronics
University of Cape Town (UCT) | Current Student

CERTIFICATIONS
• Make.com
• CS-50

PROJECTS

Power Bank from Recycled Vape Batteries
• Designed sustainable power solution using recycled lithium-ion batteries
• Implemented battery management and safety protection circuits
• Technologies: Circuit Design, Battery Management, Sustainable Design

Webwriter - AI-powered Webapp
• Built comprehensive writing platform for webserialists
• Integrated Gemini AI for enhanced writing assistance
• Technologies: Next.js, Django Ninja, Figma, Gemini AI

CTF Write-ups & Cybersecurity Challenges
• Completed various CTF challenges including forensics, web exploitation, and cryptography
• Demonstrated practical cybersecurity skills through hands-on challenges
• Platforms: Sanren, HackTheBox, TryHackMe, PicoCTF

8X8 LED Matrix Game & RFID Smart Lock
• Built interactive games and security systems using Arduino
• Implemented embedded systems and IoT solutions
• Technologies: Arduino, Electronics, Circuit Design

LANGUAGES
English (Fluent), Local Languages

INTERESTS
Sustainable Engineering, IoT Development, Cybersecurity, AI Integration, Educational Technology

REFERENCES
Available upon request.`;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Simushi_Lutombi_CV.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Curriculum Vitae</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional experience, skills, and achievements in engineering and software development
          </p>
        </div>

        {/* Download Section */}
        <div className="text-center mb-12">
          <Button 
            onClick={handleDownload}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
          >
            📥 Download CV (TXT)
          </Button>
          <p className="text-sm text-gray-500 mt-2">
            Click to download a text version of the CV
          </p>
        </div>

        {/* CV Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">ltmsim001@myuct.ac.za</p>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+27 64 133 6645</p>
              </div>
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p className="text-gray-600">Simushi Lutombi</p>
              </div>
              <div>
                <p className="font-semibold">GitHub</p>
                <p className="text-gray-600">SFLutombi</p>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Engineering student passionate about building practical solutions that bridge different fields. 
                I enjoy working with electronics, software, and sustainable design to create innovative projects. 
                Currently pursuing a Mechatronics degree while gaining hands-on experience through various projects and work opportunities.
              </p>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">C++</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Django Ninja</span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Arduino</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Gemini AI</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Professional Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-semibold text-lg text-gray-900">Tutor and Builder</h4>
                <p className="text-blue-600 font-medium">Invent Afrika | 2025 - Present</p>
                <ul className="text-gray-700 mt-2 space-y-1">
                  <li>• Teaching and mentoring students in various technical subjects</li>
                  <li>• Building and developing innovative solutions and projects</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="font-semibold text-lg text-gray-900">Web Developer</h4>
                <p className="text-green-600 font-medium">JTP Solutions | 2023 - 2024</p>
                <ul className="text-gray-700 mt-2 space-y-1">
                  <li>• Developed web applications and digital solutions</li>
                  <li>• Collaborated with teams to deliver client projects</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="font-semibold text-lg text-gray-900">Bachelor of Engineering in Mechatronics</h4>
                <p className="text-purple-600 font-medium">University of Cape Town (UCT) | Current Student</p>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Make.com</span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full">CS-50</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CV;
