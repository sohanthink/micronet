'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import logo from '@/public/Logo.png'
import { MdMore } from 'react-icons/md'



const Navbar = () => {

    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const [reveal, setReveal] = useState<Boolean>(false) 


    const handleClick = (dropdown:string) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown)
    }

    const handleReveal =()=>{
        setReveal(!reveal)
    }

  return (
    <div className='bg-white shadow-yellow-300 shadow-[0px 4px 50px 0px rgba(0, 0, 0, 0.08)]'>
        <div className='py-4 w-4/5 mx-auto'>
            <div className='flex justify-between items-center'>
                <div>
                    <Image src={logo} alt='logo' />
                </div>

                {/* for mobile devices */}
                <MdMore onClick={handleReveal} className='text-customBlue text-xl md:hidden ' />
                {
                    reveal &&
                        <div className='absolute top-14 right-8 md:static'>
                            <div className='flex flex-col md:flex-row gap-4 bg-customGreen md:bg-transparent md:gap-16 items-end p-5 md:p-0 md:items-center text-black'>
                                <div className='relative'>
                                    <div onClick={()=>handleClick('home')} className='flex items-center gap-4 cursor-pointer mr-8 md:mr-0'>
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
                                        <div className='absolute w-44 text-nowraps top-0 md:top-10 -left-[220px] md:left-0 bg-gray-100 p-3 transition-all duration-300 ease-in-out divide-y leading-9 divide-customBlue-border'>
                                            <li>Salesforce</li>
                                            <li>DocuSign</li>
                                            <li>Litify</li>
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
                                        <div className='absolute w-44 text-nowraps top-0 md:top-10 -left-[220px] md:left-0 bg-gray-100 p-3 transition-all duration-300 ease-in-out divide-y leading-9 divide-customBlue-border'>
                                            <li>SenderIQ</li>
                                            <li>LeadLife</li>
                                            <li>ServiceDesk+</li>
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
                                        <div className='absolute w-44 text-nowraps top-0 md:top-10 -left-[220px] md:left-0 bg-gray-100 p-3 transition-all duration-300 ease-in-out divide-y leading-9 divide-customBlue-border'>
                                            <li>Our Approach</li>
                                            <li>Client Testimonials</li>
                                            <li>Industry Expertise+</li>
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
                                        <div className='absolute w-44 text-nowraps top-0 md:top-10 -left-[220px] md:left-0 bg-gray-100 p-3 transition-all duration-300 ease-in-out divide-y leading-9 divide-customBlue-border'>
                                            <li>Referral Network</li>
                                            <li>Careers</li>
                                            <li>Meet the Founder</li>
                                            <li>Pressroom & Events</li>
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
                                        <div className='absolute w-44 text-nowraps top-0 md:top-10 -left-[220px] md:left-0 bg-gray-100 p-3 transition-all duration-300 ease-in-out divide-y leading-9 divide-customBlue-border'>
                                            <li>salesforce</li>
                                            <li>Litify</li>
                                            <li>Docusign</li>
                                            <li>Artificial Inteligence</li>
                                            <li>Data MIgration</li>
                                            <li>Microsoft</li>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                }

                {/* for pc device */}
                <div className='hidden md:block'>
                            <div className='flex md:flex-row gap-4 bg-customGreen md:bg-transparent md:gap-16 items-end p-5 md:p-0 md:items-center text-black'>
                                <div className='relative'>
                                    <div onClick={()=>handleClick('home')} className='flex items-center gap-4 cursor-pointer mr-8 md:mr-0'>
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
                                        <div className='absolute w-44 text-nowraps top-0 md:top-10 -left-[220px] md:left-0 bg-gray-100 p-3 transition-all duration-300 ease-in-out divide-y leading-9 divide-customBlue-border'>
                                            <li>Salesforce</li>
                                            <li>DocuSign</li>
                                            <li>Litify</li>
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
                                        <div className='absolute w-44 text-nowraps top-0 md:top-10 -left-[220px] md:left-0 bg-gray-100 p-3 transition-all duration-300 ease-in-out divide-y leading-9 divide-customBlue-border'>
                                            <li>SenderIQ</li>
                                            <li>LeadLife</li>
                                            <li>ServiceDesk+</li>
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
                                        <div className='absolute w-44 text-nowraps top-0 md:top-10 -left-[220px] md:left-0 bg-gray-100 p-3 transition-all duration-300 ease-in-out divide-y leading-9 divide-customBlue-border'>
                                            <li>Our Approach</li>
                                            <li>Client Testimonials</li>
                                            <li>Industry Expertise+</li>
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
                                        <div className='absolute w-44 text-nowraps top-0 md:top-10 -left-[220px] md:left-0 bg-gray-100 p-3 transition-all duration-300 ease-in-out divide-y leading-9 divide-customBlue-border'>
                                            <li>Referral Network</li>
                                            <li>Careers</li>
                                            <li>Meet the Founder</li>
                                            <li>Pressroom & Events</li>
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
                                        <div className='absolute w-44 text-nowraps top-0 md:top-10 -left-[220px] md:left-0 bg-gray-100 p-3 transition-all duration-300 ease-in-out divide-y leading-9 divide-customBlue-border'>
                                            <li>salesforce</li>
                                            <li>Litify</li>
                                            <li>Docusign</li>
                                            <li>Artificial Inteligence</li>
                                            <li>Data MIgration</li>
                                            <li>Microsoft</li>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                <div className='hidden md:block'>
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