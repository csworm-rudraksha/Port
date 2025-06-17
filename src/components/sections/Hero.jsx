import React, { useEffect, useRef } from 'react';
import { Github as GitHub, Linkedin, Mail, FileText, ArrowDown } from 'lucide-react';

const Hero = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const canvas = particlesRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(window.innerWidth / 10);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 255, ${p.opacity})`;
        ctx.fill();
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      
      // Draw connections
      ctx.strokeStyle = 'rgba(148, 163, 255, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas 
        ref={particlesRef} 
        className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900 z-0"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 py-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
            <span className="block">Rudraksha</span>
            <span className="block mt-2">Kushwaha</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl text-indigo-300 font-light max-w-3xl mx-auto leading-relaxed">
            Web Developer | Tech Enthusiast | Leader | Innovator | Problem Solver | Wanna be CSworm
          </h2>
          
          <div className="flex justify-center space-x-4 py-6">
            <a 
              href="mailto:kushwaharudraksha@gmail.com"
              className="transform hover:scale-110 transition-transform flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/csworm-rudraksha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white"
              aria-label="GitHub"
            >
              <GitHub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/kushwaharudraksha/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://leetcode.com/Rudraksha123/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white"
              aria-label="LeetCode"
            >
              <FileText className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="/Rudraksha_Kushwaha_Resume.pdf"
              className="px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-all hover:-translate-y-1"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
        
        <button 
          onClick={scrollToAbout} 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-8 h-8 text-white opacity-70" />
        </button>
      </div>
    </section>
  );
};

export default Hero;