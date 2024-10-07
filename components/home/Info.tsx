import React from 'react'

import bag from "@/public/home/info/bag.png"
import vector from "@/public/home/info/Vector.png"
import man from "@/public/home/info/mangroup.png"
import setting from "@/public/home/info/settings.png"
import search from "@/public/home/info/search.png"
import Image from 'next/image'
import { count } from 'console'

const InfoDATA = [
    {
        id:1,
        icon:bag,
        count: '100+',
        text:'Completed Projects'
    },
    {
        id:2,
        icon:vector,
        count: '95%',
        text:'repeat Business'
    },
    {
        id:3,
        icon:man,
        count: '20+',
        text:'Business Consultations'
    },
    {
        id:4,
        icon:setting,
        count: '7+',
        text:'Soluations Arcitecht'
    },
    {
        id:5,
        icon:search,
        count: '9.57',
        text:'CSAT Score'
    },
]

const Info = () => {
  return (
    <div className='w-4/5 mx-auto py-44'>
        <div className='flex gap-10 items-center justify-between'>
            {
                InfoDATA.map((items)=>(
                    <div key={items.id} className='flex gap-4 items-center'>
                        <div><Image src={items.icon} alt='bag icon'/></div>
                        <div>
                            <h6 className='text-customBlue-dark text-4xl font-bold'>{items.count}</h6>
                            <h5 className='text-customDark text-sm'>{items.text}</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Info