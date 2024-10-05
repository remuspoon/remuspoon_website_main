import React from 'react'
import Image from 'next/image'

export interface BlogCardType {
  title: string;
  description: string;
  publishedAt: string;
  mainImage: any;
}

const BlogCard: React.FC<BlogCardType> = ({ title, description, publishedAt, mainImage }) => {
  return (
    <div>
        <div className='flex flex-col max-w-full gap-y-3 p-5'>
            <div className='w-[300px] h-[250px] relative '>
              <Image 
                src={mainImage} 
                alt="image" 
                className='object-cover object-top rounded-lg'
                fill
              />
            </div>
            <div className='flex flex-col gap-y-2'>
              <h2 className='max-w-[300px] text-lg font-cabin font-bold italic text-accent tracking-tight leading-tight hover:underline'>
                {title}
              </h2>
              <p className='text-base font-cabin text-dark leading-tight max-w-[300px]'>
                {description}</p>
            </div>
            <p className='text-[1rem] font-cabin text-lightGray'>{publishedAt}</p>
        </div>
    </div>
  )
}

export default BlogCard