'use client'

import React, { useEffect, useState, useRef } from 'react'
import BlogCard, { BlogCardType } from '../blogCard'
import Button from '../button'
import { client, urlFor } from '@/sanity/lib/client'
import { motion, useScroll, useTransform } from 'framer-motion'

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
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.6", "end 0.5"]
    })

    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
    const titleY = useTransform(scrollYProgress, [0, 0.2], [-50, 0])
    
    // Create transforms for each card individually
    const card1Opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
    const card1Y = useTransform(scrollYProgress, [0.1, 0.3], [50, 0])
    
    const card2Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
    const card2Y = useTransform(scrollYProgress, [0.2, 0.4], [50, 0])
    
    const card3Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
    const card3Y = useTransform(scrollYProgress, [0.3, 0.5], [50, 0])
    
    const card4Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1])
    const card4Y = useTransform(scrollYProgress, [0.4, 0.6], [50, 0])

    useEffect(() => {
        const fetchBlogs = async () => {
            const data = await getBlogs()
            setBlogs(data)
        }
        fetchBlogs()
    }, [])

    return (
        <div id='blog' ref={containerRef}>
            <div className='hidden row-span-1 lg:grid grid-cols-2 lg:grid-cols-5 gap-x-5 px-5 bg-light overflow-y-clip w-full'>
                <div className= 'col-start-1 col-span-2 flex flex-col justify-start'>
                    <div className='grid grid-cols-2'>
                        <div className='col-span-1 h-20 lg:h-40 border-accent lg:border-r-2'></div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-x-5 px-5 bg-light overflow-x-clip'>
                <div className='col-start-1 col-span-12 lg:col-start-2 lg:col-span-10'>
                    <div className='flex flex-col'>
                        <motion.div 
                            style={{ opacity: titleOpacity, y: titleY }}
                            className='w-full h-full text-white'
                        >
                            <h1 className='text-[5rem] md:text-[8rem] lg:text-2xl font-abril text-gray drop-shadow-md tracking-tighter pt-10 lg:pt-0'>BLOGS<span className='text-accent'>.</span></h1>
                        </motion.div>
                        <div className='flex flex-col gap-y-16'>
                            <div className='flex flex-col lg:flex-row w-full justify-between'>
                                {/* XL screen blogs */}
                                <div
                                    style={{  }}
                                    className='hidden xl:grid xl:grid-cols-4 w-full justify-between'
                                >
                                    {blogs.map((post, index) => (
                                        <motion.div
                                            key={index}
                                            style={{
                                                opacity: index === 0 ? card1Opacity : 
                                                        index === 1 ? card2Opacity :
                                                        index === 2 ? card3Opacity :
                                                        card4Opacity,
                                                y: index === 0 ? card1Y :
                                                   index === 1 ? card2Y :
                                                   index === 2 ? card3Y :
                                                   card4Y
                                            }}
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
                                </div>
                                {/* Large screen blogs */}
                                <div className='hidden xl:hidden lg:grid lg:grid-cols-3 w-full justify-between'>
                                    {blogs.slice(0, 3).map((post, index) => (
                                        <motion.div 
                                        key={index}
                                            style={{ 
                                                opacity: index === 0 ? card1Opacity : 
                                                        index === 1 ? card2Opacity :
                                                        index === 2 ? card3Opacity :
                                                        card4Opacity,
                                                y: index === 0 ? card1Y :
                                                   index === 1 ? card2Y :
                                                   index === 2 ? card3Y :
                                                   card4Y
                                            }}
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
                                            style={{ 
                                                opacity: index === 0 ? card1Opacity : 
                                                        index === 1 ? card2Opacity :
                                                        index === 2 ? card3Opacity :
                                                        card4Opacity,
                                                y: index === 0 ? card1Y :
                                                   index === 1 ? card2Y :
                                                   index === 2 ? card3Y :
                                                   card4Y
                                            }}
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
                                            style={{ 
                                                opacity: index === 0 ? card1Opacity : 
                                                        index === 1 ? card2Opacity :
                                                        index === 2 ? card3Opacity :
                                                        card4Opacity,
                                                y: index === 0 ? card1Y :
                                                   index === 1 ? card2Y :
                                                   index === 2 ? card3Y :
                                                   card4Y
                                            }}
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
