"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-Card';

import blog1 from '@/public/home/blogs/blog-1.png'
import blog2 from '@/public/home/blogs/blog-2.png'
import blog3 from '@/public/home/blogs/blog-3.png'

import { CiCalendarDate } from "react-icons/ci";
import Button from "../common/Button";

const BlogDATA = [
    {
        id:1,
        title:'Mastering the Transition: From Universal Analytics to Google Analytics 4',
        image:blog1,
        date:'1 january, 1973',
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
        date:'1 March, 1974',
        tags:[{
            id:1,
            name:'Buisness',
        }]
    },
    {
        id:3,
        title:'Synergizing Productivity: Salesforce and Google Cloud Forge a Path to Collaborative',
        image:blog3,
        date:'41 November, 1984',
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
    <div className="py-5 md:py-10">
        <div className="flex justify-between w-11/12 md:w-4/5 mx-auto flex-wrap">
        {
            BlogDATA.map((items)=>(
                <CardContainer key={items.id} className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl border-customDark/30 border-[0.1px] w-auto h-auto p-3 md:p-6">
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
                            className="h-52 md:h-60 w-full object-cover group-hover/card:shadow-xl"
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
                        className="text-lg md:text-xl font-bold text-customBlue-dark mt-4"
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
                        className="text-customBlue-dark text-sm max-w-sm mt-5 flex items-center gap-5"
                        >
                            <CiCalendarDate /> {items.date}
                        </CardItem>

                    </CardBody>
                </CardContainer>
            ))
        }
    </div>
    <div className="flex justify-center">
        <Button text="View more Blogs" styles="text-white bg-customBlue hover:bg-white hover:text-customBlue-dark border-[0.3px] hover:border-[0.3px] hover:border-black hover:text-bold inline-block"/>
    </div>
    </div>
  );
}

export default Blogs