import React from 'react'
import Image from 'next/image'
import Hero from '../../../assets/home/Hero.jpg'
import ScrollText from './scrollText'
import ParallaxText from '../parallaxText'

const Main = () => {
    return (
        <div className='h-screen w-full overflow-hidden'>
            <div className=' h-4/5 w-full select-none pt-20 pb-5 flex flex-col justify-between relative'>
                <div className='z-20'>
                    <ParallaxText baseVelocity={.5} color="light" outline={false}>Remus Poon</ParallaxText>
                </div>
                
                <div className='opacity-75'>
                    <ParallaxText baseVelocity={-.5} color="light" outline={true}>Remus Poon</ParallaxText>
                </div>
                <div className='opacity-50'>
                    <ParallaxText baseVelocity={.5} color="light" outline={true} >Remus Poon</ParallaxText>
                </div>
                <div className='opacity-25'>
                    <ParallaxText baseVelocity={-.5} color="light" outline={true}>Remus Poon</ParallaxText>
                </div>
                <div className='block lg:hidden opacity-15'>
                    <ParallaxText baseVelocity={.5} color="light" outline={true}>Remus Poon</ParallaxText>
                </div>
                <div className='block lg:hidden opacity-10'>
                    <ParallaxText baseVelocity={-.5} color="light" outline={true}>Remus Poon</ParallaxText>
                </div>
                <div className='block lg:hidden opacity-5'>
                    <ParallaxText baseVelocity={.5} color="light" outline={true}>Remus Poon</ParallaxText>
                </div>
                <div className='absolute w-full h-full grid grid-cols-1 lg:grid-cols-12 mt-10 lg:mt-20 pb-16'>
                  <div className='lg:col-start-2 lg:col-end-12 flex flex-col lg:grid lg:grid-cols-2'>
                    <div className='flex flex-col justify-center items-center px-5 gap-y-5'>
                        <Image src={Hero} alt='Hero' priority className='block lg:hidden w-full md:w-1/2 h-full max-h-[380px] md:max-h-[480px] rounded-2xl z-10 object-cover' />
                        <ul className='flex flex-wrap gap-x-5 items-center justify-center lg:items-start lg:flex-col lg:justify-start gap-y-2 bg-gray px-5 py-5 lg:px-32 lg:py-10 select-none w-fit '>
                                <li><a href="#blog" className='text-light font-cabin font-bold italic text-lg lg:text-xl tracking-tight hover:text-main inline-block hover:scale-105 transition-all duration-300'>BLOGS</a></li>
                                <li><a href="#about" className='text-light font-cabin font-bold italic text-lg lg:text-xl tracking-tight hover:text-main inline-block hover:scale-105 transition-all duration-300'>ABOUT</a></li>
                                <li><a href="#contact" className='text-light font-cabin font-bold italic text-lg lg:text-xl tracking-tight hover:text-main inline-block hover:scale-105 transition-all duration-300'>CONTACT</a></li>
                        </ul>
                    </div>
                    
                    <div className='relative'>
                    <Image src={Hero} alt='Hero' priority className='hidden lg:block absolute top-0 left-0 w-full 2xl:w-3/4 object-cover h-full rounded-2xl z-10' />
                    </div>
                  </div>
                </div>
            </div>
            <div className='h-1/5 w-full bg-dark grid grid-cols-2 lg:grid-cols-5 gap-x-5 px-5 pt-5 overflow-hidden'>
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
    );
}

export default Main
