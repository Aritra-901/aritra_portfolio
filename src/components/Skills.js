import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    SiReact, SiHtml5, SiCss3, SiJavascript, SiTailwindcss,
    SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql,
    SiGit, SiDocker, SiGithub, SiPostman
} from "react-icons/si";
import { FaCloud } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

import './Skills.css';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('frontend');

    const skillsData = {
        frontend: [
            { name: 'React.js', color: '#61dafb', icon: SiReact },
            { name: 'HTML5', color: '#E34C26', icon: SiHtml5 },
            { name: 'CSS3', color: '#1572B6', icon: SiCss3 },
            { name: 'JavaScript', color: '#F7DF1E', icon: SiJavascript },
            { name: 'Tailwind CSS', color: '#06B6D4', icon: SiTailwindcss }
        ],
        backend: [
            { name: 'Node.js', color: '#68A063', icon: SiNodedotjs },
            { name: 'Express.js', color: '#ffffff', icon: SiExpress },
            { name: 'REST API', color: '#00d4ff', icon: FaCloud },
        ],
        database: [
            { name: 'MongoDB', color: '#13AA52', icon: SiMongodb },
            { name: 'MySQL', color: '#00758F', icon: SiMysql },
            { name: 'PostgreSQL', color: '#336791', icon: SiPostgresql }
        ],
        tools: [
            { name: 'Git', color: '#F1502F', icon: SiGit },
            { name: 'Docker', color: '#2496ED', icon: SiDocker },
            { name: 'VS Code', color: '#007ACC', icon: VscCode },
            { name: 'GitHub', color: '#ffffff', icon: SiGithub },
            { name: 'Postman', color: '#FF6C37', icon: SiPostman }
        ]
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
        exit: {
            opacity: 0,
            y: 20,
            transition: { duration: 0.3 },
        },
    };

    const tabVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    };

    return (
        <section id="skills" className="skills">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    My Tech Stack
                </motion.h2>

                <motion.p
                    className="skills-subtitle"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    Here are the technologies and tools I use to bring ideas to life. From frontend
                    to backend, I work with modern frameworks and languages to build scalable solutions.
                </motion.p>

                <motion.div
                    className="skills-tabs"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {Object.keys(skillsData).map((tab) => (
                        <motion.button
                            key={tab}
                            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                            variants={tabVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </motion.button>
                    ))}
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        className="skills-grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {skillsData[activeTab].map((skill, index) => {
                            const IconComponent = skill.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="skill-card"
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -15,
                                        boxShadow: `0 20px 40px ${skill.color}40`,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="skill-icon"
                                        style={{ color: skill.color }}
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {skill.isCustom ? (
                                            <IconComponent size={48} color={skill.color} />
                                        ) : (
                                            <IconComponent size={48} />
                                        )}
                                    </motion.div>
                                    <h3 className="skill-name">{skill.name}</h3>
                                    <motion.div
                                        className="skill-bar"
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 0.8, delay: index * 0.05 }}
                                        style={{ backgroundColor: skill.color }}
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Skills;
