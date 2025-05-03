'use client'
import React, { useRef } from 'react'
import Image1 from '../../../assets/about/AboutPageImage1.jpg'
import Image2 from '../../../assets/about/AboutPageImage2.jpg'
import Image3 from '../../../assets/about/AboutPageImage3.jpg'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const AboutPage = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.6", "end 0.5"]
    })

    // Create transforms for each row
    const rowTransforms = Array.from({ length: 3 }).map((_, index) => {
        const start = 0.1 + (index * 0.2)
        const end = start + 0.2
        return {
            leftOpacity: useTransform(scrollYProgress, [start, end], [0, 1]),
            leftX: useTransform(scrollYProgress, [start, end], [-100, 0]),
            rightOpacity: useTransform(scrollYProgress, [start, end], [0, 1]),
            rightX: useTransform(scrollYProgress, [start, end], [100, 0])
        }
    })

    // Create transforms for mobile layouts
    const mobileTransforms = Array.from({ length: 3 }).map((_, index) => {
        const start = 0.1 + (index * 0.2)
        const end = start + 0.2
        return {
            imageOpacity: useTransform(scrollYProgress, [start, end], [0, 1]),
            imageX: useTransform(scrollYProgress, [start, end], [100, 0]),
            textOpacity: useTransform(scrollYProgress, [start, end], [0, 1]),
            textX: useTransform(scrollYProgress, [start, end], [-100, 0])
        }
    })

    return (
        <div className='bg-gray w-full overflow-hidden' ref={containerRef}>
            <div className='flex flex-col justify-center items-center'>
                <div className='py-10 lg:py-32'>
                    <h1 id='about' className='text-[5rem] md:text-[8rem] lg:text-2xl font-abril text-light tracking-tighter drop-shadow-md'>ABOUT
                        <span className='text-main'>.</span>
                    </h1>
                </div>
                <div className='grid grid-cols-12 gap-x-5 px-5 w-screen pb-32'>
                    {/* Large Screen About Page */}
                    <div className='hidden col-start-2 col-span-10 lg:grid grid-rows-3 pb-36 gap-y-72 mb-32'>
                        <div className='grid grid-cols-2 justify-between items-center gap-x-32'>
                            <motion.div 
                                style={{ 
                                    opacity: rowTransforms[0].leftOpacity,
                                    x: rowTransforms[0].leftX
                                }}
                            >
                                <h1 className='text-xl font-cabin font-bold italic text-light '>Who am I</h1>
                                <p className='text-light font-cabin text-base leading-10'>The future is in the hands of those who chase it. As a founder, self-taught developer, and psychology graduate, I chase after the future through innovation and challenging the status quo. As I find my place in this world, I strive to be at the forefront of technology that benefits humanity.</p>
                            </motion.div>
                            <motion.div 
                                style={{ 
                                    opacity: rowTransforms[0].rightOpacity,
                                    x: rowTransforms[0].rightX
                                }}
                                className='border-r-4 border-main pr-10 flex justify-end w-full'
                            >
                                <Image src={Image1} alt='Image1' className='object-cover rounded-xl w-full' />
                            </motion.div>
                        </div>
                        <div className='grid grid-cols-2 justify-between items-center gap-x-32'>
                            <motion.div 
                                style={{ 
                                    opacity: rowTransforms[1].leftOpacity,
                                    x: rowTransforms[1].leftX
                                }}
                                className='border-l-4 border-main pl-10 flex justify-start w-full'
                            >
                                <Image src={Image2} alt='Image2' className='object-cover rounded-xl w-full' />
                            </motion.div>
                            <motion.div 
                                style={{ 
                                    opacity: rowTransforms[1].rightOpacity,
                                    x: rowTransforms[1].rightX
                                }}
                            >
                                <h1 className='text-xl font-cabin font-bold italic text-light '>What I do</h1>
                                <p className='text-light font-cabin text-base leading-10'>At 20, I created an AI-powered therapist leveraging my clinical psychology knowledge. It was adopted by UCL for research and I was invited to Stanford for my efforts. I am currently the director of Stanford&apos;s entrepreneurship program in London, where I help students launch their startup careers.</p>
                            </motion.div>
                        </div>
                        <div className='grid grid-cols-2 justify-between items-center gap-x-32'>
                            <motion.div 
                                style={{ 
                                    opacity: rowTransforms[2].leftOpacity,
                                    x: rowTransforms[2].leftX
                                }}
                            >
                                <h1 className='text-xl font-cabin font-bold italic text-light '>My interests</h1>
                                <p className='text-light font-cabin text-base leading-10'>Besides my fascination of the intersection of technology and psychology, I love a long run in Regent&apos;s Park during the summer. I also love boxing and playing the guitar in my spare time. Would it surprise you to know that I was a national champion boxer in Taiwan?</p>
                            </motion.div>
                            <motion.div 
                                style={{ 
                                    opacity: rowTransforms[2].rightOpacity,
                                    x: rowTransforms[2].rightX
                                }}
                                className='border-r-4 border-main pr-10 flex justify-end w-full'
                            >
                                <Image src={Image3} alt='Image3' className='object-cover rounded-xl w-full' />
                            </motion.div>
                        </div>
                    </div>

                    {/* Small and Medium Screen About Page */}
                    <div className='col-start-1 col-span-12 md:col-start-2 md:col-span-10 lg:hidden flex flex-col gap-y-10'>
                        <div className='flex flex-col justify-between items-center gap-y-5 pb-10'>
                            <motion.div 
                                style={{ 
                                    opacity: mobileTransforms[0].imageOpacity,
                                    x: mobileTransforms[0].imageX
                                }}
                                className='pr-5 md:pr-10 border-r-4 border-main'
                            >
                                <Image src={Image1} alt='Image1' className='w-full h-full object-cover object-center rounded-xl' />
                            </motion.div>
                            <motion.div
                                style={{ 
                                    opacity: mobileTransforms[0].textOpacity,
                                    x: mobileTransforms[0].textX
                                }}
                            >
                                <h1 className='text-[2.5rem] font-cabin font-bold italic text-light'>Who am I</h1>
                                <p className='text-light font-cabin text-[1rem] pr-5 leading-8'>The future is in the hands of those who chase it. As a founder, self-taught developer, and psychology graduate, I chase after the future through innovation and challenging the status quo. As I find my place in this world, I strive to be at the forefront of technology that benefits humanity.</p>
                            </motion.div>
                        </div>
                        <div className='flex flex-col justify-between items-center gap-y-5 pb-10'>
                            <motion.div 
                                style={{ 
                                    opacity: mobileTransforms[1].imageOpacity,
                                    x: mobileTransforms[1].imageX
                                }}
                                className='pl-5 md:pl-10 border-l-4 border-main'
                            >
                                <Image src={Image2} alt='Image2' className='w-full h-full object-cover object-center rounded-xl' />
                            </motion.div>
                            <motion.div
                                style={{ 
                                    opacity: mobileTransforms[1].textOpacity,
                                    x: mobileTransforms[1].textX
                                }}
                            >
                                <h1 className='text-[2.5rem] font-cabin font-bold italic text-light'>What I do</h1>
                                <p className='text-light font-cabin text-[1rem] pr-5 leading-8'>At 20, I created an AI-powered therapist leveraging my clinical psychology knowledge. It was adopted by UCL for research and I was invited to Stanford for my efforts. I am currently the director of Stanford&apos;s entrepreneurship program in London, where I help students launch their startup careers.</p>
                            </motion.div>
                        </div>
                        <div className='flex flex-col justify-between items-center gap-y-5'>
                            <motion.div 
                                style={{ 
                                    opacity: mobileTransforms[2].imageOpacity,
                                    x: mobileTransforms[2].imageX
                                }}
                                className='pr-5 md:pr-10 border-r-4 border-main'
                            >
                                <Image src={Image3} alt='Image3' className='w-full h-full object-cover object-center rounded-xl' />
                            </motion.div>
                            <motion.div
                                style={{ 
                                    opacity: mobileTransforms[2].textOpacity,
                                    x: mobileTransforms[2].textX
                                }}
                            >
                                <h1 className='text-[2.5rem] font-cabin font-bold italic text-light'>My interests</h1>
                                <p className='text-light font-cabin text-[1rem] pr-5 leading-8'>Besides my fascination of the intersection of technology and psychology, I love a long run in Regent&apos;s Park during the summer. I also love boxing and playing the guitar in my spare time. Would it surprise you to know that I was a national champion boxer in Taiwan?</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
