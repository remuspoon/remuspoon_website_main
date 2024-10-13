import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export interface BlogCardType {
  title: string;
  description: string;
  publishedAt: string;
  mainImage: any;
  currentSlug: string;
  descriptionColor?: string;
  cardColor?: string;
  hoverShadow?: boolean;
}

const BlogCard: React.FC<BlogCardType> = ({ title, description, publishedAt, mainImage, currentSlug, descriptionColor = 'text-dark', cardColor = 'white', hoverShadow = false }) => {
  return (
    <div className={`rounded-2xl hover:scale-105 transition-all duration-300 bg-${cardColor} lg:m-5 ${hoverShadow ? 'hover:shadow-xl shadow-dark' : ''}`}>
        <div className='flex flex-col max-w-full h-full'>
            <div className='w-full h-[250px] relative'>
              <Link href={`/blogs/${currentSlug}`}>
                <Image 
                  src={mainImage} 
                  alt="image" 
                  className='object-cover object-top rounded-t-2xl'
                  fill
                />
              </Link>
            </div>
            <div className='flex flex-col justify-between flex-grow md:px-5 py-5'>
              <div className='flex flex-col gap-y-3'>
                <Link href={`/blogs/${currentSlug}`}>
                  <h2 className='text-lg font-cabin font-bold italic text-accent tracking-tight leading-tight hover:underline'>
                    {title}
                  </h2>
                </Link>
                <p className={`text-base text-left font-cabin leading-tight ${descriptionColor}`}>
                  {description}</p>
              </div>
              
                <p className='mt-5 text-[1rem] font-cabin text-lightGray pt-3'>{publishedAt}</p>
            
            </div>
        </div>
    </div>
  )
}

export default BlogCard