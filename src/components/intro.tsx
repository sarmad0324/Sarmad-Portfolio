"use client"

import Image from 'next/image'
import React from 'react'
import Boy from '../../public/dp.png'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'

import { motion } from 'framer-motion'
import { Fade } from 'react-awesome-reveal'
import { useSectionInView } from '@/lib/useInView'


export default function Intro(){
    const {ref} = useSectionInView("#home",0.5)
    return(
        <section
        ref={ref}        
        id='home' className='mb-28 max-w-[75rem] text-center sm:mb-0 ' >
            <div className='flex items-center justify-center' >
                <div className='relative'>
                    {/* Centered radial glow background effect */}
                    <div
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 z-0 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-60 select-none pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle, #BCCCDC 0%, #F8FAFC 60%, transparent 100%)'
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 z-0 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-40 select-none pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle, #7D7D7D 0%, #2E2E2E 60%, transparent 100%)'
                      }}
                    />
                    <motion.div
                    initial={{opacity:0,scale:0}}
                    animate={{opacity:1,scale:1}}
                    transition={{
                        type:'spring',
                        stiffness:125,
                        damping:10,
                        duration:0.2,
                    }}
                    >
                        <Image
                        src={Boy}
                        width='400'
                        height='400'
                        alt='portrait'
                        quality="100"
                        priority={true}
                        className='rounded-full shadow-xl object-cover'
                        />
                    </motion.div>
                </div>
            </div>
            <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true} >

            <h1 className='mb-4 mt-4 px-4 text-3xl sm:text-5xl font-bold'>
                Sarmad Irfan
            </h1>
            <p className='text-lg sm:text-2xl font-medium mb-2'>Software Engineer – Web, Mobile & AI</p>
            <p className='text-base sm:text-lg mb-6'>Building fast, functional, future-ready digital products.</p>
            </Fade>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'>
                <a
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting+with+Sarmad+Irfan&details=Let's+discuss+your+project+or+collaboration!&location=Google+Meet+or+your+preferred+platform&add=sarmadirfan78%40gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='group bg-darkGray2 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-darkGray3 transition-all duration-200 border-2 border-darkGray2 shadow-lg focus:outline-none focus:ring-2 focus:ring-darkGray2 dark:bg-darkGray3 dark:text-light1 dark:border-darkGray2 dark:hover:bg-darkGray2 mb-2 sm:mb-0'
                >
                    Book a Meeting
                </a>
                <div className='flex gap-2'>
                    <a
                        className='bg-gray-200 p-3 text-gray-700 flex items-center gap-2 rounded-full hover:bg-gray-300 focus:scale-110 hover:scale-110 active:scale-105 transition border border-gray-300 dark:bg-darkGray1 dark:text-darkGray3 dark:hover:bg-darkGray2 dark:hover:text-darkBlack'
                        href='https://www.linkedin.com/in/sarmad-irfan/'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='LinkedIn'
                    >
                        <BsLinkedin/>
                    </a>
                    <a
                        className='bg-gray-200 p-3 text-gray-700 flex items-center gap-2 rounded-full hover:bg-gray-300 focus:scale-110 hover:scale-110 active:scale-105 transition border border-gray-300 dark:bg-darkGray1 dark:text-darkGray3 dark:hover:bg-darkGray2 dark:hover:text-darkBlack'
                        href='https://github.com/sarmad0324'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='GitHub'
                    >
                        <FaGithubSquare/>
                    </a>
                </div>
            </div>
        </section>
    )
}
