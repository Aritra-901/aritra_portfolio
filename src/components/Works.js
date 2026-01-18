import React, { useState } from 'react';
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

  return (
    <section id="works" className="works">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="works-subtitle">A showcase of my latest projects and creations</p>

        <div className="filter-buttons">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveFilter('web')}
          >
            Web Development
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <i className="fas fa-image"></i>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-techs">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  Explore <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
