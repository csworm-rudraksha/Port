import React, { useState, useEffect, useRef } from 'react';
import { Code, Server, Database, Wrench } from 'lucide-react';

const skills = {
  languages: ['Java', 'C', 'Python', 'Swift', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  frontend: ['React.js', 'Next.js', 'HTML/CSS', 'SwiftUI', 'UIKit', 'Tailwind CSS', 'Redux'],
  backend: ['Node.js', 'Express', 'JDBC', 'REST API', 'GraphQL'],
  databases: ['MySQL', 'MongoDB'],
  tools: ['Docker', 'Git', 'GitHub', 'VS Code', 'Xcode', 'Figma']
};

const SkillCategory = ({ icon, title, items }) => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/30 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-slate-800 rounded-lg transform group-hover:rotate-12 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {items.map((skill, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setActiveSkill(skill)}
            onMouseLeave={() => setActiveSkill(null)}
          >
            <div className={`
              px-3 py-2 rounded-lg text-sm font-medium
              transition-all duration-300 transform hover:scale-105
              ${activeSkill === skill 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }
            `}>
              <span className="relative z-10">{skill}</span>
              <div className={`
                absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500
                rounded-lg opacity-0 transition-opacity duration-300
                ${activeSkill === skill ? 'opacity-20' : ''}
              `}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      className="py-24 bg-gradient-to-b from-slate-800 to-slate-900"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`
          text-center mb-16 transition-all duration-1000
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive showcase of technologies I've mastered in my journey as a developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory 
            icon={<Code className="w-6 h-6 text-indigo-400" />}
            title="Languages"
            items={skills.languages}
          />
          <SkillCategory 
            icon={<Code className="w-6 h-6 text-purple-400" />}
            title="Frontend"
            items={skills.frontend}
          />
          <SkillCategory 
            icon={<Server className="w-6 h-6 text-blue-400" />}
            title="Backend"
            items={skills.backend}
          />
          <SkillCategory 
            icon={<Database className="w-6 h-6 text-green-400" />}
            title="Databases"
            items={skills.databases}
          />
          <SkillCategory 
            icon={<Wrench className="w-6 h-6 text-yellow-400" />}
            title="Tools"
            items={skills.tools}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;