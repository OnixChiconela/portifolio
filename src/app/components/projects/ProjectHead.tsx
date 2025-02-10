"use client"

import Image from "next/image";
import Heading from "../Heading";
import { motion } from "framer-motion";

interface ProjectHeadProps {
    title: string;
    coverImage: string;
    subtitle: string;
}

const ProjectHead: React.FC<ProjectHeadProps> = ({
    title,
    coverImage,
    subtitle,
}) => {
    return (
        <>
            <motion.div
                className="
                    w-full
                    h-64
                    md:h-[500px]
                    xl:h-[624px]
                    justify-center items-center max-w-screen-xl mx-auto
                    px-20
                    lg:px-28

                    overflow-hidden
                    relative
                    rounded-b-xl
                    origin-bottom
                "
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <Image
                    alt="Image"
                    src={coverImage}
                    fill
                    className="object-cover w-full h-full max-w-screen-xl mx-auto"
                />
            </motion.div>
            <div className="
                px-20
                my-20
                lg:px-28
                justify-center items-center max-w-screen-xl mx-auto
            ">
                <Heading
                    title={title}
                    subtitle={subtitle}
                />
            </div>
        </>
    );
};

export default ProjectHead;
