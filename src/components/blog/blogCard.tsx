import React from 'react'

const BlogCard = () => {
  return (
    <div>
        <div className='flex flex-col max-w-full gap-y-3 p-5'>
            <div className='w-[300px] h-[250px] bg-slate-500 rounded-md'></div>
            <div className='flex flex-col gap-y-2'>
              <h2 className='text-lg font-cabin font-bold italic text-gray tracking-tight leading-tight hover:underline'>Blog Title</h2>
              <p className='text-base font-cabin text-lightGray leading-tight max-w-[300px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu nisi id ligula consequat accumsan. </p>
            </div>
            <p className='text-base font-cabin text-accent'>date</p>
        </div>
    </div>
  )
}

export default BlogCard