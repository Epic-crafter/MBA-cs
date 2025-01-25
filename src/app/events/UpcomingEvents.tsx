import Image from 'next/image'
import React from 'react'

const UpcomingEvents = () => {
  const events = [{
    img: "/img/events/UpcomingEvents/Frame 10520.png",
    head: "EVENT NAME",
    date: "10th December 2024",
    time: "10:00 AM -11:00 PM",
  },

  {
    img: "/img/events/UpcomingEvents/Frame 10520.png",
    head: "EVENT NAME",
    date: "10th December 2024",
    time: "10:00 AM -11:00 PM",
  },

  {
    img: "/img/events/UpcomingEvents/Frame 10520.png",
    head: "EVENT NAME",
    date: "10th December 2024",
    time: "10:00 AM -11:00 PM",
  },
]
  return (
    <div>
    <h1 className='mt-20 text-center text-[#012060] text-[45px] font-[700]'>UPCOMING EVENTS</h1>
    <div className="mt-10 w-full flex md:flex-row flex-col justify-between md:px-8 px-4 gap-3 text-center">
        {events.map((event, i)=> (
          <div key={i} className='border-[2px] rounded-md border-[#012060] flex flex-col gap-4'>
          <Image src={event.img} width={500} height={500} alt='img' className='p-5 w-full'/>
          <h2 className='text-[35px] font-[900] text-[border-[2px] rounded-md text-[#012060]'>{event.head}</h2>
          <div className="flex justify-center gap-4 text-center w-full">
          <Image alt='img' width={30} height={15} src="/img/events/UpcomingEvents/uis_calender.png"/>
          <p className='text-[#3D3D3D] text-[24px] font-[400]'>{event.date}</p>
          </div>

          <div className="flex justify-center gap-4 text-center w-full mb-4">
          <Image alt='img' width={30} height={10} src="/img/events/UpcomingEvents/mdi_clock.png"/>
          <p className='text-[#3D3D3D] text-[24px] font-[400]'>{event.time}</p>
          </div>
          <div className='flex justify-center mb-4'>
          <button className='bg-[#F6851E] rounded-[10px] text-[14px] font-[700] text-white w-1/2 py-2'>REGISTER NOW</button>
          </div>
          </div>
        ))}
    </div>
    </div>
  )
}

export default UpcomingEvents
