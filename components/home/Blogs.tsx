"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-Card';

import blog1 from '@/public/home/blogs/blog-1.png'
import blog2 from '@/public/home/blogs/blog-2.png'
import blog3 from '@/public/home/blogs/blog-3.png'
import { CiCalendarDate } from "react-icons/ci";

const BlogDATA = [
    {
        id:1,
        title:'Mastering the Transition: From Universal Analytics to Google Analytics 4',
        image:blog1,
        date:'1jan,1973',
        tags:[{
            id:1,
            name:'science',
        },
        {
            id:2,
            name:'Technology',
        }]
    },
    {
        id:2,
        title:'Driving Business Excellence with Salesforce: A Strategy Grounded in Timeless Principles',
        image:blog2,
        date:'1jan,1974',
        tags:[{
            id:1,
            name:'Buisness',
        }]
    },
    {
        id:3,
        title:'Driving Business Excellence with Salesforce: A Strategy Grounded in Timeless Principles',
        image:blog3,
        date:'1jan,1984',
        tags:[{
            id:1,
            name:'nice',
        },
        {
            id:2,
            name:'mobile',
        }]
    },
]

const Blogs = () => {
  return (
    <div className="flex justify-between w-3/4 mx-auto flex-wrap">
        {
            BlogDATA.map((items)=>(
                <CardContainer key={items.id} className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl border-customDark/30 border-[0.1px] w-auto sm:w-[24rem] h-auto  p-6">
                        <CardItem
                        translateZ="100"
                        rotateX={20}
                        rotateZ={5}
                        className="w-full"
                        >
                        <Image
                            src={items.image}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                        </CardItem>
                        <div className="flex gap-3 items-center mt-5">
                            {
                                items.tags.map((technology)=>(
                                    <CardItem key={technology.id}
                                        translateZ={20}
                                        translateX={10}
                                        as="button"
                                        className="px-4 py-2 rounded-full text-customBlue bg-[#E2F2FA] text-xs font-bold"
                                    >
                                        {technology.name}
                                    </CardItem>
                                ))
                            }
                        
                        </div>
                        <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-customBlue-dark mt-4"
                        >
                        {items.title}
                        </CardItem>
                        {/* <CardItem
                        as="p"
                        translateZ="60"
                        className="text-customBlue-dark text-sm max-w-sm mt-5"
                        >
                        Hover over this card to unleash the power of CSS perspective
                        </CardItem> */}
                        <CardItem
                        as="p"
                        translateZ="60"
                        className="text-customBlue-dark text-sm max-w-sm mt-5 flex gap-5"
                        >
                            <CiCalendarDate /> {items.date}
                        </CardItem>

            </CardBody>
                </CardContainer>
            ))
        }
    </div>
  );
}

export default Blogs