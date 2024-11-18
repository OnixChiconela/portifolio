import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import { SimpleMenu } from './SimpleMenu'

const SimpleNavbar = () => {
    return (
        <div>
            <div
                className='
            py-4
            border-b-[1px]
            '
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
                        <SimpleMenu />
                    </div>
                </Container>
            </div>
        </div>

    )
}

export default SimpleNavbar