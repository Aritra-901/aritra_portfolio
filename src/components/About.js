import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    SiReact, SiNodedotjs, SiPython, SiMongodb, SiDocker,
    SiGithub, SiGit, SiJavascript, SiHtml5, SiCss3,
    SiNpm, SiBootstrap, SiExpress, SiFigma,
    SiLinux, SiFirebase, SiPostgresql, SiMysql, SiTailwindcss
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import './About.css';

const Counter = ({ target, duration = 2.5 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const hasStarted = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted.current) {
                    hasStarted.current = true;
                    let start = 0;
                    const frameCount = duration * 60;
                    const increment = target / frameCount;
                    
                    const interval = setInterval(() => {
                        start += increment;
                        if (start >= target) {
                            setCount(target);
                            clearInterval(interval);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 1000 / 60);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, [target, duration]);

    return <span ref={countRef}>{count}</span>;
};

const About = () => {
    const techIcons = [
        { icon: SiReact, color: '#61dafb', label: 'React' },
        { icon: SiNodedotjs, color: '#68A063', label: 'Node.js' },
        { icon: SiPython, color: '#3776AB', label: 'Python' },
        { icon: SiMongodb, color: '#13AA52', label: 'MongoDB' },
        { icon: SiDocker, color: '#2496ED', label: 'Docker' },
        { icon: SiGithub, color: '#ffffff', label: 'GitHub' },
        { icon: SiGit, color: '#F1502F', label: 'Git' },
        { icon: SiJavascript, color: '#F7DF1E', label: 'JavaScript' },
        { icon: SiHtml5, color: '#E34C26', label: 'HTML5' },
        { icon: SiCss3, color: '#1572B6', label: 'CSS3' },
        { icon: SiNpm, color: '#CB3837', label: 'NPM' },
        { icon: SiBootstrap, color: '#7952B3', label: 'Bootstrap' },
        { icon: SiExpress, color: '#ffffff', label: 'Express' },
        { icon: SiFigma, color: '#F24E1E', label: 'Figma' },
        { icon: FaCode, color: '#007ACC', label: 'VS Code' },
        { icon: SiLinux, color: '#FCC624', label: 'Linux' },
        { icon: SiFirebase, color: '#FFCA28', label: 'Firebase' },
        { icon: SiPostgresql, color: '#336791', label: 'PostgreSQL' },
        { icon: SiMysql, color: '#00758F', label: 'MySQL' },
        { icon: SiTailwindcss, color: '#06B6D4', label: 'Tailwind' }
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-content">
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="globe-container">
                            <motion.div
                                className="rotating-globe"
                                animate={{ 
                                    rotateX: [0, 360],
                                    rotateY: [0, 360],
                                    rotateZ: [0, 360]
                                }}
                                transition={{ 
                                    duration: 30, 
                                    repeat: Infinity, 
                                    ease: "linear"
                                }}
                            >
                                {techIcons.map((tech, index) => {
                                    const IconComponent = tech.icon;
                                    const angle = (index / techIcons.length) * 360;
                                    const radius = 150;
                                    
                                    return (
                                        <div
                                            key={index}
                                            className="globe-icon"
                                            style={{
                                                transform: `rotateY(${angle}deg) rotateX(${Math.random() * 60 - 30}deg) translateZ(${radius}px)`,
                                            }}
                                        >
                                            <IconComponent size={45} color={tech.color} />
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="about-title"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            About Me
                        </motion.h2>
                        <motion.p
                            className="about-description"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            I'm a passionate developer with expertise in creating robust, scalable
                            applications. My journey in software development has equipped me with a deep
                            understanding of both frontend and backend technologies.
                        </motion.p>
                        <motion.p
                            className="about-description"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            I believe in writing clean, maintainable code and creating user experiences that
                            are both beautiful and functional. Every project is an opportunity to learn,
                            innovate, and push boundaries.
                        </motion.p>
                        <motion.div
                            className="about-stats"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="stat"
                                whileHover={{ scale: 1.05, y: -8 }}
                            >
                                <div className="stat-number">
                                    <Counter target={10} duration={2.5} />+
                                </div>
                                <p>Projects Completed</p>
                            </motion.div>
                            <motion.div
                                className="stat"
                                whileHover={{ scale: 1.05, y: -8 }}
                            >
                                <div className="stat-number">
                                    <Counter target={3} duration={1.5} />+
                                </div>
                                <p>Years Experience</p>
                            </motion.div>
                            <motion.div
                                className="stat"  
                                whileHover={{ scale: 1.05, y: -8 }}
                            >
                                <div className="stat-number">
                                    <Counter target={12} duration={2} />+
                                </div>
                                <p>Technologies</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
