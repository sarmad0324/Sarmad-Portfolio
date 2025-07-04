"use client"

import Image from 'next/image'
import React from 'react'
import Boy from '../../public/dp.png'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare, FaRocket, FaStar, FaCode } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { Fade } from 'react-awesome-reveal'
import { useSectionInView } from '@/lib/useInView'


export default function Intro(){
    const {ref} = useSectionInView("#home",0.5)
    
    // Floating elements data
    const floatingElements = [
        { icon: FaCode, delay: 0, position: 'top-10 left-10' },
        { icon: FaRocket, delay: 1, position: 'top-20 right-20' },
        { icon: FaStar, delay: 2, position: 'bottom-20 left-20' },
        { icon: HiSparkles, delay: 0.5, position: 'bottom-10 right-10' },
    ];
    
    return(
        <section
        ref={ref}        
        id='home' className='mb-28 max-w-[75rem] text-center sm:mb-0 relative particle-bg overflow-hidden' >
            {/* Animated background elements */}
            <div className="absolute inset-0 morphing-bg opacity-10 -z-10"></div>
            
            {/* Floating icons */}
            {floatingElements.map((element, index) => {
                const IconComponent = element.icon;
                return (
                    <motion.div
                        key={index}
                        className={`absolute ${element.position} text-primary/30 text-2xl z-10`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                            opacity: [0.3, 0.7, 0.3], 
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: 6,
                            delay: element.delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <IconComponent className="animate-float" />
                    </motion.div>
                );
            })}
            
            <div className='flex items-center justify-center relative z-20' >
                <div className='relative'>
                    {/* Enhanced glow effects */}
                    <div
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 z-0 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-40 select-none pointer-events-none aurora-gradient"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 z-0 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-60 select-none pointer-events-none neon-gradient"
                    />
                    
                    {/* Orbiting rings */}
                    <motion.div
                        className="absolute left-1/2 top-1/2 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/20"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute left-1/2 top-1/2 w-[480px] h-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/20"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <motion.div
                    initial={{opacity:0,scale:0,rotate:0}}
                    animate={{opacity:1,scale:1,rotate:360}}
                    transition={{
                        type:'spring',
                        stiffness:125,
                        damping:10,
                        duration:0.8,
                        rotate: { duration: 2, ease: "easeOut" }
                    }}
                    className="relative z-10"
                    >
                        <div className="relative group">
                            <Image
                            src={Boy}
                            width='400'
                            height='400'
                            alt='portrait'
                            quality="100"
                            priority={true}
                            className='rounded-full shadow-2xl object-cover glow-box-neon transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl border-4 border-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-border p-1'
                            />
                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
            <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true} >
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <h1 className='mb-4 mt-4 px-4 text-4xl sm:text-6xl font-bold holographic animate-glow relative'>
                        Sarmad Irfan
                        <motion.span
                            className="absolute -top-2 -right-2 text-2xl"
                            animate={{ rotate: [0, 20, -20, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            ✨
                        </motion.span>
                    </h1>
                    
                    <motion.p 
                        className='text-xl sm:text-3xl font-semibold mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        Software Engineer – Web, Mobile & AI 🚀
                    </motion.p>
                    
                    <motion.p 
                        className='text-lg sm:text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        Building <span className="font-semibold text-primary">fast</span>, <span className="font-semibold text-secondary">functional</span>, <span className="font-semibold text-accent">future-ready</span> digital products that make a difference.
                    </motion.p>
                </motion.div>
            </Fade>
            
            <motion.div 
                className='flex flex-col sm:flex-row items-center justify-center gap-6 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                <motion.a
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting+with+Sarmad+Irfan&details=Let's+discuss+your+project+or+collaboration!&location=Google+Meet+or+your+preferred+platform&add=sarmadirfan78%40gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='group relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-glow"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center gap-2">
                        <FaRocket className="group-hover:animate-bounce" />
                        Book a Meeting
                    </span>
                </motion.a>
                
                <div className='flex gap-4'>
                    <motion.a
                        className='group p-4 bg-white/10 backdrop-blur-md border border-white/20 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary/20 hover:border-primary/40 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg glow-box'
                        href='https://www.linkedin.com/in/sarmad-irfan/'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='LinkedIn'
                        whileHover={{ rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <BsLinkedin className="text-xl group-hover:animate-pulse" />
                    </motion.a>
                    
                    <motion.a
                        className='group p-4 bg-white/10 backdrop-blur-md border border-white/20 text-gray-700 dark:text-gray-300 rounded-full hover:bg-secondary/20 hover:border-secondary/40 hover:text-secondary transition-all duration-300 hover:scale-110 hover:shadow-lg glow-box'
                        href='https://github.com/sarmad0324'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='GitHub'
                        whileHover={{ rotate: -10 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaGithubSquare className="text-xl group-hover:animate-pulse" />
                    </motion.a>
                </div>
            </motion.div>
        </section>
    )
}
