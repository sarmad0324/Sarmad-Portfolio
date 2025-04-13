"use client"
import Image from "next/image";
import { ProjectInfo } from "@/lib/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

type ProjectProps = ProjectInfo;

export default function Project({
  title,
  description,
  tags,
  imageUrl,
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
      <CardBody className="bg-gray-50  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-700 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border  ">     
       <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
         {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
   {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full">
          <Image
            src={imageUrl}
            height={1000}
            width={1000}
            className="h-[400px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
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
               className="bg-black/[0.7] px-3 py-1 dark:bg-gray-800 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                 {tag}
              </li>
            ))}
          </ul>
          </CardItem>
</CardBody>

    </CardContainer>
  </motion.div>
  );
}
