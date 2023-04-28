import InputF from '@/comp/InputF';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiFillMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoSendSharp } from 'react-icons/io5';
import GnGBtn from '@/comp/GnGBtn';

const signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='flex items-center flex-col'>
            <div className='w-[full] my-10 md:flex-row flex-col flex items-center justify-center gap-x-5'>
                <h3 className='text-center text-3xl font-bold'>Sign in</h3>
                <span className='md:w-[4px] w-10 h-[4px] md:h-10 my-4 bg-black rounded-full'></span>
                <p className='text-center md:text-left md:w-auto w-[70%]'>If you are new then <Link href={'/signup'} className='text-blue-800 font-medium underline'>create an account</Link></p>
            </div>
            <form
                className='flex gap-y-8 flex-col max-w-[600px] w-[90%]'
                onSubmit={(e) => {
                    e.preventDefault();
                }}>
                {/* input for email */}
                <InputF value={email} setValue={setEmail} type='email' placeholder='Email'>
                    <AiFillMail />
                </InputF>
                {/* input for password */}
                <InputF value={password} setValue={setPassword} type='password' placeholder='Password'>
                    <RiLockPasswordFill />
                </InputF>
                {/* submit for button */}
                <div>
                    <button type='submit'
                        className='flex items-center justify-center gap-x-2 bg-black py-2 px-6 float-right text-white text-xs font-medium rounded-sm'>
                        Submit <IoSendSharp />
                    </button>
                </div>
                <span className='my-10 w-full flex items-center justify-center gap-x-3 font-medium'><span className='w-[75px] h-[2px] bg-black'></span>OR<span className='w-[75px] h-[2px] bg-black'></span></span>
                <GnGBtn className={'mb-16 w-full'} />
            </form>
        </div>
    )
}

export default signin