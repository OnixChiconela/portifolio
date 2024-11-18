'use client';

import Image from "next/image";
import { useRouter } from "next/navigation"

const Logo = () => {
    const router = useRouter();

    return (
        /*<div><img src="/images/Logo.png" alt="images/logo.png"
        className="hidden md:block cursor-pointer" height="50"
        width="50"/></div>*/

        <div onClick={() => router.push("/")} className="cursor-pointer">
            <>
            <Image 
                src={"/logo.svg"}
                width={50}
                height={50}
                alt="mosaik"
            />
            </>
        </div>
    )
}

export default Logo;