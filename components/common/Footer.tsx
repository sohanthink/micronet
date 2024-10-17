import Image from 'next/image'
import React from 'react'

import logo from '@/public/Logo.png'
import { HiOutlineMail } from 'react-icons/hi'
import { CiPhone } from 'react-icons/ci'
import Link from 'next/link'
import map from '@/public/home/Map.png'

const QuickLinkData=[
    {
        id:1,
        name: 'About'
    },
    {
        id:2,
        name: 'Contact'
    },
    {
        id:3,
        name: 'Blogs'
    },
    {
        id:4,
        name: 'Services'
    },
    {
        id:5,
        name: 'Privacy Policy'
    },
    {
        id:6,
        name: 'Opt-Out Preference'
    }
]

const socialMediaData=[
    {
        id:1,
        name: 'Facebook'
    },
    {
        id:2,
        name: 'Twitter'
    },
    {
        id:3,
        name: 'Instagram'
    },
    {
        id:4,
        name: 'LinkedIn'
    },
    {
        id:5,
        name: 'Youtube'
    },
]

const Footer = () => {
  return (
    <div className="bg-white pt-20">
      <div className="py-4 w-4/5 mx-auto">
        <div className='flex flex-wrap justify-between'>
            <div className='w-full md:w-[24%] space-y-4'>
                <div className='flex justify-center md:justify-start'>
                    <Image src={logo} alt='logo' />
                </div>
                <p className='text-customBlue-dark text-base'>At <b>Micronetbd</b>, we help our <b>clients achieve</b> full <b>optimization</b> of the <b>Salesforce & DocuSign</b> Platforms.</p>
                <ul className='text-customDark space-y-1'>
                    <li className='flex items-center gap-3'>
                        <HiOutlineMail />
                        customerservice@micronetbd.org</li>
                    <li className='flex items-center gap-3'>
                        <CiPhone />
                        (609) 613-4656 <b>(Monday to Friday)</b></li>
                </ul>
            </div>
            <div className='w-[48%] md:w-[24%] md:pl-10 mt-7 md:mt-0'>
                <h4 className='font-semibold text-customDark pb-4 text-lg'>Quick Links</h4>
                <ul className='text-customDark space-y-3'>
                    {
                        QuickLinkData.map((item)=>(
                            <li className='hover:underline hover:underline-offset-1 hover:text-customBlue-secondary transition-all duration-300 ease-out cursor-pointer' key={item.id}><Link href={item.name}></Link>{item.name}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='w-[48%] md:w-[24%] mt-7 md:mt-0'>
                <h4 className='font-semibold text-customDark pb-4 text-lg'>Social Media</h4>
                <ul className='text-customDark space-y-3'>
                    {
                        socialMediaData.map((item)=>(
                            <li className='hover:underline hover:underline-offset-1 hover:text-customBlue-secondary transition-all duration-300 ease-out cursor-pointer' key={item.id}><Link href={item.name}></Link>{item.name}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='w-full md:w-[24%] mt-7 md:mt-0'>
                <h4 className='font-semibold text-customDark pb-4 text-lg'>Reach Us</h4>
                <p className='text-customDark pb-3'>Micronetbd Inc. <br/>4 AAA Drive, Ste 205, Hamilton, NJ 08619</p>
                <Image src={map} alt='map-footer'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer