"use client"

import Image from 'next/image'
import React from 'react'
import HeroProfile from '../../public/hero-profile-2.jpeg'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare, FaEnvelope, FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/useInView'

export default function Intro(){
    const {ref} = useSectionInView("#home",0.5)
    
    return(
        <section
        ref={ref}        
        id='home' 
        className='mb-40 max-w-7xl mx-auto px-6 pt-20 md:pt-32 pb-20 relative'
        >
            {/* Hero Content Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
                {/* Left Column - Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='space-y-8 text-center lg:text-left'
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4'
                    >
                        <span className='w-2 h-2 bg-primary rounded-full animate-pulse'></span>
                        Available for New Projects
                    </motion.div>

                    {/* Main Headline - Client-Focused */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'
                    >
                        <span className='text-textDark dark:text-white'>
                            AI-Powered Web & Mobile Solutions for{' '}
                        </span>
                        <span className='text-primary'>Businesses</span>
                        <span className='text-textDark dark:text-white'> & </span>
                        <span className='text-secondary'>Startups</span>
                    </motion.h1>

                    {/* Value Proposition - Problem → Solution → Benefit */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className='space-y-4 text-lg sm:text-xl text-textDark/80 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed'
                    >
                        <p className='font-medium'>
                            Transform your business with cutting-edge technology that drives growth.
                        </p>
                        <p>
                            I help businesses and startups build <strong className='text-primary'>fast, scalable digital products</strong> powered by AI and automation. From concept to launch, I deliver solutions that solve real problems and deliver measurable results.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4'
                    >
                        <motion.a
                            href='#contact'
                            className='group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get a Free Quote
                            <FaArrowRight className='group-hover:translate-x-1 transition-transform' />
                        </motion.a>
                        
                        <motion.a
                            href='#projects'
                            className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-darkGray1 text-primary border-2 border-primary rounded-lg font-semibold text-lg hover:bg-primary/5 transition-all duration-300'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Case Studies
                        </motion.a>

                        <motion.a
                            href='https://calendly.com/sarmadirfan78/30min'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book a Call
                            <FaArrowRight className='transition-transform' />
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className='flex items-center justify-center lg:justify-start gap-4 pt-4'
                    >
                        <motion.a
                            className='p-3 bg-white dark:bg-darkGray1 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg'
                            href='https://www.linkedin.com/in/sarmad-irfan78/'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='LinkedIn'
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <BsLinkedin className="text-xl" />
                        </motion.a>
                        
                        <motion.a
                            className='p-3 bg-white dark:bg-darkGray1 text-gray-700 dark:text-gray-300 rounded-full hover:bg-secondary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg'
                            href='https://github.com/sarmad0324'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='GitHub'
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaGithubSquare className="text-xl" />
                        </motion.a>
                        
                        <motion.a
                            className='p-3 bg-white dark:bg-darkGray1 text-gray-700 dark:text-gray-300 rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-md hover:shadow-lg'
                            href='mailto:sarmadirfan@syntaxleap.com'
                            aria-label='Email'
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            target='_blank'
                        >
                            <FaEnvelope className="text-xl" />
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Right Column - Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className='flex items-center justify-center'
                >
                    <div className='relative'>
                        {/* Decorative Elements */}
                        <div className='absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse'></div>
                        <div className='absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse' style={{animationDelay: '1s'}}></div>
                        
                        <div className='relative group'>
                            <div className='absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300'></div>
                            <div className='relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-darkGray1 group-hover:scale-105 transition-all duration-300'>
                                <Image
                                    src={HeroProfile}
                                    fill
                                    alt='Sarmad Irfan - Software Engineer & AI Specialist'
                                    quality="100"
                                    priority={true}
                                    className='object-cover scale-80 md:scale-100'
                                    style={{ objectPosition: 'center 15%' }}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className='flex flex-wrap justify-center gap-8 md:gap-12 mt-20 pt-12 border-t border-borderGray dark:border-darkGray2'
            >
                <div className='text-center'>
                    <div className='text-3xl md:text-4xl font-bold text-primary mb-2'>20+</div>
                    <div className='text-sm md:text-base text-textDark/70 dark:text-gray-400'>Projects</div>
                </div>
                <div className='text-center'>
                    <div className='text-3xl md:text-4xl font-bold text-secondary mb-2'>5+</div>
                    <div className='text-sm md:text-base text-textDark/70 dark:text-gray-400'>Years Exp</div>
                </div>
            </motion.div>
        </section>
    )
}
