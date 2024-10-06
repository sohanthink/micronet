import React from 'react'
import Hero from '@/components/home/Hero';
import WhatWeDo from '@/components/home/WhatWeDo';
import Offer from '@/components/home/Offer';

export default function Home() {
  return (
    <main className="bg-white">
        <Hero/>
        <WhatWeDo/>
        <Offer/>
    </main>
  );
}
