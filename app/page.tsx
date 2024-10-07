import React from 'react'
import Hero from '@/components/home/Hero';
import WhatWeDo from '@/components/home/WhatWeDo';
import Offer from '@/components/home/Offer';
import Testimonial from '@/components/home/Testimonial';

export default function Home() {
  return (
    <main className="bg-white">
        <Hero/>
        <WhatWeDo/>
        <Offer/>
        <Testimonial/>
    </main>
  );
}
