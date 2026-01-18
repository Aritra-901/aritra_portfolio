import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const TypeWriter = ({ text, speed = 100, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayedText('');

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        if (onComplete) {
          setTimeout(onComplete, 1500);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return <span>{displayedText}</span>;
};

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const roles = ['FRONT-END DEVELOPER', 'BACK-END DEVELOPER', 'FULL-STACK DEVELOPER'];

  const handleTypewriterComplete = () => {
    if (currentRoleIndex < roles.length - 1) {
      setCurrentRoleIndex(currentRoleIndex + 1);
    } else {
      setCurrentRoleIndex(0);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I'm <span className="text-gradient">Aritra Sarkar</span>
          </motion.h1>

          <motion.div className="hero-roles" variants={itemVariants}>
            <motion.span
              className="role typewriter-role"
              key={currentRoleIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <TypeWriter 
                text={roles[currentRoleIndex]} 
                speed={80}
                onComplete={handleTypewriterComplete}
              />
            </motion.span>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <h4>FIND WITH ME</h4>
            <div className="social-links">
              <motion.a
                href="https://www.linkedin.com/in/aritra-sarkar-a29078243"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-linkedin"></i>
              </motion.a>
              <motion.a
                href="https://github.com/Aritra-901"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-github"></i>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-image-wrapper">
            <div className="image-placeholder">
              <img 
                src="/photo.jpg" 
                alt="Profile" 
                className="profile-image"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
