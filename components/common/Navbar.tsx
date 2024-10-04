import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='bg-white'>
        <div className='py-4 w-4/5 mx-auto'>
            <div className='flex justify-between'>
                <div>
                    <Image src='/Logo.png' alt='logo' width={100} height={100} />
                </div>
                <div className='flex gap-6 items-center text-black'>
                    <ul>
                        <li><Link href='#'>Home</Link></li>
                    </ul>
                    <ul>
                        <li><Link href='#'>Home</Link></li>
                    </ul>
                    <ul>
                        <li><Link href='#'>Home</Link></li>
                    </ul>
                    <ul>
                        <li><Link href='#'>Home</Link></li>
                    </ul>
                    <ul>
                        <li><Link href='#'>Home</Link></li>
                    </ul>
                </div>
                <div>
                    <Button text='Contact' 
                    buttonStyles='group-hover:text-black text-yellow-500 border-2 border-blue-500  ' 
                    hoverStyles='group-hover:bg-blue-700 ' 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar