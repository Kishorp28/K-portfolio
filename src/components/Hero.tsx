'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const typewriterLines = [
  "Hi, I'm Kishore",
  "I'm a Full Stack Developer",
  "I'm an AI ML Developer"
];

function useTypewriter(lines: string[], typingSpeed = 60, pause = 900) {
  const [displayed, setDisplayed] = useState('');
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (lineIdx >= lines.length) return;
    if (charIdx < lines[lineIdx].length) {
      const timeout = setTimeout(() => {
        setDisplayed(lines[lineIdx].slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      setShowCursor(false);
      if (lineIdx < lines.length - 1) {
        const pauseTimeout = setTimeout(() => {
          setDisplayed('');
          setLineIdx((l) => l + 1);
          setCharIdx(0);
          setShowCursor(true);
        }, pause);
        return () => clearTimeout(pauseTimeout);
      }
    }
  }, [charIdx, lineIdx, lines, typingSpeed, pause]);

  return { displayed, showCursor };
}

const Hero = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kishore-p2800',
      icon: Linkedin,
      color: 'hover:text-blue-600',
      hoverClass: 'hover-glow-blue'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Kishore-028/',
      icon: Github,
      color: 'hover:text-gray-800 dark:hover:text-white',
      hoverClass: 'hover-glow-green'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kishor._.28_/',
      icon: Instagram,
      color: 'hover:text-pink-600',
      hoverClass: 'hover-glow-purple'
    }
  ];

  const { displayed, showCursor } = useTypewriter(typewriterLines, 110, 1400);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center hover-lift transition-all duration-300">
          {/* Animated Main Heading */}
          <motion.pre
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 min-h-[3.5rem]"
            style={{ fontFamily: 'inherit', whiteSpace: 'pre-line' }}
          >
            {displayed}
            {showCursor && <span className="animate-pulse">|</span>}
          </motion.pre>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover-lift card-hover hover-background-shift">
              <Phone className="text-blue-600 dark:text-blue-400 hover-glow-blue" size={20} />
              <span className="text-gray-700 dark:text-gray-300">+91 9360172994</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover-lift card-hover hover-background-shift">
              <Mail className="text-blue-600 dark:text-blue-400 hover-glow-blue" size={20} />
              <span className="text-gray-700 dark:text-gray-300">kishore2k50@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover-lift card-hover hover-background-shift">
              <MapPin className="text-blue-600 dark:text-blue-400 hover-glow-blue" size={20} />
              <span className="text-gray-700 dark:text-gray-300">Coimbatore, Tamil Nadu</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg transition-colors ${social.color} ${social.hoverClass} hover-bounce`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <social.icon size={24} className="text-gray-700 dark:text-gray-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-colors btn-hover-primary hover-glow-blue"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 