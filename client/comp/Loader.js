import React from 'react'

const Loader = () => {
    return (
        <div className='absolute top-0 z-[9999] left-0 bg-black w-full h-screen flex items-center justify-center gap-y-4 flex-col'>
            <span className='text-base text-white '>Loading</span>
            <div className="w-[150px] h-[5px] bg-slate-950 overflow-x-hidden rounded-full">
                <div className="w-full h-full bg-[#f00] bar"></div>
            </div>
        </div>
    )
}

export default Loader
