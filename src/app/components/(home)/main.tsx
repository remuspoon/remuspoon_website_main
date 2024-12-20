import React from 'react'
import Image from 'next/image'
import HeadingImage from '../../../assets/home/Heading.png'
import HeadingImageOutline from '../../../assets/home/HeadingOutline.png'
import Hero from '../../../assets/home/Hero.jpg'
import ScrollText from './scrollText'
import ParallaxText from '../parallaxText'

const Main = () => {
    return (
        <div id='home' className=' max-h-full max-w-screen flex flex-col lg:flex-rowoverflow-hidden pt-20'>
            <div className='lg:row-span-2 lg:grid lg:grid-cols-12 gap-x-5 bg-gray overflow-x-clip h-full mb-36 md:mb-16 lg:mb-0 lg:pb-0 pt-5 lg:pt-0'>
                <div className='lg:col-start-1 lg:col-span-12'>
                    <div className='relative'>
                        {/* Heading and Background */}
                        <div className='lg:grid lg:grid-cols-10 gap-x-5 lg:px-0'>
                            <div className='col-span-full flex flex-col justify-start gap-y-2 min-w-fill lg:min-w-[800px] opacity'>
                                <div className='z-30'>
                                    <ParallaxText baseVelocity={.5} color="light" outline={false}>Remus Poon</ParallaxText>
                                </div>
                                <div className='flex flex-col justify-start gap-y-2 pb-10 '>
                                    <ParallaxText baseVelocity={-.5} color="light" outline={true} opacity={'75'}>Remus Poon</ParallaxText>
                                    <ParallaxText baseVelocity={.5} color="light" outline={true} opacity={'50'}>Remus Poon</ParallaxText>
                                    <ParallaxText baseVelocity={-.5} color="light" outline={true} opacity={'25'}>Remus Poon</ParallaxText>
                                </div>
                            </div>
                        </div>
                        
                        {/* Large Screen Menu */}
                        <div className='absolute top-1/3 left-20 hidden lg:block'>
                            <ul className='flex flex-col justify-start gap-y-2 bg-gray px-20 py-4 select-none '>
                                <li><a href="#blog" className='text-light font-cabin font-bold italic text-[3.5rem] tracking-tight hover:text-main inline-block hover:scale-105 transition-all duration-300'>BLOGS</a></li>
                                <li><a href="#about" className='text-light font-cabin font-bold italic text-[3.5rem] tracking-tight hover:text-main inline-block hover:scale-105 transition-all duration-300'>ABOUT</a></li>
                                <li><a href="#contact" className='text-light font-cabin font-bold italic text-[3.5rem] tracking-tight hover:text-main inline-block hover:scale-105 transition-all duration-300'>CONTACT</a></li>
                            </ul>
                        </div>
                        {/* Hero */}
                        <div className='absolute top-5 left-1/2 transform -translate-x-1/2 w-full lg:w-2/5 lg:left-auto lg:transform-none lg:top-20 lg:right-20'>
                            <Image src={Hero} priority alt='Hero' className='mx-auto lg:mx-0 w-1/4 lg:w-3/4 max-w-[400px] lg:max-w-none z-30 rounded-lg select-none' />
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
            <div className='row-span-1 grid grid-cols-2 lg:grid-cols-5 h-full gap-x-5 px-5 pt-5 bg-dark '>
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
