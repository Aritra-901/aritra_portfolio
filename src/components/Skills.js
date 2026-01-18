import React, { useState } from 'react';
import { SiExpress } from "react-icons/si";
import './Skills.css';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('frontend');

    const skillsData = {
        frontend: [
            { name: 'React.js', level: 'Advanced', color: '#61dafb', icon: 'fab fa-react' },
            { name: 'HTML5', level: 'Expert', color: '#E34C26', icon: 'fab fa-html5' },
            { name: 'CSS3', level: 'Expert', color: '#1572B6', icon: 'fab fa-css3-alt' },
            { name: 'JavaScript', level: 'Advanced', color: '#F7DF1E', icon: 'fab fa-js-square' },
            { name: 'Tailwind CSS', level: 'Advanced', color: '#06B6D4', icon: 'fas fa-wind' }
        ],
        backend: [
            { name: 'Node.js', level: 'Advanced', color: '#68A063', icon: 'fab fa-node' },
            { name: 'Express.js', level: 'Advanced', color: '#ffffff', icon: 'express' },
            { name: 'REST API', level: 'Expert', color: '#00d4ff', icon: 'fas fa-cloud' },
        ],
        database: [
            { name: 'MongoDB', level: 'Advanced', color: '#13AA52', icon: 'fas fa-database' },
            { name: 'MySQL', level: 'Expert', color: '#00758F', icon: 'fas fa-database' },
            // { name: 'Firebase', level: 'Advanced', color: '#FFCA28', icon: 'fas fa-fire' },
            { name: 'PostgreSQL', level: 'Advanced', color: '#336791', icon: 'fas fa-database' }
        ],
        tools: [
            { name: 'Git', level: 'Advanced', color: '#F1502F', icon: 'fab fa-git-alt' },
            { name: 'Docker', level: 'Intermediate', color: '#2496ED', icon: 'fab fa-docker' },
            { name: 'VS Code', level: 'Expert', color: '#007ACC', icon: 'fas fa-code' },
        ]
    };

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">My Tech Stack</h2>
                <p className="skills-subtitle">
                    Here are the technologies and tools I use to bring ideas to life. From frontend
                    to backend, I work with modern frameworks and languages to build scalable solutions.
                </p>

                <div className="skills-tabs">
                    {Object.keys(skillsData).map((tab) => (
                        <button
                            key={tab}
                            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="skills-grid">
                    {skillsData[activeTab].map((skill, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-icon" style={{ color: skill.color }}>
                                {skill.icon === "express" ? (
                                    <SiExpress size={32} />
                                ) : (
                                    <i className={skill.icon}></i>
                                )}
                            </div>
                            <h3 className="skill-name">{skill.name}</h3>
                            <p className="skill-level">{skill.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
