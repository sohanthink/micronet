import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'

import client1 from '@/public/home/clients/1.png'
import client2 from '@/public/home/clients/2.png'
import client3 from '@/public/home/clients/3.png'
import client4 from '@/public/home/clients/4.png'
import client5 from '@/public/home/clients/5.png'
import client6 from '@/public/home/clients/6.png'
import client7 from '@/public/home/clients/7.png'
import client8 from '@/public/home/clients/8.png'
import client9 from '@/public/home/clients/9.png'
import client10 from '@/public/home/clients/10.png'

const ClientsDATA = [
    {
        id:1,
        image:client1,
        imageAlt:'client_image',
    },
    {
        id:2,
        image:client2,
        imageAlt:'client_image',
    },
    {
        id:3,
        image:client3,
        imageAlt:'client_image',
    },
    {
        id:4,
        image:client4,
        imageAlt:'client_image',
    },
    {
        id:5,
        image:client5,
        imageAlt:'client_image',
    },
    {
        id:6,
        image:client6,
        imageAlt:'client_image',
    },
    {
        id:7,
        image:client7,
        imageAlt:'client_image',
    },
    {
        id:8,
        image:client8,
        imageAlt:'client_image',
    },
    {
        id:9,
        image:client9,
        imageAlt:'client_image',
    }
]


const Clients = () => {
  return (
    <div className='w-full mx-auto bg-[#E2F2FA] py-10'>
        <InfiniteMovingCards 
            items={ClientsDATA}
            direction="right"
            speed="slow" />
        <InfiniteMovingCards 
            items={ClientsDATA}
            direction="left"
            speed="slow" />
    </div>
  )
}

export default Clients