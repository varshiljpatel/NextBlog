import BlogCard from '@/comp/BlogCard'
import React from 'react'

const index = () => {
  return (
    <main className='flex flex-col items-center'>
      <div className='w-[full] mt-10 md:flex-row flex-col flex items-center justify-center gap-x-5'>
      <h3 className='text-center text-3xl font-bold'>Our Blogs</h3>
      <span className='md:w-[4px] w-10 h-[4px] md:h-10 my-4 bg-black rounded-full'></span>
      <p className='text-center md:text-left md:w-auto w-[70%]'>Explore our blogs and update yours self and learn new things.</p>
      </div>
      <div className='w-full flex justify-center'>
        <BlogCard />
      </div>
    </main>
  )
}

export default index
