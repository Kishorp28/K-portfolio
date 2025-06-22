'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
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

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hover-brighten transition-all duration-300">
        <div className="text-center">
          {/* Logo and Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h3 className="text-2xl font-bold mb-2 hover-text-glow cursor-pointer">KISHORE</h3>
            <p className="text-gray-400 hover-brighten">Software Developer & Problem Solver</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 bg-gray-800 rounded-full transition-colors ${social.color} ${social.hoverClass} hover-bounce`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <social.icon size={20} className="text-gray-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div className="hover-brighten hover-slide-up">
                <p>Phone: +91 9360172994</p>
              </div>
              <div className="hover-brighten hover-slide-up">
                <p>Email: kishore2k50@gmail.com</p>
              </div>
              <div className="hover-brighten hover-slide-up">
                <p>Location: Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8"
          >
            <p className="text-gray-400 text-sm flex items-center justify-center space-x-1 hover-brighten">
              <span>© 2024 KISHORE. Made with</span>
              <Heart className="text-red-500 hover-glow-orange" size={16} />
              <span>using Next.js & Tailwind CSS</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 