import React from 'react'
import Hero from '@/components/home/Hero';
import WhatWeDo from '@/components/home/WhatWeDo';
import Offer from '@/components/home/Offer';
import Testimonial from '@/components/home/Testimonial';
import Info from '@/components/home/Info';
import SIdeIconBar from '@/components/common/SIdeIconBar';
import Clients from '@/components/home/Clients';

export default function Home() {
  return (
    <main className="bg-white">
        <SIdeIconBar/>
        <Hero/>
        <WhatWeDo/>
        <Offer/>
        <Testimonial/>
        <Info />
        <Clients/>
    </main>
  );
}
