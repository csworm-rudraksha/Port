import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Mail } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/csworm-rudraksha', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rudraksha-kushwaha-1b88ab1b1', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:kushwaharudraksha0307@gmail.com', label: 'Email' },
    { icon: ExternalLink, href: 'https://drive.google.com/file/d/12GnaqtsolzlKlzpeZYyk2dpfUSBnH2Mx/view?usp=sharing', label: 'Resume' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-12 sm:pt-16 lg:pt-10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-200 to-emerald-200 opacity-20"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex justify-center mb-6">
            <div className="relative">
             <div className="w-28 sm:w-36 md:w-60 aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/image1.png"
                  alt="Rudraksha Kushwaha"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-1 right-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full p-3 shadow-lg">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Rudraksha
            </span>
            <br />
            <span className="text-gray-700">Kushwaha</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Software Engineer & Full Stack Developer
            <br />
            <span className="text-lg text-gray-500">
              Code. Create. Connect. | Developer & Leader
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-blue-600 border border-gray-200 hover:border-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="h-5 w-5" />
                <span className="font-medium">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;