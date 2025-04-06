"use client"

import Image from 'next/image'
import React from 'react'
import Boy from '../../public/dp.png'
import Link from 'next/link'
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

            <h1 className='mb-10 mt-4 px-4 text-2xl sm:text-4xl ' >
            <p className='text-[14px] font-bold' >
            Hi, I am Sarmad Irfan!
                </p>
                <span className='font-medium !leading-[1.5]' >React/React Native Developer & Project Lead</span>{" "}
                <p className='text-[18px]'>Building Fast, Functional & Future-Ready Digital Products</p>
            </h1>
            </Fade>
            <motion.div 
            className='flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium '
            initial={{opacity:0,y:100}}
            animate={{opacity:1,y:0}}
            transition={{
                delay:0.2
            }}
            >
                <Link href='https://drive.google.com/file/d/1Kadwe4xs3v-WlYWhxmJpspavDc0PiT9B/view?usp=drive_link' 
                target='_blank'
                className='group bg-gray-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition '
                >
                Download CV
                </Link>
                <a
                className='bg-gray-800 p-4 text-white flex items-center gap-2 rounded-full hover:bg-gray-950 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60  '

                href="https://www.linkedin.com/in/sarmad-irfan/"
                target='_blank'
                >
                    <BsLinkedin/>
                </a>
                <a
                className='bg-gray-800 p-4 text-white flex items-center gap-2 rounded-full hover:bg-gray-950 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60  '

                href="https://github.com/sarmad0324"
                target='_blank'
                >
                    <FaGithubSquare/>
                </a>
            </motion.div>
        </section>
    )
}