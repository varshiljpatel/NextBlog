import InputF from '@/comp/InputF';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiFillMail } from 'react-icons/ai';
import { RiLockPasswordFill, RiLockPasswordLine } from 'react-icons/ri';
import { IoSendSharp } from 'react-icons/io5';
import { BsPersonFill } from 'react-icons/Bs';

const signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    return (
        <div className='flex items-center flex-col'>
            <div className='w-[full] my-10 md:flex-row flex-col flex items-center justify-center gap-x-5'>
                <h3 className='text-center text-3xl font-bold'>Sign up</h3>
                <span className='md:w-[4px] w-10 h-[4px] md:h-10 my-4 bg-black rounded-full'></span>
                <p className='text-center md:text-left md:w-auto w-[70%]'>If already exist <Link href={'/signin'} className='text-blue-800 font-medium underline'>sign in</Link></p>
            </div>
            <form
                className='flex gap-y-8 flex-col max-w-[600px] w-[90%]'
                onSubmit={(e) => {
                    e.preventDefault();
                }}>
                {/* input for username */}
                <InputF value={username} setValue={setUsername} type='text' placeholder='Username'>
                    <BsPersonFill />
                </InputF>
                {/* input for email */}
                <InputF value={email} setValue={setEmail} type='email' placeholder='Email'>
                    <AiFillMail />
                </InputF>
                {/* input for password */}
                <InputF value={password} setValue={setPassword} type='password' placeholder='Password'>
                    <RiLockPasswordLine className='text-black' />
                </InputF>
                {/* input for confirm password */}
                <InputF value={password} setValue={setPassword} type='password' placeholder='Confirm Password'>
                    <RiLockPasswordFill className='text-black' />
                </InputF>
                {/* submit for button */}
                <div>
                    <button type='submit'
                        className='flex items-center justify-center gap-x-2 bg-black mb-64 py-2 px-6 float-right text-white text-xs font-medium rounded-sm'>
                        Submit <IoSendSharp />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default signup
