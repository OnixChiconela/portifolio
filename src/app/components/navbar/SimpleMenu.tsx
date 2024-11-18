'use client'
import { useRouter } from "next/navigation";
import { MutableRefObject } from "react";



export const SimpleMenu = () => {
    const router = useRouter()
  
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={() => router.push("/")}
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
                    onClick={() => router.push("/")}
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
                    onClick={() => router.push("/")}
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