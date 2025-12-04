"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUsers, FaLightbulb, FaCheckCircle } from 'react-icons/fa';
import { useSectionInView } from '@/lib/useInView';
import Image from 'next/image';
import Boy from '../../public/dp.png';

export default function About() {
    const { ref } = useSectionInView("#about", 0.5);

    const values = [
        {
            icon: FaCode,
            title: "Technical Excellence",
            description: "Staying ahead with cutting-edge technologies and best practices"
        },
        {
            icon: FaUsers,
            title: "Client-First Approach",
            description: "Your success is my priority. Every decision is made with your goals in mind"
        },
        {
            icon: FaLightbulb,
            title: "Innovation-Driven",
            description: "Leveraging AI and automation to solve complex business challenges"
        },
        {
            icon: FaRocket,
            title: "Results-Focused",
            description: "Delivering measurable outcomes that drive business growth"
        }
    ];

    const strengths = [
        "5+ years of development experience",
        "20+ successful projects delivered",
        "Full-stack expertise (Web, Mobile, AI/ML)",
        "Remote-first, flexible collaboration",
        "AI integration and automation specialist"
    ];

    return (
        <section
            ref={ref}
            id="about"
            className="py-20 md:py-32 px-6 bg-white dark:bg-darkGray1"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-textDark dark:text-white">
                        Who I Am & <span className="text-primary">What I Do</span>
                    </h2>
                    <p className="text-xl text-textDark/70 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        I'm not just a developer—I'm your partner in building digital solutions that drive real business results.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                            <Image
                                src={Boy}
                                width={500}
                                height={500}
                                alt="Sarmad Irfan"
                                className="relative rounded-2xl shadow-2xl object-cover w-full h-auto"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-textDark dark:text-white">
                                Hi, I'm <span className="text-primary">Sarmad Irfan</span>
                            </h3>
                            <div className="space-y-4 text-lg text-textDark/80 dark:text-gray-300 leading-relaxed">
                                <p>
                                    I'm a Software Engineer turned Entrepreneur, and the founder of SyntexLeap—an AI-focused development agency that helps businesses and startups build transformative digital products.
                                </p>
                                <p>
                                    With over a decade of combined experience in web development, mobile apps, and AI integration, I specialize in turning complex business challenges into elegant, scalable solutions. My approach combines technical expertise with a deep understanding of what drives business growth.
                                </p>
                                <p>
                                    Whether you're a startup looking to launch your first product or an established business seeking to innovate with AI and automation, I work as an extension of your team to deliver results that matter.
                                </p>
                            </div>
                        </div>

                        {/* Strengths List */}
                        <div className="pt-6 border-t border-borderGray dark:border-darkGray2">
                            <h4 className="text-xl font-bold mb-4 text-textDark dark:text-white">
                                Why Work With Me:
                            </h4>
                            <ul className="space-y-3">
                                {strengths.map((strength, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3 text-textDark/80 dark:text-gray-300"
                                    >
                                        <FaCheckCircle className="text-secondary flex-shrink-0 mt-1" />
                                        <span>{strength}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Values Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {values.map((value, index) => {
                        const IconComponent = value.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                className="p-6 bg-bgWarm dark:bg-darkGray2 rounded-xl border border-borderGray dark:border-darkGray3 hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <IconComponent className="text-primary text-xl" />
                                </div>
                                <h4 className="text-xl font-bold mb-2 text-textDark dark:text-white">
                                    {value.title}
                                </h4>
                                <p className="text-textDark/70 dark:text-gray-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex flex-col sm:flex-row gap-4">
                        <motion.a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Let's Discuss Your Project
                            <FaRocket className="text-lg" />
                        </motion.a>
                        <motion.a
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-darkGray2 text-primary border-2 border-primary rounded-lg font-semibold text-lg hover:bg-primary/5 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

