"use client"
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project-card";
import { useSectionInView } from "@/lib/useInView";



export default function Projects (){
    const {ref} = useSectionInView("#projects")
    return(
        <section     ref={ref}
        id="projects" className="scroll-mt-28 mb-28 mt-20">
            <SectionHeading>
                My Projects
            </SectionHeading>
            <div>
                {
                    projectsData.map((project,index)=>(
                        <Project {...project} key={index} />
                    ))
                }
            </div>
        </section>
    )
}