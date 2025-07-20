import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Heart, Github, Linkedin, Code, ExternalLink , Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
      { icon: Github, href: 'https://github.com/csworm-rudraksha', label: 'GitHub' },
      { icon: Linkedin, href: 'https://linkedin.com/in/rudraksha-kushwaha-1b88ab1b1', label: 'LinkedIn' },
      { icon: Mail, href: 'mailto:kushwaharudraksha0307@gmail.com', label: 'Email' },
      { icon: ExternalLink, href: 'https://drive.google.com/file/d/12GnaqtsolzlKlzpeZYyk2dpfUSBnH2Mx/view?usp=sharing', label: 'Resume' },
    ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Rudraksha Kushwaha</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
  Full-Stack Developer & AI Enthusiast driven by a passion for crafting impactful digital solutions. 
  Currently pursuing a B.Tech in Computer Science Engineering with a focus on modern technologies and real-world problem solving.
</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500 transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>Greater Noida, India</p>
              <p>kushwaharudraksha0307@gmail.com.com</p>
              <p>Open for opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            © 2024 Rudraksha Kushwaha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;