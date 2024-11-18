import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { div } from "framer-motion/client";

// const ProjectCard = ({ imgUrl, title, description, path }: any) => {
//     const router = useRouter()

//     return (
//         <div className="cursor-pointer" onClick={() => router.push(path)}>
//             <div className="h-52 md:h-72 rounded-t-xl relative group rounded-b-xl mb-5" style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
//                 <div className="overlay items-center justify-center absolute to-o left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex flex-row gap-5 group-hover:bg-opacity-80 group-hover:rounded-xl transition-all duration-500">
//                     {path ? (
//                         <div>

//                         </div>
//                     ) : (
//                         <div className="overlay items-center justify-center absolute to-o left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex flex-row gap-5 group-hover:bg-opacity-80 group-hover:rounded-xl transition-all duration-500">
//                             <Link href={""} className="h-14 w-14 border-2 relative rounded-full border-fuchsia-900 hover:border-white group/link">
//                                 <text className="h-10 w-10 text-[#545454] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"></text>
//                             </Link>
//                             {/* <Link href={""} className="h-14 w-14 border-2 relative rounded-full border-[#121212] hover:border-white group/link">
//                                 <text className="h-10 w-10 text-[#545454] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white">""</text>
//                             </Link> */}
//                         </div>
//                     )}

//                 </div>
//             </div>
//             <div className="text-white rounded-b-xl rounded-t-xl bg-[#181818] py-6 px-4 h-52">
//                 <h5 className="text-xl font-semibold mb-2">{title}</h5>
//                 <p>{description}</p>
//             </div>
//         </div>
//     )
// }

const ProjectCard = ({ imgUrl, title, description, path, git }: any, ) => {
    const router = useRouter();

    const handleClick = () => {
        if (path) {
            router.push(path);
        }
    };

    return (
        <div className="cursor-pointer group">
            <div
                className="h-52 md:h-72 hover:-mt-1 rounded-t-xl relative rounded-b-xl mb-5"
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
                onClick={handleClick}
            >
                <div className="
                    overlay items-center justify-center absolute to-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex flex-row gap-5 
                    group-hover:bg-opacity-80 group-hover:rounded-xl transition-all duration-700
                    "
                >
                    {path ? (
                        <></>
                    ) : (
                        <Link
                            href={git}
                            className="h-14 w-14 border-2 relative rounded-full border-white hover:border-fuchsia-600 group/link justify-center items-center"
                        >
                            <text className="h-10 w-10 text-fuchsia-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white">
                                GitHub
                            </text>
                        </Link>
                    )}
                </div>
            </div>
            <div className="text-white rounded-b-xl rounded-t-xl bg-[#181818] py-6 px-4 h-52">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard