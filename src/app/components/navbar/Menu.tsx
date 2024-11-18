'use client'
import { MutableRefObject } from "react";


interface MenuProps {
    refs: {
        hiSection: MutableRefObject<HTMLDivElement | null>;
        about: MutableRefObject<HTMLDivElement | null>;
        experience: MutableRefObject<HTMLDivElement | null>;
        projects: MutableRefObject<HTMLDivElement | null>;
        contact: MutableRefObject<HTMLDivElement | null>;
    };
}

export const Menu: React.FC<MenuProps> = ({ refs }) => {
    const handleScroll = (ref: MutableRefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={() => handleScroll(refs.about)}
                    className="
                      md:block
                      text-sm
                      font-semibold
                      py-3
                      px-4
                      rounded-full
                      hover:bg-neutral-100
                      hover:shadow-md
                      transiction
                      cursor-pointer
                      
                    "
                >
                    about
                </div>
                <div
                    onClick={() => handleScroll(refs.projects)}
                    className="
                      hidden
                      md:block
                      text-sm
                      font-semibold
                      py-3
                      px-4
                      rounded-full
                      hover:bg-neutral-100
                      transiction
                      cursor-pointer
                    "
                >
                    Projects
                </div>

                <div
                    onClick={() => handleScroll(refs.contact)}
                    className="
                      md:block
                      text-sm
                      py-3
                      font-extrabold
                      
                      px-4
                      rounded-full
                      hover:bg-neutral-100
                      hover:shadow-md
                      transiction
                      cursor-pointer
                      text-fuchsia-900
                    "
                >
                    contact
                </div>
            </div>
        </div>
    )
}