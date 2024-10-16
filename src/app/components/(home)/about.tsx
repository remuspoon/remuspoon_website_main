import React from 'react'
import Image1 from '../../../assets/about/AboutPageImage1.jpg'
import Image3 from '../../../assets/about/AboutPageImage3.jpg'
import Image from 'next/image'

const AboutPage = () => {
    return (
        <div className='bg-gray max-w-screen overflow-x-hidden'>
            <div className='flex flex-col justify-center items-center'>
                <div className='py-10 lg:py-32'>
                    <h1 id='about' className='text-[6rem] md:text-[8rem] lg:text-2xl font-abril text-light tracking-tighter drop-shadow-md'>ABOUT
                        <span className='text-main'>.</span>
                    </h1>
                </div>
                <div className='grid grid-cols-12 gap-x-5 px-5 w-screen pb-32'>
                    {/* Large Screen About Page */}
                    <div className='hidden col-start-2 col-span-10 lg:grid grid-rows-3 pb-36 gap-y-72 mb-32'>
                        <div className='grid grid-cols-2 justify-between items-center gap-x-32'>
                            <div>
                                <h1 className='text-xl font-cabin font-bold italic text-light '>Who am I</h1>
                                <p className='text-light font-cabin text-base'>Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends, Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.</p>
                            </div>
                            <div className='border-r-4 border-main pr-10 flex justify-end w-full'>
                                <Image src={Image1} alt='Image1' className='object-cover rounded-xl w-full' />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 justify-between items-center gap-x-32'>
                            <div className='border-l-4 border-main pl-10 flex justify-start w-full'>
                                <Image src={Image1} alt='Image1' className='object-cover rounded-xl w-full' />
                            </div>
                            <div>
                                <h1 className='text-xl font-cabin font-bold italic text-light '>Who am I</h1>
                                <p className='text-light font-cabin text-base'>Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends, Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.</p>
                            </div>
                            
                        </div>
                        <div className='grid grid-cols-2 justify-between items-center gap-x-32'>
                            <div>
                                <h1 className='text-xl font-cabin font-bold italic text-light '>Who am I</h1>
                                <p className='text-light font-cabin text-base'>Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends, Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.</p>
                            </div>
                            <div className='border-r-4 border-main pr-10 flex justify-end w-full'>
                                <Image src={Image1} alt='Image1' className='object-cover rounded-xl w-full' />
                            </div>
                        </div>
                    </div>

                    {/* Small and Medium Screen About Page */}
                    <div className='col-start-1 col-span-12 md:col-start-2 md:col-span-10 lg:hidden flex flex-col gap-y-10'>
                        <div className='flex flex-col justify-between items-center gap-y-5 pb-10'>
                            <div className='pr-5 md:pr-10 border-r-4 border-main'>
                                <Image src={Image1} alt='Image1' className='w-full h-full object-cover object-center rounded-xl' />
                            </div>
                            <div>
                                <h1 className='text-[3rem] font-cabin font-bold italic text-light'>Who am I</h1>
                                <p className='text-light font-cabin text-base pr-5'>Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends, Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between items-center gap-y-5 pb-10'>
                            <div className='pl-5 md:pl-10 border-l-4 border-main'>
                                <Image src={Image1} alt='Image1' className='w-full h-full object-cover object-center rounded-xl' />
                            </div>
                            <div>
                                <h1 className='text-[3rem] font-cabin font-bold italic text-light'>Who am I</h1>
                                <p className='text-light font-cabin text-base pr-5'>Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends, Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between items-center gap-y-5'>
                            <div className='pr-5 md:pr-10 border-r-4 border-main'>
                                <Image src={Image1} alt='Image1' className='w-full h-full object-cover object-center rounded-xl' />
                            </div>
                            <div>
                                <h1 className='text-[3rem] font-cabin font-bold italic text-light'>Who am I</h1>
                                <p className='text-light font-cabin text-base pr-5'>Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends, Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.</p>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default AboutPage
