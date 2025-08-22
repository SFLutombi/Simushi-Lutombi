import React from 'react';
import Button from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const CV: React.FC = () => {
  const handleDownload = () => {
    // Create a simple text-based CV for download
    const cvContent = `JOHN DOE
Software Engineer & Cybersecurity Specialist

CONTACT INFORMATION
Email: john.doe@email.com
Phone: +1 (555) 123-4567
LinkedIn: linkedin.com/in/johndoe
GitHub: github.com/johndoe
Location: City, State, Country

PROFESSIONAL SUMMARY
Passionate software engineer with expertise in full-stack development, cybersecurity, and engineering solutions. Proven track record of delivering innovative projects that solve complex problems and drive business value.

TECHNICAL SKILLS
Programming Languages: JavaScript, TypeScript, Python, Java, C++
Frontend: React, Vue.js, HTML5, CSS3, Tailwind CSS
Backend: Node.js, Express.js, Django, Flask
Databases: MongoDB, PostgreSQL, MySQL, Redis
Cloud & DevOps: AWS, Docker, Kubernetes, CI/CD
Cybersecurity: Penetration Testing, Network Security, Cryptography
Engineering: ROS, Computer Vision, Machine Learning

PROFESSIONAL EXPERIENCE

Senior Software Engineer | Tech Company Inc. | 2022 - Present
• Led development of AI-powered learning platform serving 10,000+ users
• Implemented microservices architecture improving system performance by 40%
• Mentored junior developers and conducted code reviews

Software Engineer | Innovation Labs | 2020 - 2022
• Developed autonomous vehicle control system using computer vision and ML
• Built real-time threat detection platform for cybersecurity applications
• Collaborated with cross-functional teams to deliver high-impact solutions

EDUCATION
Bachelor of Science in Computer Engineering
University Name | Graduated 2020
GPA: 3.8/4.0

CERTIFICATIONS
• AWS Certified Solutions Architect
• Certified Ethical Hacker (CEH)
• CompTIA Security+

PROJECTS

Autonomous Vehicle Control System
• Integrated computer vision, sensor fusion, and ML algorithms
• Achieved 95% accuracy in obstacle detection and path planning
• Technologies: Python, ROS, TensorFlow, OpenCV

AI-Powered Learning Platform
• Built personalized education system with adaptive learning paths
• Implemented real-time progress tracking and content recommendations
• Technologies: React, Node.js, MongoDB, TensorFlow

Threat Intelligence Platform
• Developed ML-based security monitoring system
• Integrated multiple data sources for real-time threat detection
• Technologies: Python, Elasticsearch, Docker, Machine Learning

LANGUAGES
English (Native), Spanish (Intermediate), French (Basic)

INTERESTS
Artificial Intelligence, Cybersecurity, Robotics, Renewable Energy, Open Source Contribution

REFERENCES
Available upon request.`;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'John_Doe_CV.txt';
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
            Professional experience, skills, and achievements in software engineering and cybersecurity
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
                <p className="text-gray-600">john.doe@email.com</p>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p className="text-gray-600">linkedin.com/in/johndoe</p>
              </div>
              <div>
                <p className="font-semibold">GitHub</p>
                <p className="text-gray-600">github.com/johndoe</p>
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
                Passionate software engineer with expertise in full-stack development, cybersecurity, and engineering solutions. 
                Proven track record of delivering innovative projects that solve complex problems and drive business value. 
                Experienced in leading development teams and implementing cutting-edge technologies.
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
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Java</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">C++</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">MongoDB</span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">AWS</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Docker</span>
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
                <h4 className="font-semibold text-lg text-gray-900">Senior Software Engineer</h4>
                <p className="text-blue-600 font-medium">Tech Company Inc. | 2022 - Present</p>
                <ul className="text-gray-700 mt-2 space-y-1">
                  <li>• Led development of AI-powered learning platform serving 10,000+ users</li>
                  <li>• Implemented microservices architecture improving system performance by 40%</li>
                  <li>• Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="font-semibold text-lg text-gray-900">Software Engineer</h4>
                <p className="text-green-600 font-medium">Innovation Labs | 2020 - 2022</p>
                <ul className="text-gray-700 mt-2 space-y-1">
                  <li>• Developed autonomous vehicle control system using computer vision and ML</li>
                  <li>• Built real-time threat detection platform for cybersecurity applications</li>
                  <li>• Collaborated with cross-functional teams to deliver high-impact solutions</li>
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
                <h4 className="font-semibold text-lg text-gray-900">Bachelor of Science in Computer Engineering</h4>
                <p className="text-purple-600 font-medium">University Name | Graduated 2020</p>
                <p className="text-gray-700 mt-1">GPA: 3.8/4.0</p>
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
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">AWS Certified Solutions Architect</span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full">Certified Ethical Hacker (CEH)</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full">CompTIA Security+</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CV;
