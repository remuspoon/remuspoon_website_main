import React from 'react'
import BlogCard, { BlogCardType } from '../homeComponents/blogCard'
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
        <div>
            <div className='min-h-screen px-5 overflow-x-clip pb-20'>
                <div id='blog' className='container mx-auto'>
                    <div className='flex flex-col'>
                        <h1 className='text-2xl font-abril text-light drop-shadow-md text-center tracking-tighter mb-8'>ALL BLOGS<span className='text-accent'>.</span></h1>
                        <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                            {blogs.map((post, index) => (
                                <BlogCard 
                                    key={index} 
                                    title={formatTitle(post.title)} 
                                    description={formatDescription(post.description)} 
                                    publishedAt={formatDate(post.publishedAt)} 
                                    mainImage={urlFor(post.mainImage).url()} 
                                    descriptionColor='text-light'
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
