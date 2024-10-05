import Image, { StaticImageData } from 'next/image'
import React from 'react'
import code from '@/public/home/icons/Development.png'
import sky from '@/public/home/icons/What We Are.png'
import watch from '@/public/home/icons/Watch.png'
import heart from '@/public/home/icons/heart.png'
import Link from 'next/link'

const DATA = [
    {
        id:1,
        title:'Development and Consulting',
        description:'When your exceptional software program is not capable...',
        icon: code,
        link:'home'
    },
    {
        id:2,
        title:'Salesforce Quickstart Package',
        description:'Salesforce Quickstart is designed to help your organizations...',
        icon:sky,
        link:'home'
    },
    {
        id:3,
        title:'One Time Engagement',
        description:'A cost-effective way to start with Salesforce depending on your business...',
        icon:watch,
        link:'home'
    },
    {
        id:4,
        title:'Managed Service',
        description:'Micronetbd is a technology solutions provider that partners with businesses...',
        icon:heart,
        link:'home'
    },
]


interface DoItemsProps {
    icon: StaticImageData;
    title: string;
    description: string;
    link:string
}

export const DoItems:React.FC<DoItemsProps> =({icon,title,description,link})=>{
    return(
        <div className='p-5 border-[1px] border-customBlue-border space-y-5 w-1/4'>
            <Image src={icon} alt='code Icon' />
            <h6 className='font-semibold text-lg text-customBlue-dark'>{title}</h6>
            <p className='text-base font-light text-customDark pb-5'>{description}</p>
            <span className='text-customBlue-secondary mt-5'>
                <Link href={`${link}`}>Read More</Link>  
            </span>
        </div>
    )
}

const WhatWeDo = () => {
  return (
    <div className='py-4 w-4/5 mx-auto'>
        <h4 className='common_title'>What We Do</h4>
        <div className='flex gap-10 flex-row mt-20'>
            {
                DATA.map((item)=>(
                    <DoItems icon={item.icon} title={item.title} description={item.description} link={item.link} />
                ))
            }
        </div>
    </div>
  )
}

export default WhatWeDo