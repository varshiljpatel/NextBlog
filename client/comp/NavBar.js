import Link from 'next/link'
import React from 'react'
import { BsPersonFill } from 'react-icons/Bs'

const NavBar = () => {
  return (
    <>
        <nav className='text-white sticky z-50 top-0 flex justify-between items-center py-4 px-10 bg-slate-900 w-full'>
            <Link href={'/'}>
                <h1 className='text-2xl font-black'>Blog</h1>
            </Link>
            <div className='hidden md:flex items-center gap-x-10 text-xs'>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/blog'}>Blog</Link>
                <Link href={'/contact'}>Contact</Link>
                <Link href={'/signin'}>
                  <div className='flex p-1.5 px-4 items-center justify-center transition-all hover:bg-slate-700 hover:border-slate-700 gap-x-2 border-[1.5px] border-solid rounded-full'>
                    <BsPersonFill />
                    <p className='text-xs'>Sign in</p>
                  </div>
                </Link>
            </div>
        </nav>
    </>
  )
}

export default NavBar
