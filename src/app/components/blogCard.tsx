import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image';
export interface BlogCardType {
  title: string;
  description: string;
  publishedAt: string;
  mainImage: string;
  currentSlug: string;
  descriptionColor?: string;
  cardColor?: string;
  hoverShadow?: boolean;
}

const BlogCard: React.FC<BlogCardType> = ({ title, description, publishedAt, mainImage, currentSlug, descriptionColor = 'text-dark', cardColor = 'bg-white', hoverShadow = false }) => {
  return (
    <div className={`rounded-2xl hover:scale-105 transition-all duration-300 ${cardColor} m-0 mt-5 lg:m-5 lg:mt-0 ${hoverShadow ? 'hover:shadow-xl shadow-dark' : ''}`}>
        <div className='flex flex-col max-w-full h-full'>
            <div className='w-full h-[200px] relative'>
              <Link href={`/blogs/${currentSlug}`}>
                <Image 
                  src={urlFor(mainImage).url()} 
                  alt={title} 
                  className='object-cover object-top rounded-t-2xl'
                  fill
                />
              </Link>
            </div>
            <div className='flex flex-col justify-between flex-grow px-5 py-5'>
              <div className='flex flex-col gap-y-3'>
                <Link href={`/blogs/${currentSlug}`}>
                  <h2 className='text-[1.5rem] font-cabin font-bold italic text-accent tracking-tight leading-tight hover:underline'>
                    {title}
                  </h2>
                </Link>
                <p className={`text-[1rem] text-left font-cabin leading-tight ${descriptionColor}`}>
                  {description}</p>
              </div>
              
                <p className='mt-5 text-[1rem] font-cabin text-lightGray pt-3'>{publishedAt}</p>
            
            </div>
        </div>
    </div>
  )
}

export default BlogCard