'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Database, Brain, Vote } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Accident Detection and Emergency Response',
      description: 'Flutter + AI-powered real-time detection and alerting system for emergency services.',
      icon: Smartphone,
      color: 'bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500',
      technologies: ['Flutter', 'AI/ML', 'Real-time Detection', 'Emergency Services']
    },
    {
      title: 'Food Ordering Platform',
      description: 'MERN stack-based platform for food ordering and real-time delivery tracking.',
      icon: Globe,
      color: 'bg-gradient-to-r from-green-500 via-teal-400 to-blue-500',
      technologies: ['MERN Stack', 'MongoDB', 'Express.js', 'React', 'Node.js']
    },
    {
      title: 'Electricity Management System',
      description: 'Java + MySQL + Servlets system for billing, usage, and customer management.',
      icon: Database,
      color: 'bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500',
      technologies: ['Java', 'MySQL', 'Servlets', 'JSP', 'Billing System']
    },
    {
      title: 'AI Resume Builder',
      description: 'AI-powered web app that helps users generate resumes using intelligent templates.',
      icon: Brain,
      color: 'bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500',
      technologies: ['AI/ML', 'Web App', 'Templates', 'User Interface']
    },
    {
      title: 'Voter Website',
      description: 'Python + Twilio-based secure online voting system with OTP verification.',
      icon: Vote,
      color: 'bg-gradient-to-r from-orange-500 via-yellow-400 to-rose-400',
      technologies: ['Python', 'Twilio', 'OTP Verification', 'Security']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hover-lift transition-all duration-300">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 hover-text-glow">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating my skills in various technologies and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const hoverClasses = [
              'hover-jelly',
              'hover-dance',
              'hover-bounce',
              'hover-scale',
              'hover-rotate',
            ];
            const isAiResumeBuilder = project.title === 'AI Resume Builder';
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover-lift card-hover hover-border-gradient group ${hoverClasses[index % hoverClasses.length]}`}
              >
                {/* Project Header */}
                <div className={`${project.color} p-6 text-white hover-brighten${isAiResumeBuilder ? ' hover-bg-transition' : ''}`}>
                  <div className="flex items-center justify-between">
                    <project.icon size={32} className="hover-glow-blue" />
                    <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity hover-glow-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mt-4 hover-text-glow">{project.title}</h3>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 hover-brighten">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 hover-text-glow">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full hover-scale hover-glow-blue hover-bounce"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2 btn-hover-primary hover-glow-blue"
                    >
                      <Github size={16} className="hover-glow-blue" />
                      <span>View Code</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2 btn-hover-primary hover-glow-green"
                    >
                      <ExternalLink size={16} className="hover-glow-green" />
                      <span>Live Demo</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-colors btn-hover-primary hover-glow-blue"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 