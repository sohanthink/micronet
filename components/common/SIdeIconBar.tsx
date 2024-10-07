import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6'

const SIdeIconBar = () => {
  return (
    <div className='fixed top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center left-20 gap-10 font-bold text-customBlue'>
        <div className='border-2 border-customBlue h-32 w-0'></div>
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
        <FaYoutube />
        <div className='border-2 border-customBlue h-32 w-0'></div>
    </div>
  )
}

export default SIdeIconBar