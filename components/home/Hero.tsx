import React from 'react'
import Image from "next/image";
import hero from '@/public/home/Hero.png'
import Button from "@/components/common/Button";
const Hero = () => {
  return (
    <div className='py-4 w-11/12 md:w-4/5 mx-auto'>
      <div className="flex-col-reverse flex md:flex-row justify-between items-center">
          <div className="w-full md:w-2/3 space-y-5 text-center md:text-left">
              <span className="title_highlight">EMPOWER YOUR BUSINESS WITH</span>
              <h1 className="font-extrabold text-3xl md:text-[56px] leading-9 md:leading-[65px] text-customBlue">SALESFORCE <span className="text-customGreen">&</span><br/> DOCUSIGN <span className="text-customGreen ">SOLUTIONS</span></h1>
              <p className="text-base md:text-lg text-customBlue-dark md:pr-60">At <b>Micronetbd,</b> we excel at utilizing <b>Salesforce</b> and <b>DocuSign</b> to improve your <b>company’s business.</b> With <b>cutting-edge technology,</b> we furnish your company with the means to achieve <b>success</b> and <b>growth.</b></p>
              <div className="flex gap-5 justify-center md:justify-start">
                <Button text="BOOK A DEMO" styles="bg-customBlue-dark hover:bg-white border-2 border-opacity-0 hover:border-2 hover:border-opacity-100 hover:text-customBlue-dark hover:border-customBlue-border inline-block" />
                <Button text="Head Office" styles="text-customBlue border-2 border-customBlue hover:border-opacity-0 hover:bg-customBlue hover:text-white inline-block" />
              </div>
          </div>
          <div>
            <Image src={hero} alt="Banner Hero image"/>
          </div>
      </div>
    </div>
  )
}

export default Hero