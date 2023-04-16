import Image from 'next/image'
import { Inter } from 'next/font/google'
import BlogCard from '@/comp/BlogCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='flex flex-col gap-y-8'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        {/* <BlogCard />
        <BlogCard /> */}
      </div>
    </main>
  )
}
