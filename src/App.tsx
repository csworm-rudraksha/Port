import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About, { Education } from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Blogs from './components/Blogs';
import BlogPost from './components/BlogPost';
import AllProjects from './components/AllProjects';
import AllBlogs from './components/AllBlogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Blogs />
      <Contact />
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;