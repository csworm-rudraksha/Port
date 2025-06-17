import React, { useRef, useEffect, useState } from 'react';
import { Users } from 'lucide-react';

const leadershipRoles = [
  {
    id: 1,
    title: 'Technical Head',
    organization: 'Google Developer Group GL Bajaj',
    period: '2023 - Present',
    description: 'Lead a team of developers, organize workshops, coordinate technical events and hackathons.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Technical Head',
    organization: 'GeeksforGeeks Chapter GL Bajaj',
    period: '2023 - Present',
    description: 'Manage technical content creation, coordinate coding competitions, mentor junior developers.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const LeadershipCard = ({ role, index, inView }) => {
  return (
    <div 
      className={`bg-slate-700 rounded-xl overflow-hidden shadow-xl transition-all duration-700 transform ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="h-48 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${role.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>
      
      <div className="p-6 relative">
        <div className="absolute right-6 top-0 transform -translate-y-1/2 bg-indigo-600 p-3 rounded-lg shadow-lg">
          <Users className="w-6 h-6 text-white" />
        </div>
        
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{role.title}</h3>
          <span className="text-xs bg-slate-800 px-2 py-1 rounded text-indigo-300">{role.period}</span>
        </div>
        
        <p className="text-indigo-300 font-medium mb-3">{role.organization}</p>
        
        <p className="text-gray-300 text-sm">{role.description}</p>
      </div>
    </div>
  );
};

const Leadership = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="leadership" className="py-24 bg-slate-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Leadership
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Positions where I've led technical initiatives and community development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipRoles.map((role, index) => (
            <LeadershipCard 
              key={role.id} 
              role={role} 
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;