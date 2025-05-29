'use client'

import React, { useRef } from 'react'
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub, IoIosMail  } from "react-icons/io";
import { motion, useScroll, useTransform } from 'framer-motion'

const ContactPage = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.5"]
    })

    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
    const titleY = useTransform(scrollYProgress, [0, 0.2], [-50, 0])

    const iconsOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
    const iconsY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0])

    return (
        <div className='w-full bg-accent overflow-hidden' id='contact' ref={containerRef}>
            <div className='flex flex-col items-center justify-cente pt-10 pb-20 lg:py-32 gap-y-5'>
                {/* Mobile title - static */}
                <h1 className='lg:hidden text-[4rem] md:text-[8rem] font-abril text-gray drop-shadow-md tracking-tighter'>
                    CONTACT<span className='text-light'>.</span>
                </h1>
                {/* Desktop title - animated */}
                <motion.h1 
                    style={{ opacity: titleOpacity, y: titleY }}
                    className='hidden lg:block text-2xl font-abril text-gray drop-shadow-md tracking-tighter'
                >
                    CONTACT<span className='text-light'>.</span>
                </motion.h1>
                {/* Mobile icons - static */}
                <div className='lg:hidden flex flex-row items-center justify-center gap-x-5'>
                    <a href="https://www.instagram.com/remuspn/" target='_blank' rel='noopener noreferrer'>
                        <IoLogoInstagram className='w-12 h-12 md:w-20 md:h-20 text-gray hover:text-light transition-all duration-200 hover:scale-110' />
                    </a>            
                    <a href="https://www.linkedin.com/in/remus-poon-672b05232/" target='_blank' rel='noopener noreferrer'>
                        <IoLogoLinkedin className='w-12 h-12 md:w-20 md:h-20 text-gray hover:text-light transition-all duration-200 hover:scale-110' />
                    </a>
                    <a href="https://github.com/remuspoon" target='_blank' rel='noopener noreferrer'>
                        <IoLogoGithub className='w-12 h-12 md:w-20 md:h-20 text-gray hover:text-light transition-all duration-200 hover:scale-110' />
                    </a>
                    <a href="mailto:remuspoon@gmail.com" target='_blank' rel='noopener noreferrer'>
                        <IoIosMail className='w-12 h-12 md:w-20 md:h-20 text-gray hover:text-light transition-all duration-200 hover:scale-110' />
                    </a>
                </div>
                {/* Desktop icons - animated */}
                <motion.div 
                    style={{ opacity: iconsOpacity, y: iconsY }}
                    className='hidden lg:flex flex-row items-center justify-center gap-x-5'
                >
                    <a href="https://www.instagram.com/remuspn/" target='_blank' rel='noopener noreferrer'>
                        <IoLogoInstagram className='w-12 h-12 md:w-20 md:h-20 text-gray hover:text-light transition-all duration-200 hover:scale-110' />
                    </a>            
                    <a href="https://www.linkedin.com/in/remus-poon-672b05232/" target='_blank' rel='noopener noreferrer'>
                        <IoLogoLinkedin className='w-12 h-12 md:w-20 md:h-20 text-gray hover:text-light transition-all duration-200 hover:scale-110' />
                    </a>
                    <a href="https://github.com/remuspoon" target='_blank' rel='noopener noreferrer'>
                        <IoLogoGithub className='w-12 h-12 md:w-20 md:h-20 text-gray hover:text-light transition-all duration-200 hover:scale-110' />
                    </a>
                    <a href="mailto:remuspoon@gmail.com" target='_blank' rel='noopener noreferrer'>
                        <IoIosMail className='w-12 h-12 md:w-20 md:h-20 text-gray hover:text-light transition-all duration-200 hover:scale-110' />
                    </a>
                </motion.div>
            </div>
        </div>
    )
}

export default ContactPage