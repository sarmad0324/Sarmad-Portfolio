"use client"
import { projectsData } from "@/lib/data"
import Project from "./project-card";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { FaCode, FaEye, FaGithub, FaRocket } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { BoxReveal } from './magicui/box-reveal';

export default function Projects (){
    const {ref} = useSectionInView("#projects")
    
    return(
        <section     
            ref={ref}
            id="projects" 
            className="scroll-mt-28 mb-28 mt-20 px-6 py-32 relative"
        >
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <BoxReveal boxColor="#7C3AED" duration={0.5}>
                        <motion.h2 
                            className="text-5xl sm:text-6xl font-bold mb-6 relative inline-block cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <span className="holographic">My Projects</span>
                            <motion.div
                                className="absolute -top-4 -right-4 text-2xl"
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <FaCode className="text-primary" />
                            </motion.div>
                        </motion.h2>
                    </BoxReveal>
                    
                    <motion.p
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Explore my latest work showcasing innovative solutions and cutting-edge technologies 
                        <motion.span 
                            className="inline-block ml-2"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            🚀
                        </motion.span>
                    </motion.p>
                </motion.div>
                
                {/* Projects Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    {
                        projectsData.map((project,index)=>(
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                viewport={{ once: true }}
                            >
                                <Project {...project} />
                            </motion.div>
                        ))
                    }
                </motion.div>
                
                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="p-8 rounded-3xl glass-morphism border border-white/20 max-w-4xl mx-auto">
                        <motion.h3 
                            className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                            whileHover={{ scale: 1.05 }}
                        >
                            Want to See More?
                        </motion.h3>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                            Check out my GitHub for more projects and contributions to the open-source community.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                            <motion.a
                                href="https://github.com/sarmad0324"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub className="text-xl" />
                                Visit GitHub
                                <FaEye className="group-hover:animate-pulse" />
                            </motion.a>
                            
                            <motion.a
                                href="#contact"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg bg-white/10 backdrop-blur-md border border-accent/30 text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaRocket className="animate-pulse" />
                                Start a Project
                                <HiSparkles className="group-hover:animate-bounce" />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
