import Image from 'next/image'
import { Inter } from 'next/font/google'
import BlogCard from '@/comp/BlogCard'
import CSlider from '@/comp/CSlider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex justify-center flex-col items-center'>
      <CSlider />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </main>
  )
}
