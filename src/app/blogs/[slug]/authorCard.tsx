'use client'

import React from 'react'
import ProfileImage from '../../../assets/blogs/author_card_profile_pic.jpeg'
import Image from 'next/image'
import { IoLogoInstagram, IoLogoLinkedin, IoIosMail  } from "react-icons/io";
const AuthorCard = () => {
  return (
    <div className="flex flex-col md:flex-row border-t gap-x-5 gap-y-5 items-center border-lightGray py-16">
        <div className='w-1/2 md:w-1/5 '>
            <Image src={ProfileImage} alt='Author Profile' width={200} height={200} className='rounded-full' />
        </div>
        <div className='w-full md:w-4/5 flex flex-col gap-y-3 justify-center px-5'>
            <h1 className='text-lg font-cabin font-bold tracking-tight leading-tight text-dark text-center md:text-left'>
                Let&apos;s Chat!
            </h1>
            <p className='text-md text-gray-500 font-cabin text-gray text-center md:text-left'>
                Hey if you liked what you read, have a question, or just want to say hi, I&apos;d love to hear from you!
            </p>
            <div className='flex flex-row gap-x-2 justify-center md:justify-start   '>
                    <a href="https://www.instagram.com/remuspn/" target='_blank' rel='noopener noreferrer'>
                        <IoLogoInstagram className='w-8 h-8 text-gray hover:text-accent transition-all duration-200 hover:scale-110' />
                    </a>            
                    <a href="https://www.linkedin.com/in/remus-poon-672b05232/" target='_blank' rel='noopener noreferrer'>
                        <IoLogoLinkedin className='w-8 h-8 text-gray hover:text-accent transition-all duration-200 hover:scale-110' />
                    </a>
                
                    <a href="mailto:remuspoon@gmail.com" target='_blank' rel='noopener noreferrer'>
                        <IoIosMail className='w-8 h-8 text-gray hover:text-accent transition-all duration-200 hover:scale-110' />
                    </a>
                </div>
        </div>
    </div>
  )
}

export default AuthorCard