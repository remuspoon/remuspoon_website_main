import React from 'react'
import BlogCard, { BlogCardType } from '../components/blogCard'
import { client, urlFor } from '@/sanity/lib/client'

const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toISOString().split('T')[0]
}

const formatDescription = (description: string) => {
    const truncatedDescription = description.substring(0, 120);
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
    const query = `*[_type == 'post'] | order(publishedAt desc) {
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
        <div className='bg-gray 
        md:grid md:grid-cols-12 pt-20'>
            <div className='min-h-screen px-5 overflow-x-clip pb-20 
            md:col-start-2 md:col-span-10
            '>
                <div id='blog' className='container mx-auto'>
                    <div className='flex flex-col'>
                        <h1 className='font-abril text-light drop-shadow-md text-center tracking-tighter lg:mb-8 leading-none pb-10
                        text-[5rem] md:text-[8rem] lg:text-2xl '>
                            ALL BLOGS
                        <span className='text-accent'>
                            .
                        </span>
                        </h1>
                        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                            {blogs.map((post, index) => (
                                <BlogCard 
                                    key={index} 
                                    title={formatTitle(post.title)} 
                                    description={formatDescription(post.description)} 
                                    publishedAt={formatDate(post.publishedAt)} 
                                    mainImage={urlFor(post.mainImage).url()} 
                                    currentSlug={post.currentSlug}
                                    descriptionColor='text-light'
                                    cardColor='bg-gray'
                                    hoverShadow={true}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage
