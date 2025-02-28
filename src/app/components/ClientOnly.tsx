'use client'

import { useEffect, useState } from "react"

interface ClientOnlyProps {
    children: React.ReactNode
}

export const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {
    const [hasMaunted, setHasMaunted] = useState(false)
    useEffect(() => {
        setHasMaunted(true)
    }, [])
    if (!hasMaunted) {
        return null;
    }
    return (
        <>
            {children}
        </>
    )
}