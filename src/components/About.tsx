import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16 px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="w-64 h-64 rounded-tl-[50px] rounded-br-[50px] overflow-hidden shadow-2xl border-4 border-gray">
  <img
    src="/images/pfp.png"
    alt="Rudraksha Kushwaha"
    className="w-full h-full object-cover"
  />
</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 text-left"
          >
            <p className="text-xl text-gray-600 leading-relaxed mb-6 text-justify">
              I am a{" "}
              <strong>final-year Computer Science Engineering student</strong>{" "}
              driven by a passion for building intelligent, user-focused
              software. With a strong grasp of both frontend and backend
              technologies, I specialize as a{" "}
              <strong>Full Stack Developer</strong> and{" "}
              <strong>Problem Solver</strong> who thrives in dynamic
              environments.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              I bring a combination of{" "}
              <strong>technical expertise, creative thinking</strong>, and a{" "}
              <strong>collaborative mindset</strong> to every project I work on.
              Known for my <strong>adaptability, leadership qualities</strong>,
              and eagerness to learn, I enjoy working in teams where innovation,
              ownership, and clear communication are valued. My goal is to
              create impactful, scalable solutions that solve real-world
              problems through technology.
            </p>
            <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-700 mt-4">
              <strong>
                "I believe in giving back to the community what we have gained
                from it."
              </strong>
            </blockquote>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-3xl"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              My Journey
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Guided by the belief that{" "}
              <strong>
                "jack of all trades is often better than master of one"
              </strong>
              , my journey has been about exploring and excelling across diverse
              domains. I’ve built strong proficiency in languages like{" "}
              <strong>Java, C, C++, Python , Swift </strong>, and have grown as
              a <strong>Full Stack Developer</strong>,{" "}
              <strong>iOS Developer</strong>, and a{" "}
              <strong>Problem-solving enthusiast</strong>. Alongside my
              technical pursuits, I’ve demonstrated{" "}
              <strong>leadership and initiative</strong> through active
              involvement in technical communities. Currently, I’m diving into
              the world of <strong>DevOps</strong> to further expand my
              engineering toolkit.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section
      id="education"
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
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-emerald-500 w-16 h-16 rounded-xl flex items-center justify-center mr-6">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600">
                  Bachelor of Technology : Computer Science Engineering With AI
                </h3>
                <p className="text-lg text-gray-900 font-semibold">
                  G.L. Bajaj Institute of Technology and Management
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed max-w-3xl mb-4 text-justify">
  Final-year Computer Science Engineering student with a focus on software development and AI.  
  Actively building real-world skills through hands-on projects and innovation-driven learning.
</p>


            <div className="text-left">
              <p className="text-gray-600 mb-1">
                <strong>Year :</strong> 2022 - 2026 | <strong>CGPA:</strong>{" "}
                8.0
              </p>
            </div>
          </div>
          <br />
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-emerald-500 w-16 h-16 rounded-xl flex items-center justify-center mr-6">
                <span className="text-2xl">🏫</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600">
                  Intermediate (Class XII)
                </h3>
                <p className="text-lg text-gray-900 font-semibold">
                  Aster Public School, Noida Extension
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed max-w-3xl mb-4 text-justify">
              Completed senior secondary education with a strong academic record
              and a keen interest in science and technology. Built a solid
              foundation in mathematics, computer science, and problem-solving.
            </p>

            <div className="text-left">
              <p className="text-gray-600 mb-1">
                <strong>Year:</strong> 2021 – 2022 |{" "}
                <strong>Percentage:</strong> 92%
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
export { Education };
