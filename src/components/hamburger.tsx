"use client"
import React, { useState } from "react"
import {Link} from "@/lib/types"
import clsx from "clsx"
import NextLink from 'next/link'
import Hamburger from "hamburger-react"
import { useActiveSectionContext } from "@/containers/active-section"
import { AnimatePresence, motion } from "framer-motion"

type HamburgerMenuProps ={links:Link[]}
const HamburgerMenu: React.FC<HamburgerMenuProps>=({links})=>{
    const [isOpen, setisOpen] = useState(false)
    const {activeSection,setActiveSection,setTimeOfLastClick} = useActiveSectionContext();
    const menuTrigger = {
        visible:{scale:1 ,opacity:0.7,y:0},
        tap:{scale:0.85},
        hover:{scale:1.2}
    }
    const menuList = {
        start:{scale:0.6,opacity:0.7,y:-20},
        visible:{scale:1,opacity:0.9,y:0}
    }
return(
    <div className="md:hidden top-5 right-5 fixed w-60 z-[999] flex flex-col items-end gap-2  " >
        <motion.button
        variants={menuTrigger}
        initial="visible"
        whileTap="tap"
        whileHover="hover"
        className="bg-surface w-[3rem] h-[3rem] drop-shadow backdrop-blur-[0.5rem] border border-border shadow-2xl rounded-full flex items-center justify-center" >
            <Hamburger 
            toggled={isOpen}
            toggle={setisOpen}
            size={20}
            />
        </motion.button>
        <AnimatePresence>
{isOpen && (
    <motion.div
    variants={menuList}
    initial="start"
    animate="visible" className="w-full bg-surface drop-shadow border border-border shadow-2xl rounded-2xl flex flex-col items-center justify-center p-1" >
    {links.map((link,index)=>(
        <motion.div 
   className="w-full"
   key={link.hash}
   initial={{y:-100,opacity:0}}
   animate={{y:0,opacity:1}}
        >
            <NextLink
            className={clsx(
                "flex w-full items-center justify-center px-3 py-3 transition text-textMuted hover:text-primary cursor-pointer",
                {
                  "text-textPrimary bg-surface2 rounded":activeSection === link.hash,
                  "rounded-t-xl round":index === 0,
                  "rounded-b-xl round":index === links.length -1,

                }
            )}
            href={`/${link.hash}`}
            onClick={()=>{
                setActiveSection(link.hash);
                setTimeOfLastClick(Date.now());
                setisOpen(false);
            }}
            >
                {link.nameEng}
            </NextLink>
        </motion.div>
    ))}
</motion.div>
)}
        </AnimatePresence>
    </div>
)
}
export default HamburgerMenu