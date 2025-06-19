"use client"
import { projectsData } from "@/lib/data"
import Project from "./project-card";
import { useSectionInView } from "@/lib/useInView";



export default function Projects (){
    const {ref} = useSectionInView("#projects")
    return(
        <section     ref={ref}
        id="projects" className="scroll-mt-28 mb-28 mt-20">
             <h2 className="text-3xl font-bold uppercase mb-12 text-center">
          My Projects
        </h2>
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