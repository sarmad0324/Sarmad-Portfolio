"use client"
import SectionHeading from "./section-heading";
import React from 'react'
import { motion } from 'framer-motion'

import { useSectionInView } from '@/lib/useInView'
import { FiCode, FiLayout, FiGlobe, FiUsers, FiArrowRight, FiCheck } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
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
                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        }
    ]

    const [isPaused, setIsPaused] = React.useState(false);

    return (
        <section
  ref={ref}
  id="services"
  className="my-20 max-w-[53rem] scroll-mt-28 text-center sm:my-28 md:my-40"
>
  <SectionHeading>My Services</SectionHeading>

  <Swiper
    modules={[Pagination, Autoplay]}
    spaceBetween={16}
    slidesPerView={1}
    pagination={{
      clickable: true,
      dynamicBullets: true,
    }}
    speed={800}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
    className="pb-8 sm:pb-12"
    onSlideChange={() => {
      if (isPaused) {
        setIsPaused(false);
      }
    }}
  >
    {services.map((service, index) => (
      <SwiperSlide key={index}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.15,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 0.5
          }}
          className="relative group flex justify-center mx-auto w-[330px] md:w-[500px] lg:w-[700px] xl:w-[800px] cursor-pointer"
          onClick={() => setIsPaused(!isPaused)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl z-0">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-10 dark:opacity-20 rounded-xl sm:rounded-2xl z-0`}
            />
          </div>

          <div className="relative z-10 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 rounded-xl sm:rounded-2xl shadow-lg w-full bg-white/70 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 flex flex-col backdrop-blur-sm">
            <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div
                className={`p-2 sm:p-3 rounded-lg bg-gradient-to-br ${service.gradient} shadow-md`}
              >
                {service.vectorIcon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-600 dark:text-white text-left">
                  {service.title}
                </h3>
                <p className="dark:text-gray-300 text-neutral-500 text-xs sm:text-sm md:text-base italic text-left mt-0.5 sm:mt-1">
                  {service.tech}
                </p>
              </div>
            </div>
            <ul className="text-left space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow">
              {service.description.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2 sm:gap-3 dark:text-gray-200 text-neutral-600 text-xs sm:text-sm md:text-base"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: i * 0.15,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                >
                  <div className="mt-0.5 p-0.5 sm:p-1 rounded-full bg-gradient-to-br dark:from-gray-700 dark:to-gray-800 from-gray-100 to-gray-200">
                    <FiCheck className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-600 dark:text-white" />
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto">
              <Link
                href="#contact"
                className="group flex items-center justify-center gap-1 bg-gradient-to-r dark:from-gray-700 dark:to-gray-800 from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-700 text-neutral-600 dark:text-white px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm md:text-base rounded-lg transition-all duration-300 shadow hover:shadow-md w-full"
              >
                <span>Hire Me</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>

  <style jsx global>{`
    html,
    body {
      overflow-x: hidden;
    }

    .swiper {
      width: 100% !important;
      padding-bottom: 1.5rem;
      overflow: hidden;
    }

    .swiper-wrapper {
      width: 100% !important;
      display: flex;
    }

    .swiper-slide {
      width: 100% !important;
      max-width: 100% !important;
      box-sizing: border-box;
    }

    .swiper-pagination-bullet {
      background: rgb(82 82 82) !important;
      opacity: 0.4;
      width: 8px !important;
      height: 8px !important;
    }

    .swiper-pagination-bullet-active {
      opacity: 1;
      width: 24px !important;
      border-radius: 4px !important;
    }

    .dark .swiper-pagination-bullet {
      background: rgb(229 229 229) !important;
    }

    @media (min-width: 640px) {
      .swiper-pagination-bullet {
        width: 10px !important;
        height: 10px !important;
      }

      .swiper-pagination-bullet-active {
        width: 30px !important;
      }
    }
  `}</style>
</section>
    )
}