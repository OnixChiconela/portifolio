import React from 'react'

interface TecnicalImpactProps {
    tecnicalSummary?: string
    tecnicalSummaryFront?: string
    tecnicalDesc?: string
    impact?: string
    userImpact?: string
    impactSlogan?: string
    summaryOrimpact?: string

}

const TecnicalAndImpact: React.FC<TecnicalImpactProps> = ({
    tecnicalDesc,
    tecnicalSummary,
    tecnicalSummaryFront,
    impact,
    userImpact,
    impactSlogan
}) => {
    return (
        <div className='
            my-20
            justify-center items-center max-w-screen-xl mx-auto'>
            <div className='lg:px-28 px-20 gap-3 flex flex-col'>
                <text className='text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text
                    bg-gradient-to-r from-gray-900 via-fuchsia-950 to-black
                '>
                    Tecnical Hightlights
                </text>
                <div>
                    {tecnicalDesc}
                </div>

                {tecnicalSummary ? (
                    <div className='mt-10'>
                        <text className='font-bold text-lg
                            text-transparent bg-clip-text bg-gradient-to-r
                            from-black to-gray-900
                        '>Tecnical Summary</text> <br />
                        <ul className='list-disc pl-10'>
                            <li><text className='font-bold'>Backend: </text><text>{tecnicalSummary}</text></li>
                            <li><text className='font-bold'>Frontend: </text><text>{tecnicalSummaryFront}</text></li>
                        </ul>



                    </div>
                ) : (
                    <div></div>
                )}
            </div>


            <div className="border-b-[1px] my-20" />

            <div className='lg:px-28 px-20 gap-3 flex flex-col'>
                <text className='text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text
                    bg-gradient-to-r from-gray-900 via-fuchsia-950 to-black
                '>
                    Project Impact
                </text>
                <div>
                    <text className='text-xl md:text-2xl font-extrabold text-transparent bg-clip-text
                    bg-gradient-to-r from-gray-900 via-fuchsia-950 to-black my-20
                '>
                        Personal Impact
                    </text>
                    <div className='mt-2'>
                        {impact}
                    </div>
                </div>
                <div className="border-b-[1px] my-10" />
                <div>
                    <text className='text-xl md:text-2xl font-extrabold text-transparent bg-clip-text
                    bg-gradient-to-r from-gray-900 via-fuchsia-950 to-black my-20
                '>
                        User Impact
                    </text>
                    <div className='mt-2'>
                        {userImpact}
                    </div>
                </div>
                <div className='font-bold'>{impactSlogan}</div>
            </div>

        </div>
    )
}

export default TecnicalAndImpact