"use client"
import { navProps } from '@/interfaces/interfacess';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
const NavBar = ({ logo, items, btn }: navProps) => {
    const router = useRouter()
    return (
        <nav className='flex justify-between items-center px-[40px] min-h-[90px] w-full bg-gray-600'>
            <h1 className='text-white'>{logo}</h1>
            <div className=" flex  items-center justify-between gap-10">
                <ul className='flex items-center gap-4'>
                    {
                        items.map((item, index) => {
                            return (
                                <li className='text-white' key={index}>
                                    <Link href={item.href}>{item.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={() => router.push("/login")} className='w-[90px] h-[50px] bg-white cursor-pointer rounded-2xl '>{btn}</button>
            </div>
        </nav>
    )
}

export default NavBar
