import React from 'react'
import Hero from '@/components/home/Hero';
import WhatWeDo from '@/components/home/WhatWeDo';

export default function Home() {
  return (
    <main className="bg-white">
        <Hero/>
        <WhatWeDo/>
    </main>
  );
}
