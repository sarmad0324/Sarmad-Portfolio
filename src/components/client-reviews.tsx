"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/useInView'
import Marquee from './magicui/marquee'
import { Meteors } from './magicui/meteors'
import { BoxReveal } from './magicui/box-reveal'
import { cn } from '@/lib/utils'

const reviews = [
  {
    name: "Abdul Samad Umer",
    role: "CEO of Triangle Wallets",
    body: "Sarmad delivered an exceptional blockchain-based digital wallet app. His expertise in React Native, Redux, and blockchain integration was outstanding. The app's security features and user experience exceeded our expectations. Highly recommended for complex mobile projects.",
    rating: 5,
    project: "Triangle Wallets"
  },
  {
    name: "Chris",
    role: "Founder of Ezrecova",
    body: "Working with Sarmad on our mental health platform was a game-changer. He built a comprehensive therapy booking system using WordPress and Elementor. His attention to detail and understanding of user needs made our platform truly user-friendly.",
    rating: 5,
    project: "Ezrecova"
  },
  {
    name: "Moien",
    role: "Client - Genius Arena",
    body: "Sarmad created an amazing color-based interactive game that's both engaging and educational. His React and Tailwind CSS skills brought our vision to life perfectly. The game mechanics are smooth and the UI is beautifully designed.",
    rating: 5,
    project: "Genius Arena"
  },
  {
    name: "Fasseh",
    role: "Peer Developer at Truckwise",
    body: "Collaborating with Sarmad on the Truckwise logistics app was incredible. His React Native and Node.js expertise helped us build a robust fleet management system. His problem-solving skills and code quality are top-notch.",
    rating: 5,
    project: "Truckwise"
  }
]

// Use all reviews in a single row
const allReviews = reviews

const ReviewCard = ({
  name,
  role,
  body,
  rating,
  project
}: {
  name: string
  role: string
  body: string
  rating: number
  project: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6 mx-4",
        // light styles
        "border-gray-200 bg-white/90 hover:bg-white shadow-lg",
        // dark styles
        "dark:border-gray-700 dark:bg-gray-800/90 dark:hover:bg-gray-800 dark:shadow-xl",
      )}
    >
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <figcaption className="text-lg font-semibold dark:text-white">
              {name}
            </figcaption>
            <p className="text-sm font-medium text-primary dark:text-primary/80">
              {role}
            </p>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">★</span>
            ))}
          </div>
        </div>
        
        {/* Review Body */}
        <blockquote className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          "{body}"
        </blockquote>
        
        {/* Project Badge */}
        <div className="flex justify-end">
          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {project}
          </span>
        </div>
      </div>
    </figure>
  )
}

export default function ClientReviews() {
  const { ref } = useSectionInView("#reviews", 0.5)

  return (
    <section 
      ref={ref} 
      id="reviews" 
      className="py-32 relative"
    >
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <BoxReveal boxColor="#7C3AED" duration={0.5}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Client Reviews
            </h2>
          </BoxReveal>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </motion.div>

        {/* Horizontal Scrolling Reviews */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 animate-scroll hover:pause-animation">
            {/* First set of reviews */}
            {allReviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="flex-shrink-0 w-80"
              >
                <ReviewCard {...review} />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {allReviews.map((review, index) => (
              <div
                key={`${review.name}-${index}-duplicate`}
                className="flex-shrink-0 w-80"
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
