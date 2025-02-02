import React from 'react'

const WhyChooseUs = () => {
  return (
    <div>
      <h1 className='text-[#012060] text-center text-[30px] font-[700] p-6'>Why Choose Us</h1>
      <p className="text-[14px] text-[#444444] text-center font-[700] md:px-0 px-3">Founded in [Year], our institution has reached key milestones, gaining recognition as an AICTE-approved and AACSB-accredited leader in education. We focus on providing quality education, aligning with industry demands, and fostering leadership development.</p>
      <div className='text-[#012060] py-8 space-y-4'>

        <div className='flex justify-center px-4 md:px-8'>
                <img src="/img/aboutus/WhyChooseUs/eva_people-outline.png" className='p-3 border-[2px] mr-[10px] border-[#012060] rounded-lg w-[70px] h-[70px]' alt="" />
                <div className='text flex flex-col items-start'>
                    <h3 className='font-[700] text-[18px]'>FACULTY</h3>
                    <p className='font-[400] text-[18px]'>Our consultants are well-experienced with years of track record to their credit in the admissions process of MBA applicants. Our staff comprises alumni of some of the premier global and Indian B-schools who are well-versed in the admission process. They will help you get candid, opinionated insight into what it takes to make your application stand out.
                    </p>
                </div>
        </div>

            
            <div className='flex w-full px-4 md:px-8'>
                <img src="/img/aboutus/WhyChooseUs/mdi_college-outline.png" className='p-3 border-[2px] mr-[10px] border-[#012060] rounded-lg w-[70px] h-[70px]' alt="" />
                <div className='text flex flex-col items-start'>
                    <h3 className='font-[700] text-[18px]'>CURRICULUM</h3>
                    <p className='font-[400] text-[18px]'>We follow a rigorous, time-tested methodology to ensure that every step boosts your chance of entry. While we establish a coherent strategy that is tailor-made to your profile, with certain specifications required by the program being adhered to ensure you stick to our goals. This will include personalized services and modules that allow you to get deeper insights into the B-school landscape.</p>
                </div>
            </div>

            <div className='flex w-full px-4 md:px-8'>
                <img src="/img/aboutus/WhyChooseUs/mdi_college-outline.png" className='p-3 border-[2px] mr-[10px] border-[#012060] rounded-lg w-[70px] h-[70px]' alt="" />
                <div className='text flex flex-col items-start'>
                    <h3 className='font-[700] text-[18px]'>PLACEMENT EXPOSURE</h3>
                    <p className='font-[400] text-[18px]'>Not only do we assist you with the application, but we also provide exposure to the different industries, trends, and placement opportunities at top business schools. Our network with corporate professionals allows you to gain insight into what placement offers are available after you secure admission into your desired B-school.</p>
                </div>
            </div>

        <div className='flex w-full px-4 md:px-8'>
                <img src="/img/aboutus/WhyChooseUs/ri_school-line.png" className='p-3 border-[2px] mr-[10px] border-[#012060] rounded-lg w-[70px] h-[70px]' alt="" />
                <div className='text flex flex-col items-start'>
                    <h3 className='font-[700] text-[18px]'>INFRASTRUCTURE & FACILITIES</h3>
                    <p className='font-[400] text-[18px]'>Our consulting services will have a bold infrastructure. You will have various online resources that will include video consultations, workshops, and seminars. Those are directed toward your knowledge, skill, and constant awareness of the trends in admissions. Our solution leads you toward a comprehensive view of the entire journey from beginning to conclusion.</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
