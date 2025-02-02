import Image from 'next/image'
import React from 'react'

const WhyAttend = () => {
  return (
    <div className='flex md:flex-row md:justify-between flex-col px-12 py-16 w-full'>
    <div className="section-1 md:w-1/2 w-full">
    <h1 className='py-10 text-start text-[#012060] text-[45px] font-[700]'>WHY ATTEND</h1>
    <div className='text-start text-[#444444] font-[700] text-[25px] flex flex-col gap-5'>
    <p>• Networking: Connect with professionals in the industry, alumni, or acquaintances.</p>
    <p>• Skill Development: Through different exposure opportunities, enhance both technical and soft skills.</p>
    <p>• Career Advancement: Learn from the best in the industry to maximize your prospects.</p>
    <p>• Personal Growth: Get involved in activities that challenge your creativity, leadership, and communication skills.</p>
    <p>• Exposure: Be current on market trends, new technologies, and emerging industries.</p>
    <p>• Fun and Engagement: Get involved in cultural events and competitions for your unforgettable college experience.</p>
    </div>
    </div>
    <div className="section-2 md:w-1/2 w-full flex md:justify-center relative md:mt-28">
        <Image src="/img/events/WhyAttend/Group 53.png" width={400} height={100} className='md:w-[500px] md:h-[500px]' alt='img'/>
        <p className="text-[#012060] text-[18px] font-[700] px-6 py-6 border-[2px] border-[#012060] bg-white rounded-xl text-center absolute right-0 top-0">SOCIAL SKILLS</p>
        <p className="text-[#012060] text-[18px] font-[700] px-6 py-6 border-[2px] border-[#012060] bg-white rounded-xl text-center absolute right-5 bottom-0">EXPOSURE</p>
        <p className="text-[#012060] text-[18px] font-[700] md:px-6 md:py-6 p-3 border-[2px] border-[#012060] bg-white rounded-xl text-center absolute left-0 top-1/3">NETWORKING <br />
        WITH 10K+ <br /> PROSESSIONALS</p>
    </div>
    </div>
  )
}

export default WhyAttend
