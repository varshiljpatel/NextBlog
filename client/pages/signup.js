import InputF from '@/comp/InputF';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AiFillMail } from 'react-icons/ai';
import { RiLockPasswordFill, RiLockPasswordLine } from 'react-icons/ri';
import { IoSendSharp } from 'react-icons/io5';
import { BsPersonFill } from 'react-icons/Bs';
import GnGBtn from '@/comp/GnGBtn';
import axios from 'axios';

const signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    console.log(username);
    console.log(email);
    console.log(password);
    console.log(repassword);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === repassword) {
            console.log("same password");
            if (!axios.isCancel('something')) {
                const fetchPostDataApi = async (postApi) => {
                    const data = await fetch(postApi, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            username: username,
                            email: email,
                            password: password, 
                        })
                    })
                    console.log('data', data);
                }
                fetchPostDataApi('http://localhost:8080/api/auth/signup?access_key=6va5d987D0N24fBA78Dr2A087');
            } else {
                throw new Error
            }
        }
    }

    return (
        <div className='flex items-center flex-col'>
            <div className='w-[full] my-10 md:flex-row flex-col flex items-center justify-center gap-x-5'>
                <h3 className='text-center text-3xl font-bold'>Sign up</h3>
                <span className='md:w-[4px] w-10 h-[4px] md:h-10 my-4 bg-black rounded-full'></span>
                <p className='text-center md:text-left md:w-auto w-[70%]'>If already exist <Link href={'/signin'} className='text-blue-800 font-medium underline'>sign in</Link></p>
            </div>
            <form
                className='flex gap-y-8 flex-col max-w-[600px] w-[90%]'
                onSubmit={handleSubmit}>
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
                <InputF value={repassword} setValue={setRepassword} type='password' placeholder='Confirm Password'>
                    <RiLockPasswordFill className='text-black' />
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

export default signup;
