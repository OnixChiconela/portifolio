"use client";

import ContactSection from "../components/ContactSection";
import SimpleNavbar from "../components/navbar/SimpleNavbar";
import ProjectHead from "../components/projects/ProjectHead"
import ProjectInfo from "../components/projects/ProjectInfo"
import TecnicalAndImpact from "../components/projects/TecnicalAndImpact";
import { Project } from "../types"
import { motion } from "framer-motion";


interface ProjectClientProps {
    project: Project
}
const ProjectClient: React.FC<ProjectClientProps> = ({
    project
}) => {

    const endAnimation = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };
    return (
        <div className=" mx-auto">
            <div>
                <SimpleNavbar />
                <div>
                    <ProjectHead
                        title={project.title}
                        coverImage={project.coverImage}
                        subtitle={project.description}
                    />
                    <div className="border-b-[1px] my-20 " />
                    <div
                        className="
                     md:gap-10
                     justify-center items-center max-w-screen-xl mx-auto
                    "
                    >
                        <ProjectInfo
                            fun1={project.fun1}
                            fun1Image1={project.fun1Image1}
                            fun1Description={project.fun1Description}
                            fun1Image2={project.fun1Image2}
                            fun2={project.fun2}
                            fun2Image1={project.fun2Image1}
                            fun2Image2={project.fun2Image2}
                            fun2Description={project.fun2Description}
                            fun3={project.fun3}
                            fun3Image1={project.fun3Image1}
                            fun3Image2={project.fun3Image2}
                            fun3Description={project.fun3Description}
                            stages={project.stages}
                        />
                    </div>
                    <div className="border-b-[1px] my-20" />
                    <TecnicalAndImpact
                        tecnicalDesc={project.summary}
                        tecnicalSummary={project.tecnicalSummary}
                        tecnicalSummaryFront={project.tecnicalFront}
                        impact={project.impact}
                        userImpact={project.userImpact}
                        impactSlogan={project.impactSlogan}
                    />
                </div>
                <motion.div
                    className="bg-[#161616] h-full py-10"
                    initial="hidden"
                    // animate={sectionVisible.contact ? "visible" : "hidden"}
                    // variants={scrollAnimation}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="border-b-[1px] my-16"
                        initial={{ opacity: 0 }}
                        // animate={sectionVisible.projects ? "visible" : "hidden"}
                        // variants={scrollAnimation}
                        transition={{ duration: 0.6 }}
                    />
                    <motion.div
                        className="px-14 lg:px-28 pb-10 max-w-screen-xl mx-auto"
                        initial="hidden"
                        // animate={sectionVisible.about ? "visible" : "hidden"}
                        // variants={scrollAnimation}
                        transition={{ duration: 0.8 }}
                    >
                        <ContactSection />
                    </motion.div>
                    <div className="flex-1"></div>
                </motion.div>
            </div>
            <motion.div
                className="flex justify-center items-center mt-20 mb-10"
                initial="hidden"
                animate="visible"
                variants={endAnimation}

                transition={{ duration: 0.6 }}
            >
                <div className="text-center text-xl font-extrabold bg-clip-text text-transparent 
          bg-gradient-to-r from-fuchsia-900 via-black to-red-500">
                    If you think the code is perfect, it’s because you haven’t run it in production yet
                </div>
                <text>__</text>
                <text> 💀 😅 </text>
            </motion.div>
        </div>
    )
}

export default ProjectClient