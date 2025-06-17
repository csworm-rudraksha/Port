import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Bio Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-slate-700/50 p-8 rounded-2xl shadow-xl border border-slate-600/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-4">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
              I'm Rudraksha Kushwaha, a second-year Computer Science student at GL Bajaj Institute of Management and Technology. I’m passionate about using technology to create real-world impact and have worked with languages like Java, Python, C, and Swift, building projects across web and iOS platforms. Currently, I serve as the Technical Head of GDG GL Bajaj and actively contribute to the GFG Student Chapter. I enjoy leading teams, exploring new tech, and sharing knowledge through community initiatives. I live by the belief: <b>"Jack of all trades, master of none, oftentimes better than master of one."</b>
              </p>
              
              <div className="space-y-6">
                <div className="bg-slate-600/30 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <GraduationCap className="mr-3 text-indigo-400" />
                    Education
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-indigo-500 pl-4">
                      <div className="flex items-center text-indigo-300 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>2022 - 2026</span>
                      </div>
                      <h5 className="text-white font-medium">B.Tech Computer Science & Engineering - 80%</h5>
                      <p className="text-gray-400">GL Bajaj Institute of Technology and Management</p>
                    </div>
                    
                    <div className="border-l-2 border-indigo-500 pl-4">
                      <div className="flex items-center text-indigo-300 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Completed</span>
                      </div>
                      <h5 className="text-white font-medium">Intermediate - 92%</h5>
                      <p className="text-gray-400">Aster Public School</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image/Avatar Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full relative z-10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-800 rounded-full transform scale-[0.98]"></div>
                <div className="absolute w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-50"></div>
                <div className="text-white text-center z-10 p-6">
                  <div className="font-bold text-4xl mb-2">RK</div>
                  <div className="font-light text-xs">FULL STACK DEVELOPER</div>
                </div>
              </div>
              
              {/* Orbiting Circles */}
              <div className="absolute top-0 left-0 w-full h-full animate-spin-slow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full animate-spin-reverse-slow">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;