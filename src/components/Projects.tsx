import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SkillSync",
      description:
        "AI-powered skill matcher using FastAPI, IBM Watson, and ChromaDB. Advanced matching algorithms for skill assessment and recommendation.",
      tech: ["FastAPI", "IBM Watson", "ChromaDB", "Python", "AI/ML"],
      achievement: "Top 10 in IBM Hackathon",
      image: "/images/skillsync.png",
      links: {
        github: "https://github.com/csworm-rudraksha/SkillSync",
        demo: "https://youtu.be/T3PMJh66268",
      },
    },
    {
      title: "LinCup",
      description:
        "Real-time video conferencing platform with advanced features including screen sharing, chat, and room management.",
      tech: ["Next.js", "Clerk", "Stream", "TypeScript", "Tailwind CSS"],
      image: "/images/lincup.png",
      links: {
        github: "https://github.com/csworm-rudraksha/LinCup",
        demo: "http://lincup.netlify.app/",
      },
    },
    {
      title: "LinkCraft",
      description:
        "Secure URL shortener with comprehensive analytics, user authentication, and custom domain support.",
      tech: ["Node.js", "MongoDB", "Express.js", "JWT", "Analytics"],
      image: "/images/linkcraft.png",
      links: {
        github: "https://github.com/csworm-rudraksha/LinkCraft",
        demo: "http://linkcraft-cuh7.onrender.com/",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions built with cutting-edge technologies and
            creative problem-solving
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2 h-full flex flex-col">
                
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {project.achievement && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                      🏆 {project.achievement}
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4 mt-auto">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 group"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>

                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <Link to="/projects" className="flex items-center space-x-2">
              <span>View All Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;