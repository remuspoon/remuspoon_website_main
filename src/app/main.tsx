import React from 'react'
import Image from 'next/image'
import HeadingImage from '../assets/home/Heading.png'
import HeadingImageOutline from '../assets/home/HeadingOutline.png'
import Hero from '../assets/home/Hero.jpg'
import ScrollText from '../components/home/scrollText'

const Main = () => {
    return (
        <div id='home' className='min-h-full max-h-screen max-w-screen bg-dark grid grid-rows-4 overflow-hidden'>
            <div className='row-span-3 grid grid-cols-12 gap-x-5 px-5  bg-gray overflow-x-clip '>
                <div className='col-start-2 col-span-10'>
                    <div className='relative'>
                        {/* Heading and Background */}
                        <div className='grid grid-cols-10 gap-x-5'>
                            <div className='flex flex-col justify-start gap-y-2 col-span-8  min-w-[800px]'>
                                <Image src={HeadingImage} alt='Heading' className='drop-shadow-md z-40 select-none' />
                                <div className='flex flex-col justify-start gap-y-2 '>
                                    <Image src={HeadingImageOutline} alt="HeadingOutlined" className='opacity-75 select-none' />
                                    <Image src={HeadingImageOutline} alt="HeadingOutlined" className='opacity-50 select-none' />
                                    <Image src={HeadingImageOutline} alt="HeadingOutlined" className='opacity-25 select-none' />
                                </div>
                            </div>
                        </div>
                        {/* Menu */}
                        <div className='absolute top-1/3'>
                            <ul className='flex flex-col justify-start gap-y-2 bg-gray px-20 py-8 select-none '>
                                <li><a href="#blog" className='text-light font-cabin font-bold italic text-xl tracking-tight'>BLOGS</a></li>
                                <li><a href="#about" className='text-light font-cabin font-bold italic text-xl tracking-tight'>ABOUT</a></li>
                                <li><a href="#contact" className='text-light font-cabin font-bold italic text-xl tracking-tight'>CONTACT</a></li>
                            </ul>
                        </div>
                        {/* Hero */}
                        <div className='absolute top-14 right-0 w-2/5'>
                            <Image src={Hero} alt='Hero' className='min-w-[400px] h-full z-30 rounded-lg select-none ' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Bar */}
            <div className='row-span-1 grid grid-cols-5 h-full gap-x-5 px-5 pt-5 bg-dark overflow-y-clip '>
                <div className= 'col-start-1 col-span-2 flex flex-col justify-end'>
                    {/* Scroll Animation*/}
                    <div className='flex flex-col justify-center text-center'>
                        <ScrollText />
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='col-span-1 h-40 mt-5 border-accent border-r-2'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
