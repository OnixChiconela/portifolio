'use client'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'
import AboutText from './AboutText'
import Image from 'next/image'

const DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className='gap-6 grid md:grid-cols-3 lg:grid-cols-4 lg:mx-10 '>
                <div>
                    <text className='font-bold mb-5'>Programming Languages</text>
                    <ul className='list-disc font-medium pl-5'>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                    </ul>
                </div>
                <div>
                    <text className='font-bold mb-5'>Framework & Libraries</text>
                    <ul className='list-disc font-medium pl-5'>
                        <li>Spring Boot</li>
                        <li>NestJS</li>
                        <li>React Native</li>
                    </ul>
                </div>
                <div>
                    <text className='font-bold mb-5'>Databases</text>
                    <ul className='list-disc font-medium pl-5'>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div>
                    <text className='font-bold mb-5'>Soft skills</text>
                    <ul className='list-disc font-medium pl-5'>
                        <li>Analytical thinking</li>
                        <li>Collaboration & Teamwork</li>
                        <li>Problem-Solving</li>
                        <li>Adaptability</li>
                    </ul>
                </div>
            </div>
        )
    },

    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-5 font-semibold'>
                <li>Degree in Computer Science at Eduardo Mondlane University (currently enrolled)</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [selected, setSelected] = useState("skills")
    const [pending, transiction] = useTransition();

    const handleSelectet = (id: string) => {
        transiction(() => { setSelected(id) })
    }
    return (
        <div className='sm:mt-15 lg:mt-20'>
        <div className='mb-8'>
            <h2 className='font-bold text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-fuchsia-950 to-black'>About</h2>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-12 gap-5'>
            {/* Image Column */}
            <div className='sm:h-52 lg:h-96 lg:col-span-4'>
                <Image
                    src="/engineer.webp"
                    alt="Software Engineer Workspace with Java"
                    width={400}
                    height={500}
                    objectFit="cover"
                    className="rounded-lg border-2 shadow-sm shadow-neutral-50"
                />
            </div>

            {/* Text Column */}
            <div className='mt-0 sm:mt-0 text-left flex flex-col h-full lg:col-span-8'>
                <AboutText />
                <div className='flex flex-row mt-5 gap-5'>
                    <TabButton
                        selectedTab={() => handleSelectet("skills")}
                        active={selected === "skills"}>
                        Skills
                    </TabButton>
                    <TabButton
                        selectedTab={() => handleSelectet("education")}
                        active={selected === "education"}>
                        Education
                    </TabButton>
                </div>
                <div className='mt-6 lg:h-36'>
                    {DATA.find((t) => t.id === selected)?.content}
                </div>
            </div>
        </div>
    </div>

    )
}

export default AboutSection