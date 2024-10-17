import Image, { StaticImageData } from 'next/image'
import React from 'react'
import code from '@/public/home/icons/Development.png'
import sky from '@/public/home/icons/What We Are.png'
import watch from '@/public/home/icons/Watch.png'
import heart from '@/public/home/icons/heart.png'
import Link from 'next/link'
import Bgshape from '@/public/home/Background Image Effects.png'

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
        <div className='p-5 group border-[1px] border-customBlue-border hover:border-customBlue-secondary space-y-5 w-[48%] md:w-[23%] mb-5 md:mb-0 ease-in-out transition-all duration-300'>
            <Image className='group-hover:scale-110' src={icon} alt='code Icon' />
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
 <>
    <div className='py-4 relative'>
        <h4 className='common_title pt-10 md:pt-0'>What We Do</h4>
        <div className='flex flex-wrap md:flex-row mt-20 relative z-10 mx-auto w-11/12 justify-between md:w-4/5'>
            {
                DATA.map((item)=>(
                    <DoItems key={item.id} icon={item.icon} title={item.title} description={item.description} link={item.link} />
                ))
            }
        </div>
        <div className='absolute -bottom-80 md:top-36 left-0 w-full'>
            <Image src={Bgshape} className='w-full' alt='backfround-image-shape'  />
        </div>
    </div>

    {/* MIcronetbd section completed */}

    <div className='z-20 relative'>
            <h4 className='common_title pt-10 md:pt-20'>Micronetbd Office</h4>
            <p className='text-customDark text-base md:text-lg text-center py-5'>Take a <b>Virtual Tour </b>of our <b>Headquarters!</b></p>
            <div className='w-3/4 md:w-2/4 mx-auto'>
                <iframe
                    src='https://www.youtube.com/embed/Y1z069Ci5aE?list=RDyxqw9ju2D_E'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                    className='w-full h-auto md:h-[450px] mt-5 md:mt-10'
                ></iframe>
            </div>
    </div>

 </>
  )
}

export default WhatWeDo