"use client"
import { projectsData } from "@/lib/data"
import Project from "./project-card";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Projects (){
    const {ref} = useSectionInView("#projects")
    
    return(
        <section     
            ref={ref}
            id="projects" 
            className="scroll-mt-28 py-20 md:py-32 relative bg-bgWarm dark:bg-darkBlack"
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-textDark dark:text-white leading-tight">
                        Featured <span className="text-primary">Case Studies</span>
                    </h2>
                    <p className="text-lg text-textDark/60 dark:text-gray-400 max-w-2xl mx-auto">
                        Real projects, real results. Explore how I&apos;ve helped businesses solve complex challenges.
                    </p>
                </motion.div>
                
                {/* Projects Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projectsData.map((project, index) => (
                        <Project key={`project-${project.title}-${index}`} {...project} />
                    ))}
                </div>
                
                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="p-8 md:p-12 bg-white/80 dark:bg-darkGray2/80 backdrop-blur-sm rounded-2xl border border-borderGray/50 dark:border-darkGray3/50 max-w-4xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-textDark dark:text-white">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-lg text-textDark/70 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                            Let&apos;s discuss how we can build something amazing together.
                        </p>
                        <motion.a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get a Free Quote
                            <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
