import React from 'react'
import Container from '../components/Container'
import Image from 'next/image'

const Project = () => {
  return (
    <Container>
      <div className=''>

        <div className="flex flex-row justify-between">
          <div className='
            w-full 
            h-[44vh]
            md:h-[60vh]
            overflow-hidden
            relative
          '
          >
            <Image
              alt='Image'
              src={"/properties/artboart.png"}
              fill
              className='object-cover w-full'
            />
          </div>
          <div>

          </div>
        </div>

        <div className="font-semibold flex flex-col px-20">
          <text className='text-2xl mt-16'>Title</text><br />
          <text>Description</text> <br />
          <text className="font-normal flex flex-col">
            A traveller app created for property listing, reserve and management, designed to connect property owners and potential tenants
            in an effecient way. Developed with a combination of modern technologies, the platform offers a seamless user experience and user-friendly
            interface to facilite navigation and property search.
            <br />
            <text className='mt-6 font-semibold'>Key Feature</text><br />
            <ul className='md:list-disc pl-5 '>
              {/* <div className="grid md:grid-cols-2 md:gap-8 items-center md:mb-8"> */}
              <div className="mb-8 md:grid md:grid-cols-2 md:grid-flow-row md:gap-8 md:mb-8 items-center">

                <div className='mb-5'>
                  <Image
                    src={"/properties/artboart.png"}
                    alt='properto'
                    width={250}
                    height={250}
                    className='rounded-xl'
                  />
                </div>
                <li className="mb-2"><text className='font-semibold'>property Listing: </text>
                  Users can view and search a wide range of available properties, with advanced filters to search based on location,property categories
                  and other relevant characteristics. And if want can create their own listing and list for everyone
                </li>
              </div>

              <div className="mb-8 md:grid md:grid-cols-2 md:grid-flow-row md:gap-8 md:mb-8 items-center">

                <div className='mb-5'>
                  <Image
                    src={"/properties/artboart.png"}
                    alt='properto'
                    width={250}
                    height={250}
                    className='rounded-xl'
                  />
                </div>
                <li className="mb-2"><text className='font-semibold'>property Details: </text>
                  Each listing includes detailed information about the property, such as photos, comprehensive descriptions, specific features,
                  and location information, probiding a clear thorough view of available options
                </li>
              </div>


              <div className="mb-8 md:grid md:grid-cols-2 md:grid-flow-row md:gap-8 md:mb-8 items-center">
                <div className='mb-5'>
                  <Image
                    src={"/properties/artboart.png"}
                    alt='properto'
                    width={250}
                    height={250}
                    className='rounded-xl'
                  />
                </div>
                <li className="mb-2"><text className='font-semibold'>User Experience: </text>
                  Focused on simplifity and effectiveness, the platform offers intuitive navigation, with a responsive design that adapts to different devices,
                  ensuring continuous and easy access from anywhere.
                </li>
              </div>

            </ul>
            allows legal age indivual to create a new listing and reserve one in easiest way
            possible
          </text>
        </div>
      </div>
    </Container>
  )
}

export default Project