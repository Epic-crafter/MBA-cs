import React from 'react'

const WhyChooseUs = () => {
  return (
    <div>
      <h1 className='text-[#012060] text-center text-[30px] font-[700] p-6'>Why Choose Us</h1>
      <p className="text-[14px] text-[#444444] text-center font-[700] md:px-0 px-3">Founded in [Year], our institution has reached key milestones, gaining recognition as an AICTE-approved and AACSB-accredited leader in education. We focus on providing quality education, aligning with industry demands, and fostering leadership development.</p>
      <div className='text-[#012060] py-8'>

        <div className='flex md:flex-row flex-col justify-center px-8'>
            
            <div className='flex md:w-1/2 p-4'>
                <img src="/img/aboutus/WhyChooseUs/eva_people-outline.png" className='p-3 border-[2px] mr-[10px] border-[#012060] rounded-lg' alt="" />
                <div className='text flex flex-col items-start'>
                    <h3 className='font-[700] text-[18px]'>FACULTY</h3>
                    <p className='font-[400] text-[18px]'>World-class faculty with academic and industry expertise.</p>
                </div>
            </div>

            <div className='flex md:w-1/2 p-4'>
                <img src="/img/aboutus/WhyChooseUs/mdi_college-outline.png" className='p-3 border-[2px] mr-[10px] border-[#012060] rounded-lg' alt="" />
                <div className='text flex flex-col items-start'>
                    <h3 className='font-[700] text-[18px]'>PLACEMENT</h3>
                    <p className='font-[400] text-[18px]'>Strong industry connections and placement support.</p>
                </div>
            </div>

        </div>

        <div className='flex md:flex-row flex-col md:justify-center px-8'>
            
            <div className='flex md:w-1/2 p-4'>
                <img src="/img/aboutus/WhyChooseUs/mdi_college-outline.png" className='p-3 border-[2px] mr-[10px] border-[#012060] rounded-lg' alt="" />
                <div className='text flex flex-col items-start'>
                    <h3 className='font-[700] text-[18px]'>CURRICULUM</h3>
                    <p className='font-[400] text-[18px]'>Robust curriculum aligned with industry demands.</p>
                </div>
            </div>

            <div className='flex md:w-1/2 p-4'>
                <img src="/img/aboutus/WhyChooseUs/mdi_college-outline.png" className='p-3 border-[2px] mr-[10px] border-[#012060] rounded-lg' alt="" />
                <div className='text flex flex-col items-start'>
                    <h3 className='font-[700] text-[18px]'>EXPOSURE</h3>
                    <p className='font-[400] text-[18px]'>Global exposure through exchange programs and collaborations.</p>
                </div>
            </div>
        </div>

        <div className='flex md:w-1/2 px-12'>
                <img src="/img/aboutus/WhyChooseUs/ri_school-line.png" className='p-3 border-[2px] mr-[10px] border-[#012060] rounded-lg' alt="" />
                <div className='text flex flex-col items-start'>
                    <h3 className='font-[700] text-[18px]'>INFRASTRUCTURE & FACILITIES</h3>
                    <p className='font-[400] text-[18px]'>State-of-the-art infrastructure and facilities.</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
