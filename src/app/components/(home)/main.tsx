import React from 'react'
import Image from 'next/image'
import HeadingImage from '../../../assets/home/Heading.png'
import HeadingImageOutline from '../../../assets/home/HeadingOutline.png'
import Hero from '../../../assets/home/Hero.jpg'
import ScrollText from './scrollText'

const Main = () => {
    return (
        <div id='home' className='min-h-screen max-h-screen max-w-screen bg-dark flex flex-col lg:grid lg:grid-rows-4 overflow-hidden'>
            <div className='lg:row-span-3 lg:grid lg:grid-cols-12 gap-x-5 px-5 bg-gray overflow-x-clip h-full pb-40 lg:pb-0 pt-5 lg:pt-0'>
                <div className='lg:col-start-2 lg:col-span-10'>
                    <div className='relative'>
                        {/* Heading and Background */}
                        <div className='lg:grid lg:grid-cols-10 gap-x-5 px-5 lg:px-0'>
                            <div className='flex flex-col justify-start gap-y-2 col-span-8 min-w-full lg:min-w-[800px]'>
                                <Image src={HeadingImage} alt='Heading' className='drop-shadow-md z-40 select-none' />
                                <div className='flex flex-col justify-start gap-y-2 '>
                                    <Image src={HeadingImageOutline} alt="HeadingOutlined" className='opacity-75 select-none' />
                                    <Image src={HeadingImageOutline} alt="HeadingOutlined" className='opacity-50 select-none' />
                                    <Image src={HeadingImageOutline} alt="HeadingOutlined" className='opacity-25 select-none' />
                                </div>
                            </div>
                        </div>
                        
                        {/* Large Screen Menu */}
                        <div className='absolute top-1/3 hidden lg:block'>
                            <ul className='flex flex-col justify-start gap-y-2 bg-gray px-20 py-8 select-none '>
                                <li><a href="#blog" className='text-light font-cabin font-bold italic text-xl tracking-tight hover:text-main inline-block hover:scale-105 transition-all duration-300'>BLOGS</a></li>
                                <li><a href="#about" className='text-light font-cabin font-bold italic text-xl tracking-tight hover:text-main inline-block hover:scale-105 transition-all duration-300'>ABOUT</a></li>
                                <li><a href="#contact" className='text-light font-cabin font-bold italic text-xl tracking-tight hover:text-main inline-block hover:scale-105 transition-all duration-300'>CONTACT</a></li>
                            </ul>
                        </div>
                        {/* Hero */}
                        <div className='absolute top-5 left-1/2 transform -translate-x-1/2 w-full lg:w-2/5 lg:left-auto lg:transform-none lg:top-14 lg:right-0'>
                            <Image src={Hero} alt='Hero' className='mx-auto lg:mx-0 w-3/4 lg:w-full max-w-[400px] lg:max-w-none z-30 rounded-lg select-none' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Small & Medium Screen Menu */}
            <div className='lg:hidden'>
                <ul className='flex flex-row flex-wrap justify-center bg-gray select-none py-10 max-w-screen gap-x-5 gap-y-2 px-5'>
                    <li><a href="#blog" className='text-light font-cabin font-bold italic text-lg md:text-xl tracking-tight hover:text-main inline-block hover:scale-105 transition-all duration-300'>BLOGS</a></li>
                    <p className='text-light font-cabin font-bold italic text-lg md:text-xl tracking-tight'>·</p>
                    <li><a href="#about" className='text-light font-cabin font-bold italic text-lg md:text-xl tracking-tight hover:text-main inline-block hover:scale-105 transition-all duration-300'>ABOUT</a></li>
                    <p className='text-light font-cabin font-bold italic text-lg md:text-xl tracking-tight'>·</p>
                    <li><a href="#contact" className='text-light font-cabin font-bold italic text-lg md:text-xl tracking-tight hover:text-main inline-block hover:scale-105 transition-all duration-300'>CONTACT</a></li>
                </ul>
            </div>
            {/* Bottom Bar */}
            <div className='row-span-1 grid grid-cols-2 lg:grid-cols-5 h-full gap-x-5 px-5 pt-5 bg-dark overflow-y-clip '>
                <div className= 'col-start-1 col-span-2 flex flex-col justify-end'>
                    {/* Scroll Animation*/}
                    <div className='flex flex-col justify-center text-center'>
                        <ScrollText />
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='col-span-1 h-56 md:h-64 lg:h-40 mt-5 border-accent border-r-2'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
