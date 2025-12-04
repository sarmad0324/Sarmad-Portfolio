"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/useInView'
import { FaStar } from 'react-icons/fa'

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
    <div className="relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6 mx-4 bg-white dark:bg-darkGray2 border-borderGray dark:border-darkGray3 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col gap-4 h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex flex-col">
            <h4 className="text-lg font-bold text-textDark dark:text-white">
              {name}
            </h4>
            <p className="text-sm font-medium text-primary dark:text-primary/80">
              {role}
            </p>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-sm" />
            ))}
          </div>
        </div>
        
        {/* Review Body */}
        <blockquote className="text-sm leading-relaxed text-textDark/70 dark:text-gray-300 flex-grow">
          &ldquo;{body}&rdquo;
        </blockquote>
        
        {/* Project Badge */}
        <div className="flex justify-end pt-2">
          <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20">
            {project}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function ClientReviews() {
  const { ref } = useSectionInView("#reviews", 0.5)

  return (
    <section 
      ref={ref} 
      id="reviews" 
      className="py-20 md:py-32 relative bg-bgWarm dark:bg-darkGray1"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-textDark dark:text-white">
            What Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-xl text-textDark/70 dark:text-gray-300 max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what clients have to say about working with me.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Reviews */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 animate-scroll hover:pause-animation">
            {/* First set of reviews */}
            {reviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="flex-shrink-0 w-80"
              >
                <ReviewCard {...review} />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {reviews.map((review, index) => (
              <div
                key={`${review.name}-${index}-duplicate`}
                className="flex-shrink-0 w-80"
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center justify-center text-textDark/60 dark:text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>100% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>On-Time Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Dedicated Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
