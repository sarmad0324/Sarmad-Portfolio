"use client"
import Image from "next/image";
import { ProjectInfo } from "@/lib/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FiArrowRight } from 'react-icons/fi';

type ProjectProps = ProjectInfo;

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target:ref,
        offset:["0 1","1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress,[0,1],[0.8,1]);
    const opacityProgres = useTransform(scrollYProgress,[0,1],[0.6,1]);

  return (
    <motion.div
    ref={ref}
    style={{
      scale:scaleProgress,
      opacity:opacityProgres
  }}
  initial={{ scale: 1 }} 
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }} 
    >

    <CardContainer
    className="inter-var ">
      <CardBody className="bg-light1 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-darkGray1 dark:border-darkGray2 border-light3 w-auto sm:w-[30rem] h-auto rounded-xl p-4 border  ">     
       <CardItem
          translateZ="50"
          className="text-gray-900 dark:text-darkGray3 font-bold text-xl"
        >
         {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-700 dark:text-darkGray3 text-sm max-w-sm mt-2"
        >
   {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full">
          <Image
            src={imageUrl}
            height={1000}
            width={1000}
            className="h-[400px] w-full object-cover rounded-xl group-hover/card:shadow-xl bg-light2 dark:bg-darkBlack"
            alt="thumbnail"
          />
        </CardItem>
     
               <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl  text-white text-xs font-bold"
          >
             <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
             <li
          key={index}
               className="bg-primary/10 text-primary px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full border border-primary/20"
              >
                 {tag}
              </li>
            ))}
          </ul>
          </CardItem>
          {/* View Project Link/Button */}
          {link && link !== '#' && (
            <CardItem
              translateZ={20}
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex px-6 py-2 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg font-bold text-sm tracking-wide transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary items-center gap-2"
            >
              View Project <FiArrowRight className="ml-1 text-lg" />
            </CardItem>
          )}
</CardBody>

    </CardContainer>
  </motion.div>
  );
}
