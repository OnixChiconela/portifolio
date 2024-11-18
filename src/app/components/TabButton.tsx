import React from 'react'

const TabButton = ({ active, selectedTab, children }: any) => {
    const buttonClasses = active ? "text-black border-b border-fuchsia-900 text-transparent bg-clip-text bg-gradient-to-r from-black via-fuchsia-950 to-gray-900" : "text-[#545454]"
    return (
        <button onClick={selectedTab}>
            <p className={`hover:text-black font-semibold ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton