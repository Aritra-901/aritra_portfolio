import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Target, Zap, Users, Building, Shield, Truck, Star, ArrowRight, CheckCircle } from "lucide-react";
import Footer from "../Services/Footer";
import Navbar from "../Services/Navbar";


const services = [
  {
    id: 1,
    title: "Sales Staff Activity & Task Management App",
    shortTitle: "SalesPulse",
    image: "../creatives/Salespulse.png",
    icon: Target,
    color: "#2563eb",
    gradient: "from-blue-600 to-blue-500",
    category: "Sales Management",
    features: [
      "Real-time sales activity tracking",
      "Geofencing for location monitoring", 
      "GPS-enabled visit verification",
      "Task prioritization & scheduling",
      "Performance analytics dashboard",
      "Route optimization tools",
      "Team productivity insights"
    ],
    benefits: [
      "Increase sales team productivity by 40%",
      "Improve visit accuracy with GPS tracking",
      "Streamline daily task management"
    ]
  },
  {
    id: 2,
    title: "Technical Sales & Assisted Sales App",
    shortTitle: "TechnoPulse",
    image: "../creatives/Techno.png",
    icon: Zap,
    color: "#059669",
    gradient: "from-emerald-600 to-emerald-500",
    category: "Technical Sales",
    features: [
      "Technical demo management",
      "Assisted sales workflows",
      "Real-time location tagging",
      "Customer engagement tracking",
      "Technical documentation access",
      "Complex sales coordination",
      "Expert knowledge sharing"
    ],
    benefits: [
      "Close complex deals faster",
      "Improve technical support efficiency", 
      "Enhance customer satisfaction"
    ]
  },
  {
    id: 3,
    title: "Human Resource Management System",
    shortTitle: "E-Pulse HRMS",
    image: "../creatives/e-pulse.png",
    icon: Users,
    color: "#dc2626",
    gradient: "from-red-600 to-red-500",
    category: "HR Management",
    features: [
      "Complete employee lifecycle management",
      "Automated payroll processing",
      "Performance management system",
      "Leave & attendance tracking",
      "Compliance management",
      "Employee self-service portal",
      "Advanced HR analytics"
    ],
    benefits: [
      "Reduce HR processing time by 60%",
      "Ensure 100% compliance",
      "Improve employee satisfaction"
    ]
  },
  {
    id: 4,
    title: "Dealer Management Application",
    shortTitle: "TradePulse",
    image: "../creatives/trade.png",
    icon: Building,
    color: "#7c3aed",
    gradient: "from-violet-600 to-purple-500",
    category: "Dealer Relations",
    features: [
      "Real-time order management",
      "Inventory visibility dashboard",
      "Payment status tracking",
      "Business metrics analytics",
      "Direct communication tools",
      "Order history & trends",
      "Performance benchmarking"
    ],
    benefits: [
      "Reduce order processing time",
      "Improve dealer satisfaction",
      "Increase order accuracy"
    ]
  },
  {
    id: 5,
    title: "Visitor Management System",
    shortTitle: "VisitPulse",
    image: "../creatives/visits.png",
    icon: Shield,
    color: "#ea580c",
    gradient: "from-orange-600 to-orange-500",
    category: "Security Management",
    features: [
      "Digital visitor registration",
      "Photo & ID verification",
      "Real-time visitor tracking",
      "Security alert system",
      "Visitor analytics & reports",
      "Access control integration",
      "Emergency evacuation support"
    ],
    benefits: [
      "Enhance security protocols",
      "Streamline visitor experience",
      "Maintain detailed audit trails"
    ]
  },
  {
    id: 6,
    title: "Fleet & Vehicle Management System",
    shortTitle: "LogisticsPulse", 
    image: "../creatives/logistics.png",
    icon: Truck,
    color: "#0891b2",
    gradient: "from-cyan-600 to-cyan-500",
    category: "Logistics",
    features: [
      "Real-time GPS fleet tracking",
      "Route optimization engine",
      "Fuel consumption monitoring",
      "Maintenance scheduling",
      "Driver performance analytics",
      "Delivery status updates",
      "Cost optimization tools"
    ],
    benefits: [
      "Reduce logistics costs by 30%",
      "Improve delivery efficiency",
      "Optimize fleet utilization"
    ]
  }
];

export default function EnterpriseSolution() {
  const [activeId, setActiveId] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[70vh] bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-600 flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-purple-600/80 to-violet-600/80"></div>
        <div className="relative z-10 text-center text-white max-w-4xl px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-white/20 border border-white/30 px-6 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              Our Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Products & Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 font-light leading-relaxed max-w-3xl mx-auto">
              Comprehensive digital solutions designed to transform your business operations and drive growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative applications built to solve real-world business challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-start">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isActive = activeId === service.id;

              return (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group h-auto"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ y: -8 }}
                  layout
                >
                  {/* Top gradient line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}></div>

                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
                    <div className="relative flex-shrink-0">
                      <div 
                        className={`absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center z-10 shadow-lg`}
                      >
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-32 h-32 object-contain rounded-xl bg-gray-50 p-4"
                      />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <span 
                        className="text-sm font-semibold uppercase tracking-wide mb-2 block"
                        style={{ color: service.color }}
                      >
                        {service.category}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                        {service.shortTitle}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.title}
                      </p>
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-600 text-sm">
                          <Star size={16} style={{ color: service.color }} className="flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Features Button */}
                  <div className="mb-4">
                    <button
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 border-2 rounded-xl font-semibold transition-all duration-300 hover:bg-opacity-10"
                      style={{ 
                        borderColor: service.color, 
                        color: service.color,
                        backgroundColor: isActive ? `${service.color}10` : 'transparent'
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggle(service.id);
                      }}
                    >
                      <span>View Features</span>
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>
                  </div>

                  {/* Expandable Features Content */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? 0 : -24
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: [0.04, 0.62, 0.23, 0.98],
                      opacity: { duration: isActive ? 0.4 : 0.2 },
                      height: { duration: isActive ? 0.4 : 0.25 }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 border-t border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-700 mb-4">Core Features</h4>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ 
                              opacity: isActive ? 1 : 0, 
                              x: isActive ? 0 : -20 
                            }}
                            transition={{ 
                              duration: isActive ? 0.3 : 0.2, 
                              delay: isActive ? idx * 0.05 : 0,
                              ease: "easeOut"
                            }}
                          >
                            <CheckCircle size={16} style={{ color: service.color }} className="flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}