"use client"
import React, { useState } from "react"
import { Link } from "@/lib/types"
import clsx from "clsx"
import NextLink from 'next/link'
import Hamburger from "hamburger-react"
import { useActiveSectionContext } from "@/containers/active-section"
import { AnimatePresence, motion } from "framer-motion"

type HamburgerMenuProps = { links: Link[] }

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <div className="md:hidden top-4 right-4 fixed w-56 z-[999] flex flex-col items-end gap-2">
            <motion.button
                whileTap={{ scale: 0.9 }}
                className="bg-surface w-11 h-11 border border-border shadow-lg rounded-full flex items-center justify-center backdrop-blur-md"
            >
                <Hamburger
                    toggled={isOpen}
                    toggle={setIsOpen}
                    size={18}
                    color="#A1A1AA"
                />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: -8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="w-full bg-surface border border-border shadow-xl rounded-2xl flex flex-col overflow-hidden"
                    >
                        {links.map((link, index) => (
                            <NextLink
                                key={link.hash}
                                className={clsx(
                                    "flex w-full items-center px-5 py-3.5 text-sm transition-colors duration-150",
                                    {
                                        "text-textPrimary bg-primary/10 font-semibold": activeSection === link.hash,
                                        "text-textMuted hover:text-textSecondary hover:bg-surface2": activeSection !== link.hash,
                                        "border-b border-border": index !== links.length - 1,
                                    }
                                )}
                                href={`/${link.hash}`}
                                onClick={() => {
                                    setActiveSection(link.hash);
                                    setTimeOfLastClick(Date.now());
                                    setIsOpen(false);
                                }}
                            >
                                {link.nameEng}
                            </NextLink>
                        ))}
                        <a
                            href="https://calendly.com/sarmad-sarmadirfan/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-3 my-3 flex items-center justify-center px-4 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primaryHover transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Book a Call
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default HamburgerMenu
