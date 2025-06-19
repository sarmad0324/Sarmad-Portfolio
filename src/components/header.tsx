"use client"
import React from 'react'
import NextLink from 'next/link'
import clsx from 'clsx'
import { Link } from '@/lib/types'
import { useActiveSectionContext } from '@/containers/active-section'
import { motion } from 'framer-motion'
import { FaDownload, FaRegFilePdf } from 'react-icons/fa'

type HeaderProps = { links: Link[] };

export default function Header({ links }: HeaderProps) {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <header className='hidden md:flex items-center justify-between fixed z-[999] w-full mt-4 px-8'>
            {/* Left: Logo/Name */}
            <NextLink href="#home" className="text-xl font-bold text-gray-900 dark:text-[#7D7D7D] hover:opacity-80 transition px-2 py-1 rounded">
                Sarmad Irfan
            </NextLink>
            {/* Center: Nav Links */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className='flex p-1 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.3] backdrop-blur-[0.5rem] sm:rounded-full dark:bg-darkGray1 dark:border-darkGray2 dark:bg-opacity-90'
            >
                <ul className='flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-light4 dark:text-darkGray3'>
                    {links.map((link) => (
                        <motion.li
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className='flex items-center justify-center relative'
                            key={link.hash}
                        >
                            <NextLink
                                className={clsx(
                                    "flex w-full items-center justify-center px-3 py-3 transition text-light4 hover:text-darkGray2 dark:text-darkGray3 dark:hover:text-light3",
                                    {
                                        "text-darkGray1 dark:text-light1": activeSection === link.hash
                                    }
                                )}
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.hash);
                                    setTimeOfLastClick(Date.now())
                                }}
                            >
                                {link.nameEng}
                                {link.hash === activeSection && (
                                    <motion.span
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 30,
                                        }}
                                        layoutId='activeSection'
                                        className='bg-light3 rounded-full absolute inset-0 -z-10 dark:bg-darkGray2'
                                    >
                                    </motion.span>
                                )}
                            </NextLink>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
            {/* Right: Download CV Button */}
            <a
                href='https://drive.google.com/file/d/12sBGdNtcSZqLIlianFkNjwE3FBS-TY5m/view?usp=drive_link'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 bg-darkGray2 text-white px-5 py-2 rounded-full font-medium hover:bg-darkGray3 hover:scale-105 transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-darkGray2 dark:bg-darkGray3 dark:text-light1 dark:hover:bg-darkGray2 ml-4'
            >
                <FaRegFilePdf className='text-lg'/>
                <span className='hidden sm:inline'>Download CV</span>
            </a>
        </header>
    )
}