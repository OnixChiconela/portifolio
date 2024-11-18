'use client'

import Container from "../Container"
import Logo from "./Logo"
import { Menu } from "./Menu"


interface NavbarProps {
    refs: {
        hiSection: React.RefObject<HTMLDivElement>;
        about: React.RefObject<HTMLDivElement>;
        experience: React.RefObject<HTMLDivElement>;
        projects: React.RefObject<HTMLDivElement>;
        contact: React.RefObject<HTMLDivElement>;
    };
}

export const Navbar: React.FC<NavbarProps> = ({ refs }) => {
    return (
        <div>
            <div
                className="
                    py-4
                    border-b-[1px]
                    bg-white
                    w-full                    
                "
            >
                <Container>
                    <div className="
                        flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
                        md:gap-0
                    ">
                        <Logo />
                        <Menu refs={refs} />
                    </div>
                </Container>
            </div>
        </div>
    )
}