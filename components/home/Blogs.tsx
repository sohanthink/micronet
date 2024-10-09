"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-Card';

import blog1 from '@/public/home/blogs/blog-1.png'
import blog2 from '@/public/home/blogs/blog-2.png'
import blog3 from '@/public/home/blogs/blog-3.png'

const Blogs = () => {
  return (
    <div className="flex justify-between w-3/4 mx-auto flex-wrap">
        <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl border-black border-[0.1px] w-auto sm:w-[23rem] h-auto  p-6">
      <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={5}
          className="w-full"
        >
          <Image
            src={blog1}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            translateX={10}
            as="button"
            className="px-4 py-2 rounded-full text-customBlue bg-[#E2F2FA] text-xs font-bold"
          >
            Sign up
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={10}
            as="button"
            className="px-4 py-2 rounded-full text-customBlue bg-[#E2F2FA] text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-customBlue-dark mt-4"
        >
          Mastering the Transition: From Universal Analytics to Google Analytics 4
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-customBlue-dark text-sm max-w-sm mt-5"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        

      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl border-black border-[0.1px] w-auto sm:w-[23rem] h-auto  p-6">
      <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={5}
          className="w-full"
        >
          <Image
            src={blog1}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            translateX={10}
            as="button"
            className="px-4 py-2 rounded-full text-customBlue bg-[#E2F2FA] text-xs font-bold"
          >
            Sign up
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={10}
            as="button"
            className="px-4 py-2 rounded-full text-customBlue bg-[#E2F2FA] text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-customBlue-dark mt-4"
        >
          Mastering the Transition: From Universal Analytics to Google Analytics 4
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-customBlue-dark text-sm max-w-sm mt-5"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        

      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl border-black border-[0.1px] w-auto sm:w-[23rem] h-auto  p-6">
      <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={5}
          className="w-full"
        >
          <Image
            src={blog1}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            translateX={10}
            as="button"
            className="px-4 py-2 rounded-full text-customBlue bg-[#E2F2FA] text-xs font-bold"
          >
            Sign up
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={10}
            as="button"
            className="px-4 py-2 rounded-full text-customBlue bg-[#E2F2FA] text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-customBlue-dark mt-4"
        >
          Mastering the Transition: From Universal Analytics to Google Analytics 4
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-customBlue-dark text-sm max-w-sm mt-5"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        

      </CardBody>
    </CardContainer>
    </div>
  );
}

export default Blogs