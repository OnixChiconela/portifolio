

import Image from "next/image";
import { useState } from "react";

export const HiSection = () => {

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (imageSrc: string) => {
        setSelectedImage(imageSrc);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className='col-span-5 place-self-center mb-10 lg:mb-0 cursor-pointer'>
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] mb-6 lg:w-[300px] lg:h-[300px] relative"
                        onClick={() => handleImageClick("/ig_profile.png")}
                    >
                        <Image
                            src={`/ig_profile.png`}
                            alt="it&apos;s Onix"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                            width={200}
                            height={100}
                        />
                    </div>
                </div>
                <div className="col-span-7 justify-center text-center sm:text-left lg:pr-2">
                    <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-900">
                            {"HI, I'm "}
                        </span>
                        <text className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-fuchsia-950 to-black">Jose Chiconela</text>
                    </h1>
                    <h1 className="text-[4px] text-transparent">Jose Chiconela</h1>
                    <h2 className="text-lg lg:text-xl mb-4 lg:pr-5">
                        <text className="font-bold">Software developer</text> related to <text className="font-bold">backend development</text> while expanding expertise in
                        <text className="font-bold"> mobile development</text>, seeking to leverage technical and soft skills to contribute to a dynamic, forward-thinking organization.
                        With focus on driving innovation and delivering high quality results.
                    </h2>
                    <div>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-black via-fuchsia-900 to-gray-900 hover:bg-[#181818] hover:text-white text-black mt-3">
                            <a href="/CV/Resume.Jose_Chiconela.P.pdf" download>
                                <span className="block bg-[#fff] hover:bg-slate-800 rounded-full px-5 py-2">Download Resume/CV</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
                    onClick={handleCloseModal}
                >
                    <div
                        className="relative bg-white p-4 rounded-md max-w-3xl w-11/12 "
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="absolute top-5 right-9">
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
                            width={1000}
                            height={800}
                            style={{ maxHeight: '80vh', maxWidth: '100%' }}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};
