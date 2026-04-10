"use client"
import React from 'react'
import clsx from 'clsx'
import { Link } from '@/lib/types'
import { useActiveSectionContext } from '@/containers/active-section'
import { motion } from 'framer-motion'

const smoothScrollTo = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
    }
    window.location.href = `/${elementId}`;
};

type HeaderProps = { links: Link[] };

export default function Header({ links }: HeaderProps) {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <header className='hidden md:flex items-center justify-between fixed z-[999] w-full mt-5 px-8'>
            {/* Logo / name */}
            <motion.a
                href="/#home"
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="text-textPrimary font-Sora font-bold text-sm tracking-tight hover:text-primary transition-colors"
            >
                Sarmad<span className="text-primary">.</span>
            </motion.a>

            {/* Center pill nav */}
            <motion.div
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                className='flex p-1.5 rounded-full border border-border bg-surface/80 shadow-lg backdrop-blur-md'
            >
                <ul className='flex flex-wrap items-center justify-center gap-0.5 text-sm font-medium'>
                    {links.map((link, index) => (
                        <motion.li
                            initial={{ y: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.07 }}
                            className='flex items-center justify-center relative'
                            key={link.hash}
                        >
                            <button
                                className={clsx(
                                    "relative flex items-center justify-center px-4 py-1.5 rounded-full transition-all duration-300 text-sm cursor-pointer",
                                    {
                                        "text-white": activeSection === link.hash,
                                        "text-textMuted hover:text-textSecondary": activeSection !== link.hash,
                                    }
                                )}
                                onClick={() => {
                                    smoothScrollTo(link.hash);
                                    setActiveSection(link.hash);
                                    setTimeOfLastClick(Date.now());
                                }}
                            >
                                {link.nameEng}
                                {link.hash === activeSection && (
                                    <motion.span
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        layoutId='activeSection'
                                        className='absolute inset-0 bg-primary rounded-full -z-10'
                                    />
                                )}
                            </button>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            {/* Right CTA */}
            <motion.div
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
                <a
                    href='https://calendly.com/sarmad-sarmadirfan/30min'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm text-white transition-all bg-primary hover:bg-primaryHover focus:ring-2 focus:ring-primary/50 focus:outline-none shadow-lg shadow-primary/20'
                >
                    Book a Call
                </a>
            </motion.div>
        </header>
    )
}
