import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'Swift', 'C++', 'C'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'SwiftUI', 'UIKit', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'FastAPI'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Coursework',
    skills: [
      'Operating System',
      'DBMS',
      'OOPs',
      'Software Engineering',
      'Computer Networking',
    ],
  },
  {
    title: 'Tools',
    skills: [
       'Docker', 'Git','GitHub', 'Postman',
    ],
  },
];

const SkillCard = ({ title, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
  >
    <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, idx) => (
        <motion.li
          key={skill}
          className="text-gray-700 text-sm bg-blue-50 rounded-md px-3 py-1 shadow-sm border border-blue-100"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: delay + idx * 0.05 }}
          viewport={{ once: true }}
        >
          {skill}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const Skills = () => (
  <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Technical <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          My versatile technical foundation spans multiple domains, from modern frameworks and development tools to academic fundamentals.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((cat, idx) => (
          <SkillCard
            key={cat.title}
            title={cat.title}
            skills={cat.skills}
            delay={idx * 0.2}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;