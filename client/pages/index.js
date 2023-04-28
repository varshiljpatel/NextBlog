import Image from 'next/image'
import { Inter } from 'next/font/google'
import BlogCard from '@/comp/BlogCard'
import CSlider from '@/comp/CSlider'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <Loader />
    <main className='flex justify-center flex-col items-center'>
      <header className='w-full h-[50vh] overflow-hidden mb-16'>
        <img className='h-full md:-translate-y-[50vh] md:h-auto md:w-full' src='asset-1.jpg'></img>
      </header>
      <h3 className='text-center text-3xl font-bold'>Our Blogs</h3>
      <span className='w-10 h-[5px] mb-10 mt-4 bg-black rounded-full'></span>
      <BlogCard />
    </main>
  )
}
