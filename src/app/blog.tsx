import React from 'react'
import BlogCard from '../components/blog/blogCard'
import Button from '../components/button'

const BlogPage = () => {
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
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
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
