'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Briefcase, Award } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering',
      institution: 'Kumaraguru College of Technology',
      period: '2023–2027'
    },
    {
      degree: 'Standard 12',
      institution: 'Star Matric Higher Secondary School',
      period: '2022–2023'
    }
  ];

  const achievements = [
    'Won the Best Project at Uyir Hackathon 2025',
    'Won the Best Performing Team at Designathon 2024',
    'Certified for the 60-day real-time project on Accident Detection & Emergency Response'
  ];

  const experience = [
    'Intern at Bluestock as Software Developer',
    'Real-time project with Uyir NGO',
    'Member of iQube'
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hover-lift transition-all duration-300">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 hover-text-glow">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate and innovative software developer skilled in Flutter, MERN Stack, Java, MySQL, and AI integration. 
            Focused on solving real-world problems with scalable and efficient tech solutions. 
            Eager to learn, grow, and contribute to impactful teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg card-hover hover-border-gradient"
          >
            <div className="flex items-center mb-4">
              <GraduationCap className="text-blue-600 dark:text-blue-400 mr-3 hover-glow-blue" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4 hover-brighten">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg card-hover hover-border-gradient"
          >
            <div className="flex items-center mb-4">
              <Trophy className="text-yellow-600 dark:text-yellow-400 mr-3 hover-glow-orange" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Achievements</h3>
            </div>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start hover-brighten hover-slide-up">
                  <Award className="text-yellow-600 dark:text-yellow-400 mr-2 mt-1 flex-shrink-0 hover-glow-orange" size={16} />
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{achievement}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg card-hover hover-border-gradient"
          >
            <div className="flex items-center mb-4">
              <Briefcase className="text-green-600 dark:text-green-400 mr-3 hover-glow-green" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Experience</h3>
            </div>
            <div className="space-y-3">
              {experience.map((exp, index) => (
                <div key={index} className="flex items-start hover-brighten hover-slide-up">
                  <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0 hover-glow-green"></div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{exp}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 