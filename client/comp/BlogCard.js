import React from 'react'
import { BsArrowRight } from 'react-icons/Bs'


export const getStaticProps = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await result.json()

  return {
    props: {
      data,
    }
  }

}

const BlogCard = ({ data }) => {


  return (
    <>
      <div className='flex items-center md:flex-row flex-col shadow-lg p-5 gap-5 bg-white max-w-[900px] w-[95%] h-[500px] md:h-[200px] my-4'>
        {/* image container */}
        <div className='overflow-hidden items-center justify-center w-[95%] md:w-[33.3333%] h-[45%] md:h-full bg-slate-800'></div>
        <div className='overflow-hidden relative w-[95%] md:w-[66.6666%] h-[55%] md:h-full'>
          {data.map((elem) => {
            return (
              <>
                <h3 className='text-lg9 font-bold text-black'>
                  {elem.title}
                </h3>
                <p className='text-black text-sm my-2'>
                  {elem.body}
                </p>
                <button type='button' className=' flex items-center gap-x-2 rounded-sm bg-slate-900 text-white text-xs font-semibold py-1.5 px-4 absolute bottom-0 left-0'>
                  Read More <BsArrowRight className='text-sm'></BsArrowRight>
                </button>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default BlogCard
