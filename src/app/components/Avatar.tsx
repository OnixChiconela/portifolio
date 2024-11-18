'use client';

import Image from "next/image";


interface AvatarProps {
    src: string | null | undefined
};


const Avatar: React.FC<AvatarProps> = ({
    src
}) => {
    return ( 
        <div><img className="rounded-full" 
        height={30} width={30} alt="Avatar" src={"/images/placeholder.png"}></img></div>
        
       
      /* <Image 
         className="rounded-full"
         height="30"
         width="30"
         alt="Avatar"
         src={src || "/images/placeholder.png"}
       />*/
    )
}

export default Avatar