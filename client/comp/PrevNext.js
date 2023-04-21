import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/Bs';

const PrevNext = ({ prev, next, payload, setNext, setPrev, className }) => {
    return (
        <>
            <div className={`${className} flex justify-between`}>
                <button type='button' className='flex items-center gap-x-2 rounded-sm bg-slate-500 text-white text-xs font-semibold py-1.5 px-6 hover:gap-x-4 transition-all origin-right' onClick={() => {
                    if (prev <= 0) {
                        setPrev(0);
                        setNext(10);
                    } else {
                        setNext(next - 10)
                        setPrev(prev - 10)
                    }
                }}><BsArrowLeft /> Previous</button>
                <button type='button' className='flex items-center gap-x-2 rounded-sm bg-slate-900 text-white text-xs font-semibold py-1.5 px-6 hover:gap-x-4 transition-all origin-left' onClick={() => {
                    if (next >= payload.length) {
                        setNext(payload.length);
                        setPrev(payload.length - 10)
                    } else {
                        setNext(next + 10)
                        setPrev(prev + 10)
                    }
                    console.log(next);
                }}>Next <BsArrowRight /></button>
            </div>
        </>
    )
}

export default PrevNext
