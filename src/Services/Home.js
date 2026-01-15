import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Users, Building, Rocket, TrendingUp, ArrowRight, Star, Zap, Shield, Target, ChevronDown, Code, Database, Cloud, MessageSquare, Layers, Server, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import '../Services/Home.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import axios from 'axios';

const threeFsImages = [
  '/creatives/Fast.png',
  '/creatives/Agile.png',
  '/creatives/Future.png'
];

// Desktop images (landscape)
const HERO_IMAGES = [
  { 
    label: 'Digital Transformation', 
    url: '/creatives/Home.png',
    title: 'Digital Transformation',
    subtitle: 'Transform your business with cutting-edge digital solutions'
  },
  { 
    label: 'Smart Sales Execution', 
    url: '/creatives/1.png',
    title: 'Smart Sales Execution',
    subtitle: 'Streamline your sales process with intelligent automation'
  },
  { 
    label: 'Next-Gen Solutions', 
    url: '/creatives/2.png',
    title: 'Next-Gen Solutions',
    subtitle: 'Future-ready technology solutions for modern businesses'
  }
];

// Mobile-specific images (portrait, content-related)
const MOBILE_HERO_IMAGES = [
  { 
    label: 'Digital Transformation', 
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Digital Transformation',
    subtitle: 'Transform your business with cutting-edge digital solutions',
    // description: 'Modernize your operations with AI-powered automation and cloud-native solutions.'
  },
  { 
    label: 'Smart Sales Execution', 
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    title: 'Smart Sales Execution',
    subtitle: 'Streamline your sales process with intelligent automation',
    // description: 'Track, analyze, and optimize your sales pipeline with real-time analytics.'
  },
  { 
    label: 'Next-Gen Solutions', 
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    title: 'Next-Gen Solutions',
    subtitle: 'Future-ready technology solutions for modern businesses',
    // description: 'React, Node.js, Python, and cloud technologies for robust solutions.'
  }
];

const services = [
  {
    image: '/creatives/Salespulse1.png',
    title: 'Sales Staff Management',
    desc: 'An app to track sales staff activities and manage their daily tasks, equipped with geofencing and real-time location tagging for improved visibility, accountability, and accurate data capture.',
    slug: 'sales-staff-management',
    icon: Target,
    color: '#2563eb'
  },
  {
    image: '/creatives/Techno-pulse.png',
    title: 'Technical Sales Management',
    desc: 'An app to track technical sales team activities and support assisted sales, equipped with geofencing and real-time location tagging for enhanced visibility, precise data capture, and effective coordination.',
    slug: 'technical-sales-management',
    icon: Zap,
    color: '#059669'
  },
  {
    image: '/creatives/e-pulse.png',
    title: 'E-Pulse',
    desc: 'A comprehensive HRMS solution to manage the complete employee lifecycle — from onboarding to payroll, attendance, leave, performance, and compliance — with real-time insights, automation, and seamless integration.',
    slug: 'hrms',
    icon: Users,
    color: '#dc2626'
  },
  {
    image: '/creatives/trade-pulse.png',
    title: 'Dealer App and Management',
    desc: 'A dealer app that offers complete visibility into dealer-specific data, enabling order placement, real-time tracking, and access to key business metrics — all in one seamless, user-friendly platform.',
    slug: 'dealer-apps',
    icon: Building,
    color: '#7c3aed'
  },
  {
    image: '/creatives/visits.png',
    title: 'Visit Management',
    desc: 'A visitor management system that keeps you informed and aware of all incoming vehicles and individuals, with real-time visibility and accurately tagged data for enhanced security, tracking, and reporting.',
    slug: 'visitor-apps',
    icon: Shield,
    color: '#ea580c'
  },
  {
    image: '/creatives/logistics.png',
    title: 'Logistics Management',
    desc: 'An all-in-one app to manage transporters and vehicles, providing real-time tracking, comprehensive operational control, and detailed data insights to streamline logistics, improve efficiency, and enhance fleet management.',
    slug: 'logistics-apps',
    icon: Rocket,
    color: '#0891b2'
  }
];

const clientTypes = [
  {
    icon: Rocket,
    title: 'Startups',
    description: 'We partner with Startups to build their initial product or a Minimum Viable Product (MVP). Our team can help startups bring their ideas to life and scale their business.',
    color: '#2563eb',
    stats: '50+ MVPs Built'
  },
  {
    icon: Users,
    title: 'SMEs',
    description: 'We serve SMEs with custom software solutions, including ERP systems, CRM systems, and business applications to address complex challenges.',
    color: '#059669',
    stats: '200+ SMEs Served'
  },
  {
    icon: Building,
    title: 'Enterprises',
    description: 'We assist large enterprises with process automation, supply chain solutions and emerging tech tools to streamline complex organizational structures.',
    color: '#dc2626',
    stats: '25+ Enterprises'
  }
];

const threeFsPrinciples = [
  {
    title: 'Fast',
    description: 'We operate with clear focus and precision, delivering fast deployments and quick iterations that adapt to your needs. Our approach ensures you get real, measurable results.',
    features: ['Rapid Deployment', 'Quick Iterations', 'Real-time Results'],
    color: '#2563eb'
  },
  {
    title: 'Flexible',
    description: 'Our solutions are built to evolve with your business, providing easy customization, scalability to support growth, and smooth integration with your current systems.',
    features: ['Easy Customization', 'Scalable Solutions', 'Seamless Integration'],
    color: '#059669'
  },
  {
    title: 'Future Ready',
    description: 'Built on modern technologies and powered by AI and machine learning, our platforms deliver flexibility, intelligence, and scalability for seamless growth.',
    features: ['AI-Powered', 'Modern Tech Stack', 'Smart Adaptation'],
    color: '#7c3aed'
  }
];

// Enhanced Tech Stack Data with logos
const techStackCategories = [
  {
    title: 'Web Development',
    icon: Code,
    color: '#2563eb',
    gradient: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
    technologies: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' }
    ]
  },
  {
    title: 'Mobile Development',
    icon: Zap,
    color: '#059669',
    gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
    technologies: [
      { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
      { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: '#02569B' },
      { name: 'Android', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', color: '#3DDC84' },
      { name: 'iOS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg', color: '#000000' }
    ]
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: '#dc2626',
    gradient: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
    technologies: [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
      { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', color: '#092E20' },
      { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: '#000000' }
    ]
  },
  {
    title: 'Databases',
    icon: Database,
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)',
    technologies: [
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' },
      { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: '#ea580c',
    gradient: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
    technologies: [
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', color: '#FF9900' },
      { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', color: '#0078D4' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5' }
    ]
  },
  {
    title: 'Tools & Services',
    icon: Layers,
    color: '#0891b2',
    gradient: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
    technologies: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#181717' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: '#007ACC' },
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: '#F24E1E' }
    ]
  }
];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentMobileImage, setCurrentMobileImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const heroY = useTransform(scrollYProgress, [0, 0.3], ['0%', '15%']);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload images to prevent blinking
  useEffect(() => {
    const imagePromises = [
      ...HERO_IMAGES.map(img => {
        const image = new Image();
        image.src = img.url;
        return image.decode();
      }),
      ...MOBILE_HERO_IMAGES.map(img => {
        const image = new Image();
        image.src = img.url;
        return image.decode();
      }),
      ...threeFsImages.map(src => {
        const image = new Image();
        image.src = src;
        return image.decode();
      }),
      ...services.map(service => {
        const image = new Image();
        image.src = service.image;
        return image.decode();
      })
    ];

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(err => {
        console.warn('Some images failed to preload:', err);
        setImagesLoaded(true);
      });
  }, []);

  // Stable image change with useCallback for desktop
  const changeImage = useCallback(() => {
    setCurrentImage(prev => (prev + 1) % HERO_IMAGES.length);
  }, []);

  // Mobile image change
  const changeMobileImage = useCallback(() => {
  setCurrentMobileImage(prev => {
    const nextIndex = (prev + 1) % MOBILE_HERO_IMAGES.length;
    // Preload next image before transition
    const nextImg = new Image();
    nextImg.src = MOBILE_HERO_IMAGES[nextIndex].url;
    return nextIndex;
  });
}, []);

  useEffect(() => {
    if (!imagesLoaded) return;
    
    if (isMobile) {
      const interval = setInterval(changeMobileImage, 4000);
      return () => clearInterval(interval);
    } else {
      const interval = setInterval(changeImage, 5000);
      return () => clearInterval(interval);
    }
  }, [imagesLoaded, isMobile, changeImage, changeMobileImage]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const targetElement = document.getElementById(sectionId);
    
    if (targetElement) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 65;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const timer = setTimeout(() => {
        scrollToSection(targetId);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [scrollToSection]);


const handleSubmit = useCallback((e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  
  const emailData = {
    to: "nextpulsetechnology@gmail.com",
    cc: [],
    subject: `New Business Inquiry from ${formData.get('fullName')} - ${formData.get('company')}`,
    body: `
Hello NextPulse Team,

You have received a new business inquiry from your website. Here are the details:

👤 Contact Information:
   • Full Name: ${formData.get('fullName')}
   • Work Email: ${formData.get('workEmail')}
   • Mobile: ${formData.get('mobile')}
   • Country: ${formData.get('country')}

🏢 Company Details:
   • Company: ${formData.get('company')}
   • Job Title: ${formData.get('jobTitle') || 'Not specified'}
   • Number of Employees: ${formData.get('employees')}

🎯 Interest & Requirements:
   • Interested In: ${formData.get('interest')}
   • Comments: ${formData.get('comments') || 'No additional comments'}

📧 Please respond to: ${formData.get('workEmail')}

Best regards,
NextPulse Contact Form System
    `,
  };

  axios
    .post('https://taskapi.blacktigercement.in/send-nextpulse-email', emailData)
    .then(() => {
      alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
      form.reset();
    })
    .catch((err) => {
      console.error("Failed to send email:", err);
      alert("Failed to send message. Please try again later or contact us directly.");
    });
}, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  const handleHeroButtonClick = useCallback((e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  }, [scrollToSection]);

  const handleImageChange = useCallback((index) => {
    if (isMobile) {
      setCurrentMobileImage(index);
    } else {
      setCurrentImage(index);
    }
  }, [isMobile]);

 const nextSlide = useCallback(() => {
  if (isMobile) {
    const nextIndex = (currentMobileImage + 1) % MOBILE_HERO_IMAGES.length;
    // Preload next image
    const nextImg = new Image();
    nextImg.src = MOBILE_HERO_IMAGES[nextIndex].url;
    setCurrentMobileImage(nextIndex);
  } else {
    setCurrentImage(prev => (prev + 1) % HERO_IMAGES.length);
  }
}, [isMobile, currentMobileImage]);

const prevSlide = useCallback(() => {
  if (isMobile) {
    const prevIndex = (currentMobileImage - 1 + MOBILE_HERO_IMAGES.length) % MOBILE_HERO_IMAGES.length;
    // Preload previous image
    const prevImg = new Image();
    prevImg.src = MOBILE_HERO_IMAGES[prevIndex].url;
    setCurrentMobileImage(prevIndex);
  } else {
    setCurrentImage(prev => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  }
}, [isMobile, currentMobileImage]);

  // Show loading state until images are loaded
  if (!imagesLoaded) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />

      {/* Hero Section */}
      {isMobile ? (
        // Mobile Carousel View with Portrait Images
        <section id="hero" className="hero-mobile">
    <div className="hero-carousel">
      {/* Preload all background images */}
      {MOBILE_HERO_IMAGES.map((img, index) => (
        <div
          key={`bg-${index}`}
          className="hero-slide-background"
          style={{
            backgroundImage: `url(${img.url})`,
            opacity: index === currentMobileImage ? 1 : 0,
            zIndex: index === currentMobileImage ? 1 : 0
          }}
        />
      ))}

      <div className="hero-overlay"></div>
      
      <AnimatePresence mode="wait" >
        <motion.div
          key={currentMobileImage}
          className="hero-slide-content"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="hero-mobile-content">
            <motion.div
              className="hero-mobile-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {MOBILE_HERO_IMAGES[currentMobileImage].label}
            </motion.div>

            <motion.h1
              className="hero-mobile-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{fontSize:'35px'}}
            >
              {MOBILE_HERO_IMAGES[currentMobileImage].title}
            </motion.h1>

            <motion.p
              className="hero-mobile-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {MOBILE_HERO_IMAGES[currentMobileImage].subtitle}
            </motion.p>

            <motion.p
              className="hero-mobile-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {MOBILE_HERO_IMAGES[currentMobileImage].description}
            </motion.p>

            <motion.div
              className="hero-mobile-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              
            >
              <motion.a
                href="#services"
                className="btn primary mobile-btn"
                onClick={(e) => handleHeroButtonClick(e, 'services')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Explore Solutions</span>
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#contact"
                className="btn secondary mobile-btn"
                onClick={(e) => handleHeroButtonClick(e, 'contact')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get Started</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Carousel Navigation */}
      <div className="carousel-nav">
        <button 
          className="carousel-btn prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button 
          className="carousel-btn next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  </section>
      ) : (
        // Desktop View (unchanged with original landscape images)
        <motion.section 
          id="hero" 
          className="hero" 
          style={{ 
            backgroundImage: `url(${HERO_IMAGES[currentImage].url})`,
            y: heroY
          }}
          key={currentImage}
        >
          <div className="hero-overlay"></div>
          
          <div className="hero-content">
            <motion.div
              className="hero-headers"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {HERO_IMAGES.map((img, index) => (
                <motion.button
                  key={index}
                  className={`hero-tab ${index === currentImage ? 'active' : ''}`}
                  onClick={() => handleImageChange(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  {img.label}
                </motion.button>
              ))}
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The next wave of business transformation
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Your end-to-end digital partner for enterprise transformation.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="#services"
                className="btn primary"
                onClick={(e) => handleHeroButtonClick(e, 'services')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <span>Explore Our Solutions</span>
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                className="btn secondary"
                onClick={(e) => handleHeroButtonClick(e, 'contact')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <span>Schedule a Free Consultation</span>
              </motion.a>
            </motion.div>

            <motion.div
              className="scroll-indicator"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              onClick={() => scrollToSection('about')}
            >
              <ChevronDown size={24} />
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Rest of your sections remain unchanged */}
      {/* 3F's Section */}
      <section id="about" className="section mt-6">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="section-title">We Believe in 3F's</h2>
            <p className="section-subtitle">Our core principles that drive everything we do</p>
          </motion.div>

          <div className="grid-3">
            {threeFsPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -4 }}
              >
                <div className="card-image">
                  <img 
                    src={threeFsImages[index]} 
                    alt={principle.title}
                    loading="lazy"
                    onLoad={(e) => e.target.style.opacity = 1}
                    style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                  />
                </div>
                
                <div className="card-content">
                  <h3 style={{ color: principle.color }}>{principle.title}</h3>
                  <p>{principle.description}</p>
                  
                  <div className="features">
                    {principle.features.map((feature, idx) => (
                      <span
                        key={feature}
                        className="feature-tag"
                        style={{ borderColor: principle.color }}
                      >
                        <Star size={12} />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="section section-gray">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="section-title">Whom Do We Work For?</h2>
            <p className="section-subtitle">
              We have years of expertise in building digital transformation solutions for various clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {clientTypes.map((client, index) => {
              const IconComponent = client.icon;
              return (
                <motion.div
                  key={client.title}
                  className="client-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -6 }}
                >
                  <div className="client-icon" style={{ backgroundColor: client.color }}>
                    <IconComponent size={28} color="white" />
                  </div>
                  
                  <div className="client-stats" style={{ color: client.color }}>
                    {/* {client.stats} */}
                  </div>
                  
                  <h3 className="client-title" style={{ color: client.color }}>
                    {client.title}
                  </h3>
                  
                  <p className="client-description">
                    {client.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle">
              Digital tools that streamline sales, technical support, dealer engagement, and human resource management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  className="service-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -6 }}
                >
                  <div className="service-header">
                    <div className="service-icon" style={{ backgroundColor: service.color }}>
                      <IconComponent size={24} color="white" />
                    </div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="service-image"
                      loading="lazy"
                      onLoad={(e) => e.target.style.opacity = 1}
                      style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
                    />
                  </div>
                  
                  <div className="service-content">
                    <h3 style={{ color: service.color }}>{service.title}</h3>
                    <p>{service.desc}</p>
                    
                    <Link 
                      to={`/services/${service.slug}`} 
                      className="btn-link"
                      style={{ color: service.color }}
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Tech Stack Section */}
      <section id="tech-stack" className="section tech-stack-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="section-title">Our Tech Stack</h2>
            <p className="section-subtitle">
              Cutting-edge technologies powering our innovative solutions
            </p>
          </motion.div>

          <div className="tech-stack-grid">
            {techStackCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  className="tech-stack-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="tech-stack-header">
                    <motion.div 
                      className="tech-stack-icon-wrapper"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div 
                        className="tech-stack-icon"
                        style={{ background: category.gradient }}
                      >
                        <IconComponent size={28} color="white" />
                      </div>
                    </motion.div>
                    <div className="tech-stack-title">
                      <h3 style={{ color: category.color }}>{category.title}</h3>
                      <div className="tech-count">{category.technologies.length} Technologies</div>
                    </div>
                  </div>
                  
                  <div className="tech-stack-technologies">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        className="tech-item"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.1 + techIndex * 0.05
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -5,
                          boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                        }}
                      >
                        <div className="tech-logo">
                          <img 
                            src={tech.logo} 
                            alt={tech.name}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div 
                            className="tech-fallback"
                            style={{ 
                              backgroundColor: tech.color,
                              display: 'none'
                            }}
                          >
                            {tech.name.charAt(0)}
                          </div>
                        </div>
                        <div className="tech-name">{tech.name}</div>
                        <div className="tech-shimmer"></div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Tech Stats */}
          <motion.div
            className="tech-stats"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="tech-stat-item">
              <div className="tech-stat-number">20+</div>
              <div className="tech-stat-label">Technologies</div>
            </div>
            <div className="tech-stat-item">
              <div className="tech-stat-number">6</div>
              <div className="tech-stat-label">Categories</div>
            </div>
            <div className="tech-stat-item">
              <div className="tech-stat-number">100%</div>
              <div className="tech-stat-label">Modern Stack</div>
            </div>
            <div className="tech-stat-item">
              <div className="tech-stat-number">24/7</div>
              <div className="tech-stat-label">Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
<section id="contact" className="section">
  <div className="container">
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="section-title">Let's Build Something Amazing</h2>
      <p className="section-subtitle">Ready to transform your business? Let's start the conversation.</p>
    </motion.div>

    <div className="contact-wrapper">
      <motion.form 
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="form-grid">
          {/* Full Name */}
          <div className="form-group">
            <label className="form-label">
              Full name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              className="form-input"
              placeholder="Enter your full name"
            />
          </div>

          {/* Work Email */}
          <div className="form-group">
            <label className="form-label">
              Work email <span className="required">*</span>
            </label>
            <input
              type="email"
              name="workEmail"
              required
              className="form-input"
              placeholder="your.email@company.com"
            />
          </div>

          {/* Mobile Number */}
          <div className="form-group">
            <label className="form-label">
              Mobile number<span className="required">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              required
              className="form-input"
              placeholder="+1 234 567 8900"
            />
          </div>

          {/* Country */}
          <div className="form-group">
            <label className="form-label">
              Country <span className="required">*</span>
            </label>
            <select
              name="country"
              required
              className="form-select"
            >
              <option value="">Select your country</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Sweden">Sweden</option>
              <option value="Norway">Norway</option>
              <option value="Denmark">Denmark</option>
              <option value="Singapore">Singapore</option>
              <option value="Japan">Japan</option>
              <option value="South Korea">South Korea</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="Brazil">Brazil</option>
              <option value="Mexico">Mexico</option>
              <option value="Argentina">Argentina</option>
              <option value="South Africa">South Africa</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Kenya">Kenya</option>
              <option value="UAE">United Arab Emirates</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Job Title */}
          <div className="form-group">
            <label className="form-label">Job title</label>
            <input
              type="text"
              name="jobTitle"
              className="form-input"
              placeholder="e.g., CEO, CTO, Manager"
            />
          </div>

          {/* Company */}
          <div className="form-group">
            <label className="form-label">
              Company <span className="required">*</span>
            </label>
            <input
              type="text"
              name="company"
              required
              className="form-input"
              placeholder="Your company name"
            />
          </div>

          {/* Number of Employees */}
          <div className="form-group">
            <label className="form-label">
              Number of employees <span className="required">*</span>
            </label>
            <select
              name="employees"
              required
              className="form-select"
            >
              <option value="">Select company size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="501-1000">501-1000 employees</option>
              <option value="1001-5000">1001-5000 employees</option>
              <option value="5000+">5000+ employees</option>
            </select>
          </div>

          {/* I am interested in */}
          <div className="form-group">
            <label className="form-label">
              I am interested in <span className="required">*</span>
            </label>
            <select
              name="interest"
              required
              className="form-select"
            >
              <option value="">Select your interest</option>
              <option value="Sales Management Solutions">Sales Management Solutions</option>
              <option value="HRMS Implementation">HRMS Implementation</option>
              <option value="Dealer Management System">Dealer Management System</option>
              <option value="Visitor Management System">Visitor Management System</option>
              <option value="Fleet & Logistics Management">Fleet & Logistics Management</option>
              <option value="Custom Software Development">Custom Software Development</option>
              <option value="Digital Transformation Consulting">Digital Transformation Consulting</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Web Application Development">Web Application Development</option>
              <option value="Enterprise Solutions">Enterprise Solutions</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        
        {/* Comments */}
        <div className="form-group">
          <label className="form-label">Comments</label>
          <textarea
            name="comments"
            rows="4"
            className="form-input"
            placeholder="Tell us more about your project requirements or any specific questions you have..."
          ></textarea>
        </div>

        <button type="submit" className="btn primary full-width" style={{marginTop:"10px"}}>
          <span>Send Message</span>
          <ArrowRight size={18} />
        </button>
      </motion.form>

      <motion.div 
        className="contact-visual"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <img
          src="https://media.giphy.com/media/Y4ak9Ki2GZCbJxAnJD/giphy.gif"
          alt="Contact Animation"
          className="contact-gif"
          loading="lazy"
        />
      </motion.div>
    </div>
  </div>
</section>

      <Footer />
    </>
  );
}

export default Home;