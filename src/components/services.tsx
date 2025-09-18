"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaRobot, FaGlobe, FaLaptopCode, FaRocket, FaLightbulb } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { useSectionInView } from '@/lib/useInView';
import { BoxReveal } from './magicui/box-reveal';

const ServicesSection = () => {
  const { ref } = useSectionInView("#services", 0.5);
  
  const services = [
    {
      icon: FaCode,
      title: "Custom Web Development",
      description: "Building custom web applications using modern frameworks like React, Next.js, Node.js, and Angular (and even WordPress for CMS needs). We tailor each project to client requirements, delivering fast, responsive, and scalable web solutions.",
      color: "from-primary to-primary/70",
      delay: 0.1
    },
    {
      icon: FaMobile,
      title: "Mobile App Development",
      description: "Developing mobile applications for both Android and iOS using React Native as well as native tools (Android Studio, Xcode). We create smooth, high-performance mobile apps that offer a seamless user experience across devices.",
      color: "from-secondary to-secondary/70",
      delay: 0.2
    },
    {
      icon: FaRobot,
      title: "AI Integration & Automation",
      description: "Implementing AI solutions and workflow automation using Python and machine learning. We integrate intelligent automation into products and business processes – from predictive analytics to process optimization – to enhance efficiency and innovation.",
      color: "from-accent to-accent/70",
      delay: 0.3
    },
    {
      icon: FaLaptopCode,
      title: "Remote Development",
      description: "As a remote developer, I deliver dedicated development expertise—working seamlessly with your team to build, iterate, and scale your product with flexibility and full commitment.",
      color: "from-success to-success/70",
      delay: 0.4
    }
  ];

  return (
    <section ref={ref} id="services" className="px-6 py-20 relative overflow-hidden bg-gradient-to-br from-light1 via-light2 to-light3 dark:from-darkBlack dark:via-darkGray1 dark:to-darkGray2">
      {/* Animated background */}
      <div className="absolute inset-0 particle-bg opacity-30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl sm:text-6xl font-bold mb-6 relative inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="holographic">Services</span>
            <motion.div
              className="absolute -top-4 -right-4 text-2xl"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <HiSparkles className="text-accent" />
            </motion.div>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Transforming ideas into digital reality with cutting-edge technology and creative solutions
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: service.delay,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-8 rounded-3xl glass-morphism hover:glass-morphism-dark transition-all duration-500 overflow-hidden border border-white/20 hover:border-white/40">
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Icon with floating animation */}
                  <motion.div
                    className="relative z-10 mb-6"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 glow-box`}>
                      <IconComponent className="text-2xl text-white" />
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <BoxReveal boxColor="#6366F1" duration={0.5} delay={service.delay + 0.2}>
                      <motion.h3 
                        className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {service.title}
                      </motion.h3>
                    </BoxReveal>
                    
                    <BoxReveal boxColor="#8B5CF6" duration={0.5} delay={service.delay + 0.4}>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {service.description}
                      </p>
                    </BoxReveal>
                    
                    {/* CTA Button */}
                    <motion.a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary hover:to-secondary text-primary hover:text-white border border-primary/30 hover:border-transparent transition-all duration-300 group-hover:scale-105 hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Let's Talk</span>
                      <FaRocket className="text-sm group-hover:animate-bounce" />
                    </motion.a>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <HiSparkles className="text-2xl text-primary" />
                    </motion.div>
                  </div>
                  
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} blur-xl opacity-20`}></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="p-8 rounded-3xl glass-morphism border border-white/20 max-w-4xl mx-auto">
            <motion.h3 
              className="text-3xl font-bold mb-4 holographic"
              whileHover={{ scale: 1.05 }}
            >
              Ready to Start Your Project?
            </motion.h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Let's turn your vision into reality with cutting-edge technology and innovative solutions.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-primary via-secondary to-accent text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLightbulb className="animate-pulse" />
              Get Started Today
              <FaRocket className="group-hover:animate-bounce" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;