'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import logo from '@/public/Logo.png'



const Navbar = () => {

    const [openDropdown, setOpenDropdown] = useState<string | null>(null)


    const handleClick = (dropdown:string) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown)
    }

  return (
    <div className='bg-white'>
        <div className='py-4 w-4/5 mx-auto'>
            <div className='flex justify-between items-center'>
                <div>
                    <Image src={logo} alt='logo' />
                </div>
                <div className=''>
                    <div className='flex gap-16 items-center text-black'>
                        <div className='relative'>
                            <div onClick={()=>handleClick('home')} className='flex items-center gap-4 cursor-pointer'>
                                <Link href='#'>Home</Link>
                            </div>
                        </div>
                        <div className='relative'>
                            <div onClick={()=>handleClick('services')} className='flex items-center gap-4 cursor-pointer'>
                                <Link href='#'>Services</Link>
                                {
                                    openDropdown === 'services' ?
                                        <IoIosArrowUp className="transition-transform duration-300 transform rotate-180" /> 
                                            : 
                                        <IoIosArrowUp className="transition-transform duration-300 transform rotate-0" />
                                }
                            </div>
                            {openDropdown ==='services' &&
                                <div className='absolute top-10 left-0 bg-red-100 p-3 transition-all duration-300 ease-in-out'>
                                    <li>nice</li>
                                    <li>nice</li>
                                    <li>nice</li>
                                </div>
                            }
                        </div>
                        <div className='relative'>
                            <div onClick={()=> handleClick('appexchange')} className='flex items-center gap-4 cursor-pointer'>
                                <Link href='#'>AppExchange</Link>
                                {
                                    openDropdown === 'appexchange' ?
                                        <IoIosArrowUp className="transition-transform duration-300 transform rotate-180" /> 
                                            : 
                                        <IoIosArrowUp className="transition-transform duration-300 transform rotate-0" />
                                }
                            </div>
                            {openDropdown==='appexchange' &&
                                <div className='absolute top-10 left-0 bg-red-100 p-3'>
                                    <li>nice</li>
                                    <li>nice</li>
                                    <li>nice</li>
                                </div>
                            }
                        </div>
                        <div className='relative'>
                            <div onClick={()=>handleClick('results')} className='flex items-center gap-4 cursor-pointer'>
                                <Link href='#'>Results</Link>
                                {
                                    openDropdown === 'results' ?
                                        <IoIosArrowUp className="transition-transform duration-300 transform rotate-180" /> 
                                            : 
                                        <IoIosArrowUp className="transition-transform duration-300 transform rotate-0" />
                                }
                            </div>
                            {openDropdown === 'results' &&
                                <div className='absolute top-10 left-0 bg-red-100 p-3'>
                                    <li>nice</li>
                                    <li>nice</li>
                                    <li>nice</li>
                                </div>
                            }
                        </div>
                        <div className='relative'>
                            <div onClick={()=>handleClick('aboutus')} className='flex items-center gap-4 cursor-pointer'>
                                <Link href='#'>About Us</Link>
                                {
                                    openDropdown === 'aboutus' ?
                                        <IoIosArrowUp className="transition-transform duration-300 transform rotate-180" /> 
                                            : 
                                        <IoIosArrowUp className="transition-transform duration-300 transform rotate-0" />
                                }
                            </div>
                            {openDropdown === 'aboutus' &&
                                <div className='absolute top-10 left-0 bg-red-100 p-3'>
                                    <li>nice</li>
                                    <li>nice</li>
                                    <li>nice</li>
                                </div>
                            }
                        </div>
                        <div className='relative'>
                            <div onClick={()=>handleClick('blogs')} className='flex items-center gap-4 cursor-pointer'>
                                <Link href='#'>Blogs</Link>
                                {
                                    openDropdown === 'blogs' ?
                                        <IoIosArrowUp className="transition-transform duration-300 transform rotate-180" /> 
                                            : 
                                        <IoIosArrowUp className="transition-transform duration-300 transform rotate-0" />
                                }
                            </div>
                            {
                            openDropdown === 'blogs' &&
                                <div className='absolute top-10 left-0 bg-red-100 p-3'>
                                    <li>nice</li>
                                    <li>nice</li>
                                    <li>nice</li>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <Button text='Contact' 
                    styles="bg-customBlue border-2 border-opacity-0 border-customBlue-border hover:border-opacity-100 hover:bg-white hover:text-black"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar