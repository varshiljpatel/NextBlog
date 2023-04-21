import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/Bs';
import PrevNext from './PrevNext';

const BlogCard = () => {
    const [data, setData] = useState([])
    const [prev, setPrev] = React.useState(0);
    const [next, setNext] = React.useState(10);
    useEffect(() => {
        let isApiSubscribed = true;
        if (isApiSubscribed) {
            const fetchData = async () => {
                const postApi = await fetch('https://jsonplaceholder.typicode.com/posts')
                const res = await postApi.json()
                setData(res)
            }
            fetchData()
        }
        return () => {
            isApiSubscribed = false;
        };
    }, [])
    return (
        <div>
            <PrevNext payload={data} prev={prev} next={next} setNext={setNext} setPrev={setPrev} className='my-12' />
            {
                data.slice(prev, next).map((post, index) => {
                    return (
                        <div key={index} className='flex justify-center'>
                            <div className='flex items-center md:flex-row flex-col shadow-lg p-5 gap-5 bg-white max-w-[900px] w-[95%] h-[450px] md:h-[200px] my-4'>
                                {/* image container */}
                                <div className='overflow-hidden w-[95%] md:w-[33.3333%] h-[45%] flex items-center justify-center md:h-full bg-slate-800'>
                                    <Image
                                        className='w-full'
                                        src={'/asset-2.jpg'}
                                        width={100}
                                        height={100}
                                        alt='image'
                                    />
                                    <h1 className='text-white text-2xl absolute'>
                                        {post.id}
                                    </h1>
                                </div>
                                <div className='overflow-hidden relative w-[95%] md:w-[66.6666%] h-[55%] md:h-full'>
                                    <h3 className='text-lg9 font-bold text-black'>
                                        {post.title}
                                    </h3>
                                    <p className='text-black text-sm my-2'>
                                        {post.body}
                                    </p>
                                    <button type='button' className=' flex items-center gap-x-2 rounded-sm bg-slate-900 text-white text-xs font-semibold py-1.5 px-4 absolute bottom-0 left-0'>
                                        Read More <BsArrowRight className='text-sm'></BsArrowRight>
                                    </button>
                                </div >
                            </div>
                        </div>
                    )
                })
            }
            <PrevNext payload={data} prev={prev} next={next} setNext={setNext} setPrev={setPrev} className='my-12' />
        </div>
    )
}

export default BlogCard
