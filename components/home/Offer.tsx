import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

import salesforce from '@/public/home/offer/Salesforce.png'
import litify from '@/public/home/offer/Litify.png'
import docusign from '@/public/home/offer/DocuSign.png'
import spec from '@/public/home/offer/Specright_Logo 1.png'


const DATA = [
    {
        id:1,
        description:'<b>Salesforce</b> is a customer relationship management <b>(CRM)</b> platform that helps businesses <b>manage</b> customer <b>interactions and data.</b>',
        icon: salesforce,
    },
    {
        id:2,
        description:'<b>Litify</b> is a legal case <b>management platform</b> built on Salesforce that streamlines legal <b>workflows</b> and <b>case management </b> for law',
        icon:litify,
    },
    {
        id:3,
        description:'<b>DocuSign</b> is an <b>electronic signature</b> and <b>digital document</b> workflow platform that enables users to <b>sign, send,</b> and <b>manage documents</b> electronically.',
        icon: salesforce,
    },
    {
        id:4,
        description:'<b>Specright</b> is the <b>#1 platform</b> for <b>specification management</b> and <b>supply chain data management.</b> Manage specs across your <b>supply chain</b> with <b>Specright</b>.',
        icon:spec,
    },
]

interface DoItemsProps {
    icon: StaticImageData;
    description: string;
}

export const DoItems:React.FC<DoItemsProps> =({icon,description})=>{
    return(
        <div className='group p-5 border-[1px] border-customBlue-border hover:border-customBlue-secondary space-y-5 w-1/4 ease-in-out transition-all duration-300 flex items-center justify-center flex-col gap-6'>
            <Image className='group-hover:scale-125 transition-all duration-300 ease-out' src={icon} alt='code Icon' />
            <p className='text-base font-light text-customDark pb-5 text-center px-5' dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    )
}

const Offer = () => {
  return (
    <div className='py-10 relative '>
        <h4 className='common_title pt-5'>What We Offer</h4>
        <p className='text-customDark text-lg text-center py-5 px-72'>We are <b>experts</b> in delivering top-notch services for <b>Salesforce, Litify,</b> and <b>DocuSign</b> to elevate <b>and improve</b> the performance of your <b>business operations.</b></p>
        <div className='flex gap-10 flex-row mt-20 relative z-10 mx-auto w-4/5'>
            {
                DATA.map((item)=>(
                    <DoItems key={item.id} icon={item.icon} description={item.description} />
                ))
            }
        </div>
    </div>
  )
}

export default Offer