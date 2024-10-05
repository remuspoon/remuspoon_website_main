import React from 'react'
import Image from 'next/image'

export interface BlogCardType {
  title: string;
  description: string;
  publishedAt: string;
  mainImage: any;
  descriptionColor?: string; // Add this line
}

const BlogCard: React.FC<BlogCardType> = ({ title, description, publishedAt, mainImage, descriptionColor = 'text-dark' }) => {
  return (
    <div className='rounded-2xl hover:scale-105 transition-all duration-300 '>
        <div className='flex flex-col max-w-full h-full gap-y-3 p-5'>
            <div className='w-full h-[250px] relative row-span-1 '>
              <Image 
                src={mainImage} 
                alt="image" 
                className='object-cover object-top rounded-t-2xl'
                fill
              />
            </div>
            <div className='flex flex-col justify-between h-1/2 px-5'>
              <div className='flex flex-col gap-y-2 pt-3'>
                <h2 className='max-w-[300px] text-lg font-cabin font-bold italic text-accent tracking-tight leading-tight hover:underline'>
                  {title}
                </h2>
                <p className={`text-base text-left font-cabin leading-tight max-w-[300px] ${descriptionColor}`}>
                  {description}</p>
              </div>
              <div className='mt-auto pt-3'>
                <p className='text-[1rem] font-cabin text-lightGray'>{publishedAt}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard