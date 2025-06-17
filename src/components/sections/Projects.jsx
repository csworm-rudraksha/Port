import React, { useState, useEffect, useRef } from 'react';
import { Github as GitHub, ExternalLink, Code, Database, Layout } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'DevHubb',
    description: 'Desktop app that aggregates GitHub & LeetCode stats, providing developers with a unified dashboard for tracking coding progress and contributions.',
    technologies: ['Java', 'JDBC', 'MySQL'],
    githubLink: 'https://github.com/csworm-rudraksha/DevHubbDesktop',
    liveLink: null,
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Desktop'
  },
  {
    id: 2,
    title: 'LinCup',
    description: 'Video conferencing app with scheduling and chat features. Built with modern web technologies for a seamless communication experience.',
    technologies: ['Next.js', 'Tailwind', 'TypeScript', 'Clerk Auth', 'Stream API'],
    githubLink: 'https://github.com/csworm-rudraksha/LinCup',
    liveLink: null,
    image: 'https://images.pexels.com/photos/7163656/pexels-photo-7163656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web'
  },
  {
    id: 3,
    title: 'Blogster.io',
    description: 'Full-featured blogging platform with JWT authentication, image upload capabilities, and secure CRUD operations.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    githubLink: 'https://github.com/csworm-rudraksha/Blogster.io',
    liveLink: null,
    image: 'https://images.pexels.com/photos/4132936/pexels-photo-4132936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web'
  }
];

const ProjectCard = ({ project, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`
        relative group bg-slate-800 rounded-xl overflow-hidden shadow-xl
        transition-all duration-700 transform
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
        }
        hover:shadow-2xl hover:shadow-indigo-500/10
      `}
      style={{ transitionDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <div 
          className={`
            absolute inset-0 bg-cover bg-center
            transition-all duration-700
            ${isHovered ? 'scale-110 blur-sm' : 'scale-100'}
          `}
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className={`
          absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent
          transition-opacity duration-500
          ${isHovered ? 'opacity-90' : 'opacity-70'}
        `}></div>
        
        <div className={`
          absolute inset-0 flex items-center justify-center
          transition-opacity duration-500
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}>
          <span className="text-sm font-medium text-indigo-400 bg-slate-900/90 px-4 py-2 rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex space-x-3">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="View Code"
            >
              <GitHub className="h-5 w-5" />
            </a>
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="View Demo"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx} 
              className="text-xs px-3 py-1 rounded-full bg-slate-700/50 text-indigo-300 border border-indigo-500/20
                transition-all duration-300 hover:bg-indigo-500/20 hover:border-indigo-500/40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
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
    <section id="projects" className="py-24 bg-slate-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`
          text-center mb-16
          transition-all duration-1000
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my technical projects, demonstrating problem-solving and creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;