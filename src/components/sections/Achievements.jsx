import React, { useState, useRef, useEffect } from 'react';
import { Trophy, Award, User } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Top 20 – DEV-ON Hackathon',
    description: 'Recognized by Google Developer Groups for innovative solution',
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    color: 'bg-yellow-500'
  },
  {
    id: 2,
    title: '1st Place – TECHNEX Ideathon',
    description: 'Winning project: Posture Correction IoT solution',
    icon: <Award className="w-8 h-8 text-indigo-400" />,
    color: 'bg-indigo-500'
  },
  {
    id: 3,
    title: 'Top 5% – Adobe GenSolve Hackathon',
    description: 'Recognized for UI/UX design and technical implementation',
    icon: <Trophy className="w-8 h-8 text-pink-400" />,
    color: 'bg-pink-500'
  },
  {
    id: 4,
    title: 'Speaker – Tech Sessions',
    description: 'Led technical sessions with 70+ attendees per session',
    icon: <User className="w-8 h-8 text-blue-400" />,
    color: 'bg-blue-500'
  }
];

const AchievementCard = ({ achievement, index, inView }) => {
  return (
    <div 
      className={`flex items-start gap-4 transition-all duration-700 transform ${
        inView 
          ? 'opacity-100 translate-x-0' 
          : index % 2 === 0 
            ? 'opacity-0 -translate-x-20' 
            : 'opacity-0 translate-x-20'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-lg ${achievement.color} shadow-lg`}>
        {achievement.icon}
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
        <p className="text-gray-400 mt-2">{achievement.description}</p>
      </div>
    </div>
  );
};

const Achievements = () => {
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
    <section id="achievements" className="py-24 bg-slate-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Recognitions and milestones from my journey as a developer and technical enthusiast.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={achievement.id} 
              achievement={achievement} 
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;