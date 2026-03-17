"use client"
import React from 'react'
import clsx from 'clsx'
import { Link } from '@/lib/types'
import { useActiveSectionContext } from '@/containers/active-section'
import { motion } from 'framer-motion'

// Smooth scroll function
const smoothScrollTo = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        return;
    }
    window.location.href = `/${elementId}`;
};

type HeaderProps = { links: Link[] };

export default function Header({ links }: HeaderProps) {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <header className='hidden md:flex items-center justify-between fixed z-[999] w-full mt-6 px-8'>
            <div className="w-32"></div>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className='flex p-2 rounded-full border border-border bg-surface shadow-sm backdrop-blur'
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
                                        "text-textMuted hover:text-primary": activeSection !== link.hash
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
                                        className='absolute inset-0 bg-primary rounded-full -z-10'
                                    >
                                    </motion.span>
                                )}
                                {link.hash !== activeSection && (
                                    <motion.span
                                        className='absolute inset-0 bg-primarySoft rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10'
                                    >
                                    </motion.span>
                                )}
                            </button>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
            
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
                <a
                    href='/#contact'
                    className='flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white transition-colors bg-primary hover:bg-primaryHover focus:ring-2 focus:ring-primary/50 focus:outline-none'
                >
                    Discuss Your Project
                </a>
            </motion.div>
        </header>
    )
}