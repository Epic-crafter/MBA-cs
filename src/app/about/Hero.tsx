import Image from 'next/image'
import React from 'react'

const hero = () => {
  return (
<div className="relative bg-cover h-[600px] flex items-center">
<h1 className="text-[45px] flex  font-[700] text-center text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] z-50">Empowering Future Leaders through Excellence in Education.</h1>
  <Image src="/img/aboutus/image 2.png" className='z-0' alt="About Us" layout="fill" objectFit="cover" />
</div>
  )
}

export default hero
