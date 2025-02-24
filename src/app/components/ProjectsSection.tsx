'use client'
import React, { useTransition, useState } from 'react'
import TabButton from './TabButton';
import ProjectCard from './ProjectCard';

const DATA = [
    {
        id: 1,
        title: "Fireus",
        description: `Share your food business or explore new experience as a 
        guest, connect wih new people, discover unique places, and enjoy unforgettable food experiences`,
        image: "/coming/final_thumb.png",
        tag: ["Mobile"],
        path: "/project-page",
        git: "/"
    },
    {
        id: 2,
        title: "Web Traffic Management Service",
        description: `A web-traffic management system designed to optimize performance, enhance scalability, 
        and ensure seamless user experiences by efficiently handling and distributing incoming requests across resources while maintaining high availability and reliability`,
        image: "/web_traffic.webp",
        tag: ["All"],
        path: "",
        git: "https://github.com/OnixChiconela/TrafficManagementService"
    },
    {
        id: 3,
        title: "Portifolio",
        description: "",
        image: "/portifolio.png",
        tag: ["All"],
        path: "",
        git: "#"
    },
]

const ProjectsSection = () => {
    return (
        <div className='mt-5 sm:mt-5 lg:mt-10'>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-br from-[#f0f0f0] via-fuchsia-950 to-white h-16'>Projects</h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
                {DATA.map((project) =>
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description.length > 280 ? project.description.slice(1, 280) + "..." : project.description}
                        imgUrl={project.image}
                        path={project.path}
                        git={project.git}
                    />
                )}
            </div>

        </div>
    )
}

export default ProjectsSection