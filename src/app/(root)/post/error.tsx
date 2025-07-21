"use client"
import { errorProps } from '@/interfaces/interfacess'
import React, { useEffect } from 'react'
const Error = ({ error, reset }: errorProps) => {
    
        useEffect(() => {
            console.error(error)
        }, [error])
    return (
        <div className='flex justify-center items-center flex-col gap-2.5'>
            <h1 className='text-black' >Something went wrong!</h1>
            <button className='w-[120px] h-[50px] bg-blue-950 text-white cursor-pointer' onClick={() => reset()}>Try Again</button>
        </div>
    )
}

export default Error
