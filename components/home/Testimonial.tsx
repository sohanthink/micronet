'use client'

import React, { useRef } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types'; 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import testimonialBG from '@/public/home/testimonial/testimonialBG.png'

import { EffectFade, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';

const TestimonialDATA = [
    {
        id:1,
        review:'“Micronetbd was able to keep us on track , they had a very clear understanding, and ensured that we met our objectives”',
        name:'Tesd Lorez',
        designation:'Lorenz & Lorenz.PLLC',
        vid:'https://www.youtube.com/embed/Y1z069Ci5aE?list=RDyxqw9ju2D_E'
    },
    {
        id:2,
        review:'“Micronetbd was able to keep us on track , they had a very clear understanding, and ensured that we met our objectives”',
        name:'Devid kong',
        designation:'korim & nice.PLLC',
        vid:'https://www.youtube.com/embed/Utbrz7VypoY?list=RDUtbrz7VypoY'
    }
]

const Testimonial = () => {
  const swiperRef =  useRef<SwiperCore | null>(null);

  return (
    <div className='mx-auto w-4/5 relative'>
        <Swiper
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper; // Capture Swiper instance here
            }}
            spaceBetween={30}
            effect={'fade'}
            pagination={{
            clickable: true,
            }}
            modules={[EffectFade, Pagination]}
            className="mySwiper"
        >
            {
                TestimonialDATA.map((items)=>(
                    <SwiperSlide key={items.id}>
                        <div className='relative h-full'>
                            <Image className='absolute bottom-16 md:bottom-0 left-0 z-[-1]' src={testimonialBG} alt='testimonial nature background'/>
                            <div className='flex gap-32 z-30 w-11/12 md:w-4/5 h-full mx-auto justify-center'>
                                <div className='w-full md:w-1/2 h-full flex flex-col justify-center'>
                                    <h6 className='text-customBlue-dark font-medium text-base'>Words From</h6>
                                    <h3 className='text-2xl md:text-4xl text-customBlue-dark font-bold'>Happy Clients</h3>
                                    <p className='text-customDark italic text-base md:text-lg py-4'>{items.review}</p>
                                    <p className='text-customBlue text-base'><b>{items.name}</b> <br/> <span className='text-customBlue-dark text-sm'>{items.designation}</span></p>
                                </div>
                                <div className='md:w-1/2 md:flex justify-center items-center hidden'>
                                    <iframe
                                        src={`${items.vid}`}
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                        referrerPolicy='strict-origin-when-cross-origin'
                                        allowFullScreen
                                        className='w-[476px] h-72 border-5 border-green-200'>
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
          
        </Swiper>

        {/* Custom Next and Prev buttons */}

        <div className="absolute top-1/2 transform -translate-y-1/2 -left-5 z-10">
            <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="text-customBlue text-4xl md:text-[50px]">
                <FaCircleChevronLeft />
            </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 -right-5 z-10">
            <button onClick={() => swiperRef.current?.slideNext()} 
                className="text-customBlue text-4xl md:text-[50px]">
                <FaCircleChevronRight />
            </button>
        </div>
    </div>
  )
}

export default Testimonial;
