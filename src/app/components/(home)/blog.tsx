'use client'

import React, { useEffect, useState } from 'react'
import BlogCard, { BlogCardType } from '../blogCard'
import Button from '../button'
import { client, urlFor } from '@/sanity/lib/client'
import { motion } from 'framer-motion'

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
    const query = `*[_type == 'post'] | order(publishedAt desc)[0...4] {
        title,
        publishedAt,
        "currentSlug": slug.current,
        "description": pt::text(body[0]),
        "mainImage": mainImage.asset._ref
        }`
    
    const blogs = await client.fetch(query)
    return blogs
}

const BlogPage = () => {
    const [blogs, setBlogs] = useState<BlogCardType[]>([])

    useEffect(() => {
        const fetchBlogs = async () => {
            const data = await getBlogs()
            setBlogs(data)
        }
        fetchBlogs()
    }, [])

    return (
        <div id='blog'>
            <div className='hidden row-span-1 lg:grid grid-cols-2 lg:grid-cols-5 gap-x-5 px-5 bg-light overflow-y-clip w-full'>
                <div className= 'col-start-1 col-span-2 flex flex-col justify-start'>
                    <div className='grid grid-cols-2'>
                        <div className='col-span-1 h-20 lg:h-40 border-accent lg:border-r-2'></div>
                    </div>
                </div>
            </div>
            <div className=' grid grid-cols-12 gap-x-5 px-5 bg-light  overflow-x-clip'>
                <div className='col-start-1 col-span-12 lg:col-start-2 lg:col-span-10'>
                    <div className='flex flex-col'>
                        <motion.div initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}} transition={{duration: .5}} viewport={{once: true}} className='w-full h-full text-white'>
                            <h1 className='text-[5rem] md:text-[8rem] lg:text-2xl font-abril text-gray drop-shadow-md tracking-tighter pt-10 lg:pt-0'>BLOGS<span className='text-accent'>.</span></h1>
                        </motion.div>
                        <div className='flex flex-col gap-y-16'>
                            <div className='flex flex-col lg:flex-row w-full justify-between'>
                                {/* XL screen blogs */}
                                <motion.div 
                                    initial={{opacity: 0}} 
                                    whileInView={{opacity: 1}} 
                                    transition={{duration: 1}}
                                    viewport={{once: true}}
                                    className='hidden xl:grid xl:grid-cols-4 w-full justify-between'
                                >
                                    {blogs.map((post, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{opacity: 0, y: 50}}
                                            whileInView={{opacity: 1, y: 0}}
                                            transition={{
                                                type: "spring",
                                                duration: .8,
                                                delay: index * 0.4 + .5,
                                                bounce: 0.4
                                            }}
                                            animate={{
                                                y: [-50, 0, 30, 0]
                                            }}
                                            viewport={{once: true}}
                                        >
                                            <BlogCard 
                                                title={formatTitle(post.title)} 
                                                description={formatDescription(post.description)} 
                                                publishedAt={formatDate(post.publishedAt)} 
                                                mainImage={urlFor(post.mainImage).url()} 
                                                currentSlug={post.currentSlug}
                                                hoverShadow={true}
                                            />
                                        </motion.div>
                                    ))}
                                </motion.div>
                                {/* Large screen blogs */}
                                <div className='hidden xl:hidden lg:grid lg:grid-cols-3 w-full justify-between'>
                                    {blogs.slice(0, 3).map((post, index) => (
                                        <motion.div 
                                        key={index}
                                            initial={{opacity: 0, y: 50}}
                                            whileInView={{opacity: 1, y: 0}}
                                            transition={{
                                                type: "spring",
                                                duration: .8,
                                                delay: index * 0.4 + .5,
                                                bounce: 0.4
                                            }}
                                            animate={{
                                                y: [-50, 0, 30, 0]
                                            }}
                                            viewport={{once: true}}
                                        >
                                            <BlogCard 
                                                key={index} 
                                                title={formatTitle(post.title)} 
                                                description={formatDescription(post.description)} 
                                                publishedAt={formatDate(post.publishedAt)} 
                                                mainImage={urlFor(post.mainImage).url()} 
                                                currentSlug={post.currentSlug}
                                                hoverShadow={true}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                                {/* Medium screen blogs */}
                                <div className='hidden lg:hidden md:grid md:grid-cols-2 w-full gap-x-5'>
                                    {blogs.map((post, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{opacity: 0, y: 50}}
                                            whileInView={{opacity: 1, y: 0}}
                                            transition={{
                                                type: "spring",
                                                duration: .8,
                                                delay: index * 0.4 + .5,
                                                bounce: 0.4
                                            }}
                                            viewport={{once: true}}
                                        >
                                            <BlogCard 
                                                key={index} 
                                                title={formatTitle(post.title)} 
                                            description={formatDescription(post.description)} 
                                            publishedAt={formatDate(post.publishedAt)} 
                                            mainImage={urlFor(post.mainImage).url()} 
                                            currentSlug={post.currentSlug}
                                            hoverShadow={true}
                                        />
                                        </motion.div>
                                    ))}
                                </div>
                                {/* Small screen blogs */}
                                <div className='flex flex-col md:hidden w-full gap-y-8'>
                                    {blogs.slice(0, 3).map((post, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{opacity: 0, y: 50}}
                                            whileInView={{opacity: 1, y: 0}}
                                            transition={{
                                                type: "spring",
                                                duration: .8,
                                                delay: index * 0.2,
                                                bounce: 0.4
                                            }}
                                            viewport={{once: true}}
                                        >
                                            <BlogCard 
                                                key={index} 
                                                title={formatTitle(post.title)} 
                                            description={formatDescription(post.description)} 
                                                publishedAt={formatDate(post.publishedAt)} 
                                                mainImage={urlFor(post.mainImage).url()} 
                                                currentSlug={post.currentSlug}
                                                hoverShadow={true}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            <div className='flex justify-center mb-20'>
                                <Button buttonText='View More' link='/blogs'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage
