import React from 'react'
import BlogCard, { BlogCardType } from './blogCard'
import Button from './button'
import { client, urlFor } from '@/sanity/lib/client'

const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toISOString().split('T')[0]
}

const formatDescription = (description: string) => {
    const truncatedDescription = description.substring(0, 100);
    const lastSpaceIndex = truncatedDescription.lastIndexOf(' ');
    return lastSpaceIndex !== -1 ? `${truncatedDescription.substring(0, lastSpaceIndex)}...` : `${truncatedDescription}...`;
}

const formatTitle = (title: string) => {
    if (title.length > 40) {
        const lastSpaceIndex = title.lastIndexOf(' ',  40);
        return lastSpaceIndex !== -1 ? `${title.substring(0, lastSpaceIndex)}...` : `${title.substring(0, 30)}...`;
    }
    return title;
}

async function getBlogs() {
    const query = `*[_type == 'post'] | order(publishedAt desc)[0..3] {
  title,
  publishedAt,
  "currentSlug": slug.current,
  "description": pt::text(body[0]),
  "mainImage": mainImage.asset._ref
}`
    
    const blogs = await client.fetch(query)
    return blogs
}

const BlogPage = async () => {
    const blogs: BlogCardType[] = await getBlogs()

    return (
        <div>
            <div className='grid grid-cols-5 h-full gap-x-5 px-5 bg-light overflow-y-clip '>
                <div className= 'col-start-1 col-span-2 flex flex-col justify-start'>
                    <div className='grid grid-cols-2'>
                        <div className='col-span-1 h-40 border-accent border-r-2'></div>
                    </div>
                </div>
            </div>
            <div className=' min-h-screen grid grid-cols-12 gap-x-5 px-5 bg-light  overflow-x-clip'>
                <div id='blog' className='col-start-2 col-span-10'>
                    <div className='flex flex-col'>
                        <h1 className=' text-2xl font-abril text-gray drop-shadow-md tracking-tighter'>BLOGS<span className='text-accent'>.</span></h1>
                        <div className='flex flex-col gap-y-5'>
                            <div className='flex flex-row w-full justify-between'>
                                {blogs.map((post, index) => (
                                    <BlogCard key={index} title={formatTitle(post.title)} description={formatDescription(post.description)} publishedAt={formatDate(post.publishedAt)} mainImage={urlFor(post.mainImage).url()} />
                                ))}
                            </div>
                            <div className='flex justify-center mb-40 mt-2'>
                                <Button buttonText='View More' link='/blogIndex'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage
