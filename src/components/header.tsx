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
        <header className='hidden md:flex items-center justify-between fixed z-[999] w-full top-0 px-8 py-4 bg-bg/70 backdrop-blur-md border-b border-border/50'>
            <motion.a
                href="/#home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-textPrimary font-Sora font-bold text-sm tracking-tight"
            >
                Sarmad Irfan
            </motion.a>

            <motion.nav
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                aria-label="Primary"
            >
                <ul className='flex items-center gap-0.5 text-sm font-medium'>
                    {links.map((link) => (
                        <li key={link.hash} className="relative">
                            <button
                                className={clsx(
                                    "relative px-3.5 py-1.5 transition-colors duration-300 cursor-pointer",
                                    activeSection === link.hash
                                        ? "text-textPrimary"
                                        : "text-textMuted hover:text-textSecondary"
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
                                        layoutId='activeSection'
                                        className='absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-primary'
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </motion.nav>

            <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                href='https://calendly.com/sarmad-sarmadirfan/30min'
                target="_blank"
                rel="noopener noreferrer"
                className='text-sm font-semibold text-[color:var(--accent-ink)] bg-primary px-4 py-2 hover:bg-primaryHover transition-colors'
            >
                Book a Call
            </motion.a>
        </header>
    )
}
