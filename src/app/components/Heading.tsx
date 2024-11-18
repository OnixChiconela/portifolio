'use client';

interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle,
    center
}) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <div>
                <text className=" text-2xl md:text-4xl  font-bold
                text-transparent bg-clip-text
                bg-gradient-to-r from-gray-900
                via-fuchsia-950 to-black">
                    {title}
                </text>
            </div>
            <div className="font-light text-neutal-500 mt-2">
                {subtitle}
            </div>
        </div>
    );
}

export default Heading;