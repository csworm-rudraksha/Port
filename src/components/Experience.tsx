import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "Urban-Strap",
      period: "2024",
      location: "Remote",
      description:
        "Developed and maintained web applications using modern technologies. Collaborated with design teams to implement responsive user interfaces.",
      tech: ["React.js", "JavaScript", "CSS", "Git"],
    },
    {
      title: "Web Developer",
      company: "Murugan MUN'24",
      period: "2024",
      location: "Remote",
      description:
        "Built the official website for Model United Nations conference. Implemented registration systems and event management features.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },
    {
      title: "Technical Head",
      company: "GDG On Campus",
      period: "2024 - 2025",
      location: "GL Bajaj Institute",
      description:
        "Leading technical initiatives and organizing workshops for Google Developer Groups. Mentoring students in various technologies.",
      tech: ["Leadership", "Event Management", "Technical Mentoring"],
    },
    {
      title: "Technical Head",
      company: "GeeksforGeeks GL Bajaj",
      period: "2024 - 2025",
      location: "GL Bajaj Institute",
      description:
        "Organizing coding competitions and technical workshops. Building a strong coding community among students.",
      tech: ["Community Building", "DSA", "Competitive Programming"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building expertise through hands-on experience and leadership roles
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Single timeline line */}
          <div
            className="absolute left-1/2 transform -translate-x-0.5 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500 hidden md:block"
            style={{ top: "0", height: "100%" }}
          ></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              <div
                className={`flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 w-full md:w-96 border border-gray-100 hover:border-blue-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                      <div className="flex items-center text-gray-500 mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-blue-50 to-emerald-50 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Timeline dot */}

                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -top-2 z-20">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full shadow-md">
                    <Briefcase className="h-6 w-6 text-white" />
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

export default Experience;
