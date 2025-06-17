import React from 'react';
import { Github as GitHub, Linkedin, Mail, FileText, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <a 
              href="mailto:kushwaharudraksha@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/csworm-rudraksha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GitHub className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/kushwaharudraksha/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://leetcode.com/Rudraksha123/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LeetCode"
            >
              <FileText className="w-6 h-6" />
            </a>
          </div>
          
          <a
            href="/Rudraksha_Kushwaha_Resume.pdf"
            download
            className="mb-8 text-indigo-400 hover:text-indigo-300 transition-colors flex items-center"
          >
            <FileText className="w-5 h-5 mr-2" />
            Download Resume
          </a>
          
          <div className="flex items-center justify-center mb-6">
            <p className="text-sm text-gray-400">
              © {currentYear} Rudraksha Kushwaha. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center justify-center text-sm text-gray-500">
  
      
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;