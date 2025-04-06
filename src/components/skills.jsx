"use client"
import { Fade } from "react-awesome-reveal";
import SectionHeading from "./section-heading";
import Tech from "../components/tech";
import React from 'react';
import { useSectionInView } from "@/lib/useInView";

const Skills = () => {  // Changed 'skills' to 'Skills'
  const { ref } = useSectionInView("#skills", 1);
  
  return (
    <div className="container mx-15 text-lg" ref={ref} id="skills">
      <SectionHeading>
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
          Skills
        </Fade>
      </SectionHeading>
      <div>
        <Tech />
      </div>
    </div>
  );
}

export default Skills; // Export the renamed component
