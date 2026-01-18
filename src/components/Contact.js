import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="contact-wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Contact With Me</h2>
            <p className="contact-subtitle">Share your thoughts...</p>
          </motion.div>

          <div className="contact-content">
            <motion.div
              className="contact-info"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 variants={itemVariants}>Get in Touch</motion.h3>
              <motion.p className="info-text" variants={itemVariants}>
                I am available for web related works. Connect with me via email and let's discuss your project.
              </motion.p>

              <motion.div className="contact-details" variants={containerVariants}>
                <motion.div
                  className="detail-item"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:aritras1999@gmail.com">aritras1999@gmail.com</a>
                  </div>
                </motion.div>

                <motion.div
                  className="detail-item"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <i className="fas fa-phone"></i>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+918240858582">+91 8240858582</a>
                  </div>
                </motion.div>

                <motion.div
                  className="detail-item"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Location</h4>
                    <p>India</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="contact-social"
                variants={itemVariants}
              >
                <h4>FIND WITH ME</h4>
                <div className="social-icons">
                  <motion.a
                    href="https://www.linkedin.com/in/aritra-sarkar-a29078243"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </motion.a>
                  <motion.a
                    href="https://github.com/Aritra-901"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-github"></i>
                  </motion.a>
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-twitter"></i>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 className="form-title" variants={formItemVariants}>
                Contact Form
              </motion.h3>

              <motion.div className="form-row" variants={formItemVariants}>
                <motion.div
                  className="form-group"
                  whileHover={{ backgroundColor: 'rgba(0, 212, 255, 0.05)' }}
                >
                  <label>First Name <span className="required">*</span></label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
                <motion.div
                  className="form-group"
                  whileHover={{ backgroundColor: 'rgba(0, 212, 255, 0.05)' }}
                >
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="form-group"
                variants={formItemVariants}
                whileHover={{ backgroundColor: 'rgba(0, 212, 255, 0.05)' }}
              >
                <label>Email <span className="required">*</span></label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div
                className="form-group"
                variants={formItemVariants}
                whileHover={{ backgroundColor: 'rgba(0, 212, 255, 0.05)' }}
              >
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div
                className="form-group"
                variants={formItemVariants}
                whileHover={{ backgroundColor: 'rgba(0, 212, 255, 0.05)' }}
              >
                <label>Your Message <span className="required">*</span></label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="btn-primary"
                variants={formItemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(0, 212, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
