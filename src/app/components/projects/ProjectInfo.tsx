"use client"

import { motion } from "framer-motion"
import Image from "next/image";
import { useState } from "react";

interface ProjectInfoProps {
    fun1?: string;
    fun1Image1?: string
    fun1Image2?: string
    fun1Description?: string;
    fun1Video?: string

    fun2?: string;
    fun2Image1?: string
    fun2Image2?: string
    fun2Description?: string;
    fun2Video?: string

    fun3?: string
    fun3Image1?: string
    fun3Image2?: string
    fun3Video?: string
    fun3Description?: string
    stages?: string[];
}

interface imageProps { src: string | undefined }


const ProjectInfo: React.FC<ProjectInfoProps> = ({
    fun1,
    fun1Image1,
    fun1Image2,
    fun1Description,
    fun1Video,

    fun2,
    fun2Image1,
    fun2Image2,
    fun2Description,
    fun2Video,

    fun3Image1,
    fun3Image2,
    fun3Description,
    fun3,
    stages
}) => {

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (imageSrc?: string) => {
        setSelectedImage(imageSrc!);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const ImageCard: React.FC<imageProps> = ({ src }) => {
        if (!src) return null;

        return (
            <div
                className="h-40 lg:hover:-mt-1 md:h-80 rounded-md cursor-pointer
            p-1 border-transparent bg-clip-border bg-gradient-to-b
            from-black via-fuchsia-950 to-black shadow-md
            shadow-black"

            onClick={() => handleImageClick(src)}
            >
                <Image
                    src={src}
                    alt="Image 1"
                    width={1120}
                    height={1120}
                    quality={50}
                    className="object-cover h-full w-full rounded-md"
                />
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-8 px-20 lg:px-28">
            <div >
                <text className="text-2xl md:text-3xl font-extrabold
                    text-transparent bg-clip-text
                    bg-gradient-to-r from-gray-900
                  via-fuchsia-950 to-black
                ">
                    Features
                </text>
            </div>

            <motion.div
                className="gap-3 flex flex-col"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.8 }}
            >
                <text className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-fuchsia-950 to-black">{fun1}</text>
                <div className="font-light text-neutral-900">{fun1Description}</div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-10 justify-center items-center">
                    <ImageCard src={fun1Image1} />
                    <ImageCard src={fun1Image2} />

                    <div className="h-80 lg:h-80 col-span-1 lg:col-span-2 bg-gradient-to-r from-gray-950 to-black rounded-md">
                        <video controls className="h-full w-full rounded-md">
                            <source src={fun1Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </motion.div>

            <div className="border-b-[1px] my-20" />

            <motion.div
                className="gap-3 flex flex-col"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.8 }}
            >
                <text className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-fuchsia-950 to-black">{fun2}</text>
                <div className="font-light text-neutral-900">{fun2Description}</div>
                {stages && stages.length > 0 && (
                    <div className="mt-4 space-y-2">
                        {stages.map((stage, index) => (
                            <div key={index} className="text-neutral-700 pl-4 border-l-4 border-fuchsia-900">
                                {stage}
                            </div>
                        ))}
                    </div>
                )}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-10 justify-center items-center">
                    <ImageCard src={fun2Image1} />
                    <ImageCard src={fun2Image2} />

                    <div className="h-80 lg:h-80 col-span-1 lg:col-span-2 bg-gradient-to-r from-gray-950 to-black rounded-md"> {/* Replace with Video component */}
                        <video controls className="h-full w-full rounded-md">
                            <source src={fun2Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </motion.div>

            {fun3 ? (
                <div>
                    <div className="border-b-[1px] my-20" />
                    <motion.div
                        className="gap-3 flex flex-col"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <text className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-fuchsia-950 to-black">{fun3}</text>
                        <div className="font-light text-neutral-900">{fun3Description}</div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-10 justify-center items-center">
                            <ImageCard src={fun3Image1} />
                            <ImageCard src={fun3Image2} />

                            <div className="h-80 lg:h-80 col-span-1 lg:col-span-2 bg-gradient-to-r from-gray-950 to-black rounded-md">
                                <video controls className="h-full w-full rounded-md">
                                    <source src="" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </motion.div>
                    {selectedImage && (
                        <div
                            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
                            onClick={handleCloseModal}
                        >
                            <div
                                className="relative bg-gradient-to-b from-white to-[#ededed] p-4 rounded-md max-w-6xl w-11/12"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="absolute top-10 right-10">
                                    <button
                                        className="bg-white hover:bg-gray-300 text-black text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center border border-gray-400"
                                        onClick={handleCloseModal}
                                    >
                                        X
                                    </button>
                                </div>

                                <Image
                                    src={selectedImage}
                                    alt="Selected"
                                    className="object-contain mx-auto"
                                    width={1100}
                                    height={600}
                                    // className="max-h-[80vh]"

                                    style={{ maxHeight: '80vh', maxWidth: '100%' }}
                                />
                                {/* <img src={selectedImage} className="max-h-[80vh]"/> */}
                            </div>
                        </div>
                    )}
                </div>


            ) : (
                <></>
            )}
        </div>
    );
};

export default ProjectInfo;
