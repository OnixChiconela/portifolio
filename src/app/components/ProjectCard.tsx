import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { div } from "framer-motion/client";

const ProjectCard = ({ imgUrl, title, description, path, git }: any,) => {
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
                            className="h-14 w-14 border-2 relative rounded-full border-white hover:border-fuchsia-600 
                            flex justify-center items-center group/link"
                        >
                            <span className="text-lg text-fuchsia-600 cursor-pointer group-hover/link:text-white">
                                {"</>"}
                            </span>
                        </Link>
                    )}
                </div>
            </div>
            <div className="text-white rounded-b-xl rounded-t-xl bg-[#181818] py-6 px-4 h-52 md:h-72">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p>{description as string}</p>
            </div>
        </div>
    );
};

export default ProjectCard