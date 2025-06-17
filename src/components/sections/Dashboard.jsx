import React, { useState, useEffect, useRef } from 'react';
import { Code, GitBranch, FileCheck } from 'lucide-react';

const stats = [
  {
    id: 1,
    title: 'GitHub Commits',
    value: 730,
    icon: <GitBranch className="w-6 h-6 text-blue-400" />,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 2,
    title: 'LeetCode Problems',
    value: 230,
    icon: <Code className="w-6 h-6 text-yellow-400" />,
    color: 'from-yellow-500 to-amber-600'
  },
  {
    id: 3,
    title: 'Projects Completed',
    value: 12,
    icon: <FileCheck className="w-6 h-6 text-green-400" />,
    color: 'from-green-500 to-emerald-600'
  }
];

const CounterCard = ({ stat, inView }) => {
  const counterRef = useRef(null);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTimestamp;
    let animationFrame;
    const duration = 2000; // 2 seconds
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      setCount(Math.floor(progress * stat.value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    if (inView) {
      animationFrame = requestAnimationFrame(step);
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, stat.value]);
  
  return (
    <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/30 transition-all duration-300 transform hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-300">{stat.title}</h3>
        <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color}`}>
          {stat.icon}
        </div>
      </div>
      
      <div className="text-4xl font-bold text-white" ref={counterRef}>
        {count}+
      </div>
    </div>
  );
};

const Dashboard = () => {
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
    <section className="py-16 bg-slate-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Developer Stats
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <CounterCard key={stat.id} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;