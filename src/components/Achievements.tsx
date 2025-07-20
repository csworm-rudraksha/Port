import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Top 10 - IBM Lean AI Hackathon',
      description: 'Secured top 10 position in prestigious IBM hackathon with SkillSync project',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      year: '2024',
    },
    {
      title: 'Top 5% - Adobe GenSolve Hackathon',
      description: 'Achieved top 5% ranking in Adobe\'s creative technology challenge',
      icon: Star,
      color: 'from-purple-500 to-pink-500',
      year: '2024',
    },
    {
      title: 'Postman Student Expert',
      description: 'Certified expert in API development and testing with Postman platform',
      icon: Award,
      color: 'from-blue-500 to-cyan-500',
      year: '2023',
    },
    {
      title: 'CCNA Certified',
      description: 'Cisco Certified Network Associate - Network fundamentals and security',
      icon: Zap,
      color: 'from-emerald-500 to-teal-500',
      year: '2023',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Achievements & <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Milestones that showcase dedication to excellence and continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1 h-full">
                <div className="flex items-start space-x-4">
                  <div className={`bg-gradient-to-r ${achievement.color} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                      <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;