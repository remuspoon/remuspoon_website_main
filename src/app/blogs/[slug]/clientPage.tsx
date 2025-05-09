'use client'

// Import necessary dependencies
import { PortableText, PortableTextBlock } from '@portabletext/react'
import Image from 'next/image'
import AuthorCard from './authorCard'
import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"

// Define the type for blog post data
export interface BlogPageType {
    currentSlug: string;
    title: string;
    publishedAt: string;
    body: PortableTextBlock[];
    mainImage: string;
}

// Helper function to format date to YYYY-MM-DD
const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toISOString().split('T')[0]
}

// Component that animates the blog post title
function AnimatedTitle({ title }: { title: string }) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Wait for fonts to load before animating
        document.fonts.ready.then(() => {
            if (!containerRef.current) return

            // Show container once fonts are loaded
            containerRef.current.style.visibility = "visible"

            // Split title text into words for animation
            const { words } = splitText(
                containerRef.current.querySelector("h1")!
            )

            // Animate each word with a staggered fade-in and slide-up effect
            animate(
                words,
                { opacity: [0, 1], y: [10, 0] },
                {
                    type: "spring",
                    duration: 2,
                    bounce: 0,
                    delay: stagger(0.05),
                }
            )
        })
    }, [])

    return (
        <div className="container" ref={containerRef}>
            <h1 className="h1 text-[2rem] md:text-xl font-cabin font-bold tracking-tight leading-tight text-dark">
                {title}
            </h1>
            <style jsx>{`
                .container {
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    width: 100%;
                    text-align: left;
                    visibility: hidden;
                }

                .split-word {
                    will-change: transform, opacity;
                }
            `}</style>
        </div>
    )
}

// Component that animates the blog post body content
function AnimatedBody({ body }: { body: PortableTextBlock[] }) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Wait for fonts to load before animating
        document.fonts.ready.then(() => {
            if (!containerRef.current) return

            // Show container once fonts are loaded
            containerRef.current.style.visibility = "visible"

            // Select only block-level elements to animate (exclude links)
            const blocks = containerRef.current.querySelectorAll("p, h1, h2, h3, h4, h5, h6, ul, ol, li, blockquote")
            
            // Animate each block element with a staggered fade-in and slide-up effect
            animate(
                blocks,
                { opacity: [0, 1], y: [20, 0] },
                {
                    type: "spring",
                    duration: 1,
                    bounce: 0,
                    delay: stagger(0.1),
                }
            )
        })
    }, [])

    return (
        <div className="container" ref={containerRef}>
            <div className='flex flex-col prose prose:text-gray prose-a:text-accent font-cabin text-base min-w-full'>
                <PortableText 
                    value={body}
                    components={{
                        marks: {
                            // Custom link component for handling internal/external links
                            link: ({children, value}) => {
                                const rel = !value.href.startsWith('/') ? 'noopener noreferrer' : undefined
                                const target = !value.href.startsWith('/') ? '_blank' : undefined
                                return (
                                    <a 
                                        href={value.href}
                                        target={target}
                                        rel={rel}
                                        className="text-accent hover:text-accent/80 transition-colors"
                                    >
                                        {children}
                                    </a>
                                )
                            }
                        }
                    }}
                />
            </div>
            <style jsx>{`
                .container {
                    visibility: hidden;
                }
            `}</style>
        </div>
    )
}

// Main blog page client component
export default function BlogPageClient({ data }: { data: BlogPageType }) {
    return (
        <div className='bg-white pt-32 lg:pt-56 mt-[-100px]'>
            <div className='grid grid-cols-12'>
                {/* Center content column that's narrower on larger screens */}
                <div className='col-start-2 col-span-10 lg:col-start-4 lg:col-span-6 flex flex-col gap-y-10'>
                    {/* Blog post header section */}
                    <div className='flex flex-col justify-center gap-y-5'>
                        <AnimatedTitle title={data.title} />
                        <p className='text-sm text-gray-500 font-cabin'>{formatDate(data.publishedAt)}</p>
                        <div className='flex flex-row w-1/5 border-b-2 border-accent pt-5'></div>
                    </div>
                    {/* Blog post content */}
                    <AnimatedBody body={data.body} />
                    {/* Featured image */}
                    <div className='grid grid-row w-full justify-center'>
                        <Image 
                            src={data.mainImage} 
                            alt={data.title} 
                            width={500}
                            height={500}
                            className='object-cover'
                        />
                    </div>
                    {/* Author information card */}
                    <AuthorCard />
                </div>
            </div>  
        </div>
    )
} 