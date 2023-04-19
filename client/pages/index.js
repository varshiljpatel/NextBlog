import Image from 'next/image'
import { Inter } from 'next/font/google'
import BlogCard from '@/comp/BlogCard'
import CSlider from '@/comp/CSlider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex justify-center flex-col items-center'>
      <header className='w-full h-[50vh] overflow-hidden mb-10'>
        <img className='h-full md:-translate-y-[50vh] md:h-auto md:w-full' src='asset-1.jpg'></img>
      </header>
      <BlogCard />
      <BlogCard />
    </main>
  )
}
