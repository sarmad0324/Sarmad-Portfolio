"use client"

import Image from 'next/image'
import React from 'react'
import Boy from '../../public/dp.png'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare, FaRocket, FaEnvelope } from 'react-icons/fa'
import { PulsatingButton } from './magicui/pulsating-button'
import { BoxReveal } from './magicui/box-reveal'
import { motion } from 'framer-motion'
import { Fade } from 'react-awesome-reveal'
import { useSectionInView } from '@/lib/useInView'


export default function Intro(){
    const {ref} = useSectionInView("#home",0.5)
    
    return(
        <section
        ref={ref}        
        id='home' className='mb-60 max-w-[75rem] text-center sm:mb-0 relative' >
            <div className='flex items-center justify-center' >
                <div className='relative'>
                    <motion.div
                    initial={{opacity:0,scale:0}}
                    animate={{opacity:1,scale:1}}
                    transition={{
                        type:'spring',
                        stiffness:125,
                        damping:10,
                        duration:0.8
                    }}
                    className="relative"
                    >
                        <div className="relative group">
                            <Image
                            src={Boy}
                            width='400'
                            height='400'
                            alt='portrait'
                            quality="100"
                            priority={true}
                            className='rounded-full shadow-xl object-cover transition-all duration-300 group-hover:scale-105 border-4 border-primary/20'
                            />
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
                    <BoxReveal boxColor="#7C3AED" duration={0.5}>
                        <h1 className='mb-4 mt-4 px-4 text-4xl sm:text-6xl font-bold text-primary dark:text-white'>
                        Hi, I&apos;m Sarmad Irfan
                        </h1>
                    </BoxReveal>
                    
                    <BoxReveal boxColor="#6B7280" duration={0.5} delay={0.2}>
                        <motion.p 
                            className='text-xl sm:text-3xl font-semibold mb-3 text-secondary dark:text-darkGray3'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            Software Engineer turned Entrepreneur
                        </motion.p>
                    </BoxReveal>
                    
                    <BoxReveal boxColor="#9CA3AF" duration={0.5} delay={0.4}>
                        <motion.p 
                            className='text-lg sm:text-xl mb-4 text-secondary dark:text-darkGray3 max-w-2xl mx-auto leading-relaxed'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            Building <span className="font-semibold text-primary">fast</span>, <span className="font-semibold text-secondary">functional</span>, <span className="font-semibold text-accent">future-ready</span> digital products that make a difference.
                        </motion.p>
                    </BoxReveal>
                    
                    
                </motion.div>
            </Fade>
            
            <motion.div 
                className='flex flex-col sm:flex-row items-center justify-center gap-6 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                <PulsatingButton
                    variant="primary"
                    size="lg"
                    onClick={() => window.open("https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting+with+Sarmad+Irfan&details=Let's+discuss+your+project+or+collaboration!&location=Google+Meet+or+your+preferred+platform&add=sarmadirfan78%40gmail.com", "_blank")}
                >
                    <FaRocket />
                    Book a Meeting
                </PulsatingButton>
                
                <div className='flex gap-4'>
                    <motion.a
                        className='group p-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110'
                        href='https://www.linkedin.com/in/sarmad-irfan78/'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='LinkedIn'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <BsLinkedin className="text-xl" />
                    </motion.a>
                    
                    <motion.a
                        className='group p-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-110'
                        href='https://github.com/sarmad0324'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='GitHub'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaGithubSquare className="text-xl" />
                    </motion.a>
                    
                    <motion.a
                        className='group p-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110'
                        href='mailto:sarmadirfan@syntaxleap.com'
                        aria-label='Email'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        target='_blank'
                    >
                        <FaEnvelope className="text-xl" />
                    </motion.a>
                </div>
            </motion.div>
        </section>
    )
}
