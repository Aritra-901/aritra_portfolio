import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Works.css';

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'University Course Finder',
      description: 'I developed UniAdvicer.com as a fully responsive web platform that guides students in choosing the right university and course.',
      category: 'web',
      techs: ['HTML', 'JavaScript', 'PHP'],
      link: '#'
    },
    {
      id: 2,
      title: 'Educational Website',
      description: 'I developed itpanthiya.com as an educational website for Tutor Kosala Rajapaksha to provide IT lessons and tutorials.',
      category: 'web',
      techs: ['HTML', 'JavaScript', 'PHP'],
      link: '#'
    },
    {
      id: 3,
      title: 'Digital Medical Records Management System',
      description: 'Full-stack Digital Medical Records Management System website with student integration and dashboard.',
      category: 'web',
      techs: ['React', 'Next.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 4,
      title: 'Food Delivery System',
      description: 'Full-stack food delivery website with payment integration, delivery management, and admin dashboard.',
      category: 'web',
      techs: ['HTML', 'MySQL', 'PHP'],
      link: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const filterVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <section id="works" className="works">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className="works-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          A showcase of my latest projects and creations
        </motion.p>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
            variants={filterVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Projects
          </motion.button>
          <motion.button
            className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveFilter('web')}
            variants={filterVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Web Development
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                whileHover={{
                  y: -15,
                  boxShadow: '0 30px 60px rgba(0, 212, 255, 0.2)',
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="project-image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="image-placeholder">
                    <i className="fas fa-image"></i>
                  </div>
                </motion.div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-techs">
                    {project.techs.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="tech-tag"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 212, 255, 0.3)' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    className="project-link"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    Explore <i className="fas fa-arrow-right"></i>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Works;
