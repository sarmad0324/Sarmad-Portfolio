"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaRobot, FaLaptopCode, FaRocket, FaArrowRight } from 'react-icons/fa';
import { useSectionInView } from '@/lib/useInView';

const ServicesSection = () => {
  const { ref } = useSectionInView("#services", 0.5);
  
  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      problem: "Need a fast, scalable web application?",
      solution: "Custom web applications built with React, Next.js, Node.js, and modern frameworks. Tailored to your business needs.",
      benefit: "Fast, responsive, and scalable solutions that grow with your business",
      delay: 0.1
    },
    {
      icon: FaMobile,
      title: "Mobile App Development",
      problem: "Want to reach customers on iOS and Android?",
      solution: "Native and cross-platform mobile apps using React Native, delivering seamless user experiences across all devices.",
      benefit: "High-performance mobile apps that engage users and drive conversions",
      delay: 0.2
    },
    {
      icon: FaRobot,
      title: "AI Integration & Automation",
      problem: "Looking to automate workflows and leverage AI?",
      solution: "AI solutions and workflow automation using Python and machine learning. Transform your business processes.",
      benefit: "Enhanced efficiency, reduced costs, and data-driven decision making",
      delay: 0.3
    },
    {
      icon: FaLaptopCode,
      title: "Remote Developer",
      problem: "Need dedicated development expertise?",
      solution: "Remote development services that integrate seamlessly with your team. Flexible, committed, and results-driven.",
      benefit: "Extended team capability without the overhead of full-time hires",
      delay: 0.4
    }
  ];

  return (
    <section ref={ref} id="services" className="px-6 py-20 md:py-32 relative overflow-hidden bg-bgWarm dark:bg-darkGray1">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-textDark dark:text-white">
            Services That <span className="text-primary">Drive Results</span>
          </h2>
          <p className="text-xl text-textDark/70 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive development solutions tailored to help your business thrive in the digital age
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: service.delay,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-8 bg-white dark:bg-darkGray2 rounded-2xl border border-borderGray dark:border-darkGray3 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-xl">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="text-primary group-hover:text-white text-xl transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-textDark dark:text-white">
                      {service.title}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <p className="text-sm font-semibold text-primary mb-1">Problem:</p>
                        <p className="text-textDark/70 dark:text-gray-400 text-sm">{service.problem}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-secondary mb-1">Solution:</p>
                        <p className="text-textDark/70 dark:text-gray-400">{service.solution}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-secondary mb-1">Benefit:</p>
                        <p className="text-textDark/70 dark:text-gray-400 text-sm">{service.benefit}</p>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <motion.a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group/link"
                      whileHover={{ x: 5 }}
                    >
                      <span>Get a Quote</span>
                      <FaArrowRight className="text-sm group-hover/link:translate-x-1 transition-transform" />
                    </motion.a>
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
          className="text-center"
        >
          <div className="p-8 md:p-12 bg-white dark:bg-darkGray2 rounded-2xl border border-borderGray dark:border-darkGray3 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-textDark dark:text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-textDark/70 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you build solutions that drive real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
                <FaRocket className="text-lg" />
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-darkGray1 text-primary border-2 border-primary rounded-lg font-semibold text-lg hover:bg-primary/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Studies
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
