"use client"
import Image from "next/image";
import { ProjectInfo } from "@/lib/types";
import { motion } from "framer-motion";
import { FiArrowRight, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState, useRef, useEffect } from "react";

type ProjectProps = ProjectInfo;

export default function Project({
  title,
  description,
  problem,
  solution,
  outcome,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    
    // Get first sentence or 120 characters for preview
    const previewText = description.length > 120 
        ? description.substring(0, 120).trim() + '...'
        : description;

    const handleToggleCaseStudy = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsExpanded(prev => !prev);
    };

  return (
    <div ref={cardRef} className="h-full" data-project-title={title} data-project-id={title.toLowerCase().replace(/\s+/g, '-')}>
      <motion.div
          className="group h-full"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
      >
        <div className="h-full flex flex-col bg-white dark:bg-darkGray2 rounded-2xl border border-borderGray/50 dark:border-darkGray3/50 overflow-hidden shadow-sm hover:shadow-2xl hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
          {/* Image Container - 16:10 Aspect Ratio */}
          <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-darkGray1" style={{ aspectRatio: '16/10' }}>
            <Image
              src={imageUrl}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover transition-transform duration-700 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
              alt={`${title} project screenshot`}
            />
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`} />
          </div>
          
          {/* Content */}
          <div className="flex flex-col flex-grow p-6">
            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-textDark dark:text-white line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag, index) => (
                <motion.span
                  key={`${title}-${tag}-${index}`}
                  className={`px-2.5 py-1 text-xs font-medium rounded-full border transition-all duration-300 ${
                    isHovered
                      ? 'bg-primary/10 text-primary border-primary/30'
                      : 'bg-gray-100 dark:bg-darkGray1 text-textDark/70 dark:text-gray-400 border-borderGray/50 dark:border-darkGray3/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
              {tags.length > 3 && (
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-darkGray1 text-textDark/60 dark:text-gray-500 border border-borderGray/50 dark:border-darkGray3/50">
                  +{tags.length - 3}
                </span>
              )}
            </div>

            {/* Preview Text */}
            <p className="text-sm text-textDark/60 dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed">
              {previewText}
            </p>

            {/* Case Study Details (Expandable) */}
            {(problem || solution || outcome) && (
              <div className="mb-6">
                <button
                  onClick={handleToggleCaseStudy}
                  className="w-full flex items-center justify-between text-left mb-4 group/case"
                  type="button"
                  aria-expanded={isExpanded}
                  data-expanded={isExpanded}
                  data-project-title={title}
                  id={`case-study-btn-${title.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  <span className="text-sm font-bold text-primary dark:text-primary">
                    View Case Study
                  </span>
                  {isExpanded ? (
                    <FiChevronUp className="text-lg text-primary group-hover/case:text-secondary transition-colors" />
                  ) : (
                    <FiChevronDown className="text-lg text-primary group-hover/case:text-secondary transition-colors" />
                  )}
                </button>

                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 text-textDark/70 dark:text-gray-300 border-t border-borderGray/50 dark:border-darkGray3/50 pt-4"
                  >
                    {problem && (
                      <div>
                        <h4 className="font-bold text-primary mb-2 text-sm">Problem:</h4>
                        <p className="text-sm leading-relaxed">{problem}</p>
                      </div>
                    )}
                    
                    {solution && (
                      <div>
                        <h4 className="font-bold text-secondary mb-2 text-sm">Solution:</h4>
                        <p className="text-sm leading-relaxed">{solution}</p>
                      </div>
                    )}
                    
                    {outcome && (
                      <div>
                        <h4 className="font-bold text-secondary mb-2 text-sm">Outcome:</h4>
                        <p className="text-sm leading-relaxed">{outcome}</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            )}

            {/* View Project Button - Only show if link exists and is not # */}
            {link && link !== '#' && (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg group/btn mt-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Project</span>
                <FiArrowRight className="text-base group-hover/btn:translate-x-1 transition-transform duration-300" />
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
