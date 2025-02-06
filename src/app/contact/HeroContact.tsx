import Image from 'next/image'
import React from 'react'

const HeroContact = () => {
  return (
    <div className='bg-[#012060] flex md:flex-row flex-col md:h-[500px]'>
      <div className="section-1 text-section p-6 md:w-1/2 flex flex-col justify-center md:text-start text-center">
        <span className='text-[15px] text-center font-[700] bg-white text-[#06182F] rounded-md w-[200px]'>Calculate your Percentile</span>
        <h1 className='md:text-[60px] text-[50px] font-[700] text-white '>Make Informed Decisions for a Bright Future.</h1>
      </div>

      <div className="section-2 relative w-full md:w-1/2 md:px-0 px-3">
  <Image
    width={500}
    height={800}
    src="/img/contact/Rectangle 26.png"
    className="h-full object-cover w-full"
    alt="img"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
  <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-l from-transparent to-[#012060] pointer-events-none" aria-hidden='true'></div>
  <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-r from-transparent to-[#012060] pointer-events-none" aria-hidden='true'></div>
</div>
    </div>
  )
}

export default HeroContact
