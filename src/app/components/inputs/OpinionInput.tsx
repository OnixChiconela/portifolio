import { div } from "framer-motion/client"

interface OpinionProps {
    title: string,
    description?: string
    onClick?: () => void
}

const OpinionInput: React.FC<OpinionProps> = ({
    title,
    description,
    onClick
}) => {
    return (
        <div>
            <div className="
                 bg-[#232323]
                p-2
                w-full
                rounded-md
                hover:scale-105
                flex
                items-center
                justify-between
                gap-3
                md:gap-56
                cursor-pointer
            "
                onClick={onClick}
            >
                <div>
                    <p className="text-lg font-semibold text-white">{title}</p>
                    <p className="text-sm font-extralight text-[#b0b0b0]">{description}</p>
                </div>
                <div className="p-2">
                    <p className="text-2xl text-white">{">"}</p>
                </div>
            </div>
        </div>
    )
}

export default OpinionInput