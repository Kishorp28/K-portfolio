'use client';

import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaGitAlt,
  FaFigma,
  FaDatabase,
  FaMobile,
  FaNpm,
  FaGithub
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiVite, 
  SiPostgresql, 
  SiMysql,
  SiCplusplus,
  SiC,
  SiFlutter,
  SiMongodb,
  SiExpress,
  SiVsco,
  SiFirebase
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FaReact,
      skills: [
        { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
        { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'React', icon: FaReact, color: 'text-cyan-400' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-800 dark:text-white' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
        { name: 'Vite', icon: SiVite, color: 'text-purple-500' }
      ]
    },
    {
      title: 'Backend & Database',
      icon: FaDatabase,
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-600 dark:text-gray-300' },
        { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' }
      ]
    },
    {
      title: 'Programming Languages',
      icon: FaPython,
      skills: [
        { name: 'Python', icon: FaPython, color: 'text-blue-500' },
        { name: 'Java', icon: FaJava, color: 'text-red-500' },
        { name: 'C++', icon: SiCplusplus, color: 'text-blue-600' },
        { name: 'C', icon: SiC, color: 'text-blue-700' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' }
      ]
    },
    {
      title: 'Mobile & Tools',
      icon: FaMobile,
      skills: [
        { name: 'Flutter', icon: SiFlutter, color: 'text-blue-500' },
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
        { name: 'GitHub', icon: FaGithub, color: 'text-gray-800 dark:text-white' },
        { name: 'Figma', icon: FaFigma, color: 'text-purple-500' },
        { name: 'VS Code', icon: SiVsco, color: 'text-blue-500' },
        { name: 'npm', icon: FaNpm, color: 'text-red-500' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hover-lift transition-all duration-300">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 hover-text-glow">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive set of technical skills and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Main Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover-lift card-hover hover-border-gradient"
            >
              <div className="flex items-center mb-6">
                <category.icon className="text-blue-600 dark:text-blue-400 mr-3 hover-glow-blue" size={28} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover-text-glow">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover="hover"
                    className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 hover-brighten hover-slide-up"
                  >
                    <skill.icon className={`${skill.color} mr-3 hover-glow-blue`} size={20} />
                    <span className="text-gray-700 dark:text-gray-300 font-medium hover-text-glow">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 