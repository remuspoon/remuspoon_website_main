import React from 'react'
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub, IoIosMail  } from "react-icons/io";

const ContactPage = () => {
    return (
        <div className='w-full bg-accent overflow-hidden' id='contact'>
            <div className='flex flex-col items-center justify-cente pt-10 pb-20 lg:py-32 gap-y-5'>
                <h1 className='text-[5rem] md:text-[8rem] lg:text-2xl font-abril text-gray drop-shadow-md'>CONTACT<span className='text-light'>.</span></h1>
                <div className='flex flex-row items-center justify-center gap-x-5'>
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
            </div>
        </div>
    )
}

export default ContactPage