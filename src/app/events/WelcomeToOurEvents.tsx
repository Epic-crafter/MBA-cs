import Image from 'next/image'
import React from 'react'

const WelcomeToOurEvents = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className='text-[#012060] text-[35px] font-[700] md:px-10 md:text-start text-center px-5'>Welcome to Our Events & Webinars</h2>
      <p className="text-[black] text-[15px] font-[500] px-4 md:px-10 md:text-start text-center">Explore our calendar of events and webinars designed to enrich your learning experience, expand your network, and inspire innovation.</p>
      <div className='flex md:flex-row flex-col justify-between px-12 mt-6'>
      <div className="section-1 flex-col space-y-12 text-center">
            <h3 className="text-black border-[2px] shadow-[0px_10px_10px_5px] shadow-[#012060] border-[#012060] md:px-36 rounded-md py-3 text-[25px] font-[800]">Guest lectures</h3>
            <h3 className="text-black border-[2px] shadow-[0px_10px_10px_5px] shadow-[#012060] border-[#012060] md:px-36 rounded-md py-3 text-[25px] font-[800]">Career development webinars</h3>
            <h3 className="text-black border-[2px] shadow-[0px_10px_10px_5px] shadow-[#012060] border-[#012060] md:px-36 rounded-md py-3 text-[25px] font-[800]">Cultural events and competitions</h3>
            <h3 className="text-black border-[2px] shadow-[0px_10px_10px_5px] shadow-[#012060] border-[#012060] md:px-36 rounded-md py-3 text-[25px] font-[800]">Guest lectures</h3>
            <h3 className="text-black border-[2px] shadow-[0px_10px_10px_5px] shadow-[#012060] border-[#012060] md:px-36 rounded-md py-3 text-[25px] font-[800]">Workshops and certifications

</h3>
      </div>
      <div className="section-2 mt-10 md:mt-0">
        <Image width={500} height={500} src='/img/events/WelcomeToEvents/Ellipse 29.png' alt='img' />
      </div>
      </div>
    </div>
  )
}

export default WelcomeToOurEvents
