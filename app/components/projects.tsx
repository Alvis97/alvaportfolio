"use client"

import React, { useState } from 'react'
import { projects } from "../data/projectData"
import Link from 'next/link'

function Projects() {
   const [category, setCategory] = useState("web3")
  return (
    <div className='h-screen w-screen flex flex-col-reverse justify-between lg:flex-row'>
        <div className='w-[100%] flex flex-col h-[100%] items-center gap-10 lg:pt-40 lg:w-[60%]'>
            <div className='flex flex-row w-[80vw] overflow-x-auto gap-4 items-center justify-center h-[80%] lg:overflow-y-auto lg:flex-col lg:w-[100%]'>
            {projects.filter(p => p.category === category).length === 0 ? (
                    <p>Projects coming soon</p>
                ) : (

                projects.filter(p => p.category === category).map((project, i) => (
                     <Link 
                     key={i} 
                     className='project-card flex-shrink-0 min-w-[80vw] flex flex-col-reverse gap-10 justify-between items-center border-xl h-100 w-[70vw] cursor-pointer lg:h-90 lg:w-180 lg:flex-row lg:min-w-140'
                     href={`/projects/${project.slug}`}>
                        <div className='w-[100%] lg:w-150'>
                        <h1 className='text-xl lg:text-3xl'>{project.title}</h1>
                        <p className='text-xs text-[var(--accent)] lg:text-sm'>{project.techStack.join(", ")}</p>
                        <p className='text-xs pt-3 lg:text-sm'>{project.subtitle}</p>
                        </div>
                        <img className='h-[60%] rounded-sm lg:h-[100%]' src={project.image[0]} alt="" />
                    </Link>
                ))
                )}

            </div>
        </div>

        <div className='w-[100%] h-[400px] pt-7 flex flex-col justify-center items-center lg:w-[40%] lg:h-screen'>
            <div className='w-[80%] flex flex-col text-left lg:text-right lg:w-50 '>
            <p className='text-sm text-[var(--accent)] font-[var(--font-onest)] '>PROJECTS</p>
            <button 
            className={`${category === "web3" ? "text-3xl" : "text-xl"} cursor-pointer text-left lg:text-right`}
            onClick={() => setCategory("web3")}
            >Blockchain
            </button>
            <button
            className={`${category === "web2" ? "text-3xl" : "text-xl"} cursor-pointer text-left  lg:text-right `}
            onClick={() => setCategory("web2")}
            >Web2
            </button>
            </div>
           
        </div>
        </div>
  )
}

export default Projects