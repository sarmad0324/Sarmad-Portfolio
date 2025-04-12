"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Fade } from 'react-awesome-reveal'
import { useSectionInView } from '@/lib/useInView'
import { FiCode, FiLayout, FiGlobe, FiUsers, FiArrowRight, FiCheck } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'

export default function Services() {
    const {ref} = useSectionInView("#services",0.5)
    
    const services = [
        {
            title: "Custom Web & Mobile App Development",
            tech: "React, React Native, Next.js, Node.js",
            description: [
                "End-to-end solutions for startups and businesses",
                "Scalable, responsive, and fast applications",
                "Web platforms + cross-platform mobile apps"
            ],
            icon: FiCode,
            gradient: "from-[#2f80ed] to-[#56ccf2]",
            bgGradient: "from-[#2f80ed] to-[#56ccf2]",
            vectorIcon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: "UI/UX Design & Frontend Integration",
            tech: "Tailwind CSS, Figma to React, Styled Components",
            description: [
                "Beautiful, intuitive frontends from scratch",
                "Pixel-perfect implementation from Figma/Sketch",
                "Seamless animations and smooth user experience"
            ],
            icon: FiLayout,
            gradient: "from-[#00cea8] to-[#bf61ff]",
            bgGradient: "from-[#00cea8] to-[#bf61ff]",
            vectorIcon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: "WordPress & CMS-Based Website Development",
            tech: "Elementor, WPBakery, Custom Themes",
            description: [
                "Fast delivery of business and service websites",
                "CMS, eCommerce, blog, or business platforms",
                "SEO-optimized and mobile-ready"
            ],
            icon: FiGlobe,
            gradient: "from-[#804dee] to-[#3c3350]",
            bgGradient: "from-[#804dee] to-[#3c3350]",
            vectorIcon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: "Project Management & Technical Consultancy",
            tech: "Team Leadership & Technical Strategy",
            description: [
                "Managing a full dev team",
                "Guiding clients through MVP planning & feature scoping",
                "Acting as a remote CTO for startups/clients scaling their product"
            ],
            icon: FiUsers,
            gradient: "from-[#f12711] to-[#f5af19]",
            bgGradient: "from-[#f12711] to-[#f5af19]",
            vectorIcon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        }
    ]

    return (
        <section
            ref={ref}
            id="services"
            className="mb-28 max-w-[80rem] px-4 sm:px-6 lg:px-8 mx-auto text-center scroll-mt-28 mt-20"
        >
            <Fade
                direction="up"
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}
            >
                <h2 className="text-4xl font-bold mb-12 text-neutral-600 dark:text-white">
                    My Services
                </h2>
            </Fade>
            
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="w-full max-w-4xl mx-auto"
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.6,
                                type: "spring",
                                stiffness: 80,
                            }}
                            className="relative group h-full"
                        >
                            {/* Background Gradient Image */}
                            <div className="absolute inset-0 overflow-hidden rounded-2xl z-0">
                                <div className="absolute inset-0 bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 from-gray-50 to-gray-100 rounded-2xl z-0" />
                            </div>

                            {/* Card Content */}
                            <div className="relative z-10 p-8 sm:p-10 rounded-2xl shadow-xl h-full flex flex-col backdrop-blur-md">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 rounded-full bg-gradient-to-br dark:from-gray-700 dark:to-gray-800 from-gray-100 to-gray-200">
                                        {service.vectorIcon}
                                    </div>
                                    <h3 className="text-2xl font-semibold text-neutral-600 dark:text-white">{service.title}</h3>
                                </div>
                                <p className="dark:text-gray-100 text-neutral-600 mb-6 italic">{service.tech}</p>
                                <ul className="text-left space-y-4 mb-10">
                                    {service.description.map((item, i) => (
                                        <motion.li 
                                            key={i} 
                                            className="flex items-start gap-3 dark:text-gray-100 text-neutral-600"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <div className="mt-1 p-1 rounded-full bg-gradient-to-br dark:from-gray-700 dark:to-gray-800 from-gray-100 to-gray-200">
                                                <FiCheck className="w-4 h-4 text-neutral-600 dark:text-white" />
                                            </div>
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Centered and Small Hire Button */}
                                <div className="mt-auto flex justify-center">
                                    <Link 
                                        href="#contact"
                                        className="group flex items-center gap-1 bg-gradient-to-r dark:from-gray-700 dark:to-gray-800 from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-700 text-neutral-600 dark:text-white px-4 py-2 text-sm rounded-full transition-all duration-300 shadow hover:shadow-md"
                                    >
                                        <span>Hire Me</span>
                                        <FiArrowRight className="group-hover:translate-x-1 transition-transform text-xs" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
                .swiper-button-next,
                .swiper-button-prev {
                    color: var(--text-color) !important;
                }
                .swiper-pagination-bullet {
                    background: var(--text-color) !important;
                    opacity: 0.6;
                }
                .swiper-pagination-bullet-active {
                    background: var(--text-color) !important;
                    opacity: 1;
                }
                .swiper-slide {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </section>
    )
} 