import React from 'react'
import Image1 from '../../../assets/about/AboutPageImage1.jpg'
import Image3 from '../../../assets/about/AboutPageImage3.jpg'
import Image from 'next/image'

const AboutPage = () => {
    return (
        <div className='bg-gray max-w-screen overflow-x-hidden'>
            <div className='flex flex-col justify-center items-center'>
                <div className='pt-32'>
                    <h1 id='about' className='text-2xl font-abril text-light tracking-tighter drop-shadow-md'>ABOUT
                        <span className='text-main'>.</span>
                    </h1>
                </div>
                <div className='grid grid-cols-12 gap-x-5 px-5 w-screen'>
                    <div className='col-start-2 col-span-10 grid grid-rows-3 pt-32 pb-36 gap-y-72 mb-32'>
                        <div className='row-span-1 flex flex-row justify-between items-center gap-x-52 pr-10 border-r-4 border-main'>
                            <div>
                                <h1 className='text-xl font-cabin font-bold italic text-light '>Who am I</h1>
                                <p className='text-light font-cabin text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            </div>
                            <Image src={Image1} alt='Image1' width={600} height={400} className='object-cover object-center rounded-xl' />
                        </div>
                        <div className='row-span-1 flex flex-row justify-between items-center gap-x-52 pl-10 border-l-4 border-main'>
                            <Image src={Image1} alt='Image1' width={600} height={400} className='object-cover object-center rounded-xl' />    
                            <div>
                                <h1 className='text-xl font-cabin font-bold italic text-light'>What I do</h1>
                                <p className='text-light font-cabin text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            </div>
                            
                        </div>
                        <div className='row-span-1 flex flex-row justify-between items-center gap-x-52 pr-10 border-r-4 border-main'>
                            <div>
                                <h1 className='text-xl font-cabin font-bold italic text-light'>My interests</h1>
                                <p className='text-light font-cabin text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            </div>
                            <Image src={Image3} alt='Image3' width={600} height={400} className='object-cover object-center rounded-xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
