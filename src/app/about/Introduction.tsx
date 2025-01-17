import React from 'react'

const introduction = () => {
  return (
    <div className='flex md:flex-row flex-col justify-between p-8 '>
      <div className="section-1 flex flex-col items-start w-full gap-6">
        <h2 className='text-[30px] text-[#012060] font-[700]'>INTRODUCTION</h2>
        <p className="text-[14px] text-[#444444] font-[700]">Founded in [Year], our institution has reached key milestones, gaining recognition <br /> as an AICTE-approved and AACSB-accredited leader in education. We focus on <br /> providing quality education, aligning with industry demands, and fostering <br /> leadership development.</p>

        <div className="items grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="container-1 border-[1px] rounded-lg flex flex-row justify-between p-6 gap-1">
                <img src="/img/aboutus/naac-logo.jpg.png" alt="" />
                <div className='text-container flex flex-col gap-1'>
                    <h3>NAAC</h3>
                    <h3>Accredited&nbsp;A++</h3>
                </div>
            </div>

            <div className="container-2 border-[1px] rounded-lg flex flex-row justify-between p-6 gap-1">
                <img src="/img/aboutus/aicte-icon.jpg.png" alt="" />
                <div className='text-container flex flex-col gap-1'>
                    <h3>AICTE</h3>
                    <h3>Approved</h3>
                </div>
            </div>


            <div className="container-2 border-[1px] rounded-lg flex flex-row justify-between p-6 gap-1">
                <img src="/img/aboutus/ugc-icon.jpg.png" alt="" />
                <div className='text-container flex flex-col gap-1'>
                    <h3>UGC</h3>
                    <h3>Entitled</h3>
                </div>
            </div>
            <button className='bg-[#F6851E] rounded-[10px] text-[14px] font-[700] text-white px-5 py-2'>Know more</button>
        </div>
      </div>

      <div className="section-2 flex justify-center items-center pr-10 md:w-1/2 w-full">
        <img src="/img/aboutus/Frame 1.png" alt="" />
      </div>
    </div>
  )
}

export default introduction
