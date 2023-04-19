import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <>
        <nav className='text-white flex justify-between items-center py-4 px-10 bg-slate-900 w-full'>
            <Link href={'/blog'}>
                <h1 className='text-2xl font-black'>Blog</h1>
            </Link>
            <div className='flex gap-x-10 text-xs'>
                <Link href={'/'}>About</Link>
                <Link href={'/'}>Blog</Link>
                <Link href={'/'}>Contact</Link>
            </div>
        </nav>
    </>
  )
}

export default NavBar
