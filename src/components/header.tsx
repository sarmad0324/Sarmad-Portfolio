"use client"
import React from 'react'
import NextLink from 'next/link'
import clsx from 'clsx'
import { Link } from '@/lib/types'
import { useActiveSectionContext } from '@/containers/active-section'
import { motion } from 'framer-motion'
import { FaRegFilePdf, FaDownload, FaGraduationCap } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

// Smooth scroll function
const smoothScrollTo = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};

type HeaderProps = { links: Link[] };

export default function Header({ links }: HeaderProps) {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <header className='hidden md:flex items-center justify-between fixed z-[999] w-full mt-6 px-8'>
            {/* Left: Empty space */}
            <div className="w-32"></div>
            
            {/* Center: Enhanced Nav Links with glass morphism */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className='flex p-2 rounded-full glass-morphism border border-white/30 shadow-xl backdrop-blur-xl hover:border-white/40 transition-all duration-300'
            >
                <ul className='flex flex-wrap items-center justify-center gap-1 text-sm font-semibold'>
                    {links.map((link, index) => (
                        <motion.li
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className='flex items-center justify-center relative'
                            key={link.hash}
                        >
                            <button
                                className={clsx(
                                    "relative flex items-center justify-center px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer",
                                    {
                                        "text-white": activeSection === link.hash,
                                        "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary": activeSection !== link.hash
                                    }
                                )}
                                onClick={() => {
                                    smoothScrollTo(link.hash);
                                    setActiveSection(link.hash);
                                    setTimeOfLastClick(Date.now())
                                }}
                            >
                                {link.nameEng}
                                {link.hash === activeSection && (
                                    <motion.span
                                        transition={{
                                            type: 'spring',
                                            stiffness: 400,
                                            damping: 30,
                                        }}
                                        layoutId='activeSection'
                                        className='absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full -z-10 glow-box'
                                    >
                                    </motion.span>
                                )}
                                {/* Hover effect for non-active items */}
                                {link.hash !== activeSection && (
                                    <motion.span
                                        className='absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10'
                                    >
                                    </motion.span>
                                )}
                            </button>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
            
            {/* Right: Enhanced Download CV Button */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
                <motion.a
                    href='https://drive.google.com/file/d/12sBGdNtcSZqLIlianFkNjwE3FBS-TY5m/view?usp=drive_link'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group relative flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl bg-primary hover:bg-primary/90 focus:ring-2 focus:ring-primary/50 focus:outline-none'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {/* Content */}
                    <span className="relative z-10 flex items-center gap-2">
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <FaGraduationCap className='text-lg group-hover:animate-pulse' />
                        </motion.div>
                        <span className='hidden sm:inline'>Download CV</span>
                        <FaDownload className='text-sm group-hover:animate-bounce' />
                    </span>
                </motion.a>
            </motion.div>
        </header>
    )
}