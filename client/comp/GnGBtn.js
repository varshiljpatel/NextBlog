import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const GnGBtn = ({ className }) => {
  const session = useSession();
  const router = useRouter();
  try {
    if (session?.data?.user?.email) {
      console.log('SEss', session);
      router.push({
        pathname: '/',
      });
    }
  } catch (e) {
    console.log(e.message);
  }

  const githubUsername = session?.data?.user?.name;
  const githubEmail = session?.data?.user?.email;

  return (
    <div className={`${className} flex md:flex-row flex-col items-center justify-center`}>
      {/* <div className='px-4 py-2 border-[2px] border-black rounded-sm flex items-center justify-center gap-x-4'>
        <FcGoogle /> Sign in with Google
      </div> */}
      <div
        onClick={async () => {
          await signIn()
        }}
        className='px-4 py-1.5 border-[2px] text-white w-full bg-black rounded-sm flex items-center justify-center gap-x-4'>
        <FaGithub className='text-white' /> Sign in with Github
      </div>
    </div>
  )
}

export default GnGBtn
