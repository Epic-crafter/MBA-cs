import Image from 'next/image'
import React from 'react'

const PastEvents = () => {
    const events = [{
        img: "/img/events/PastEvents/Frame 10520 (1).png",
        head: "EVENT NAME",
        description: "Event Description"
      },
    
      {
        img: "/img/events/PastEvents/Frame 10520 (1).png",
        head: "EVENT NAME",
        description: "Event Description"
      },
    
      {
        img: "/img/events/PastEvents/Frame 10520 (1).png",
        head: "EVENT NAME",
        description: "Event Description"
      },
      
      {
        img: "/img/events/PastEvents/Frame 10520 (1).png",
        head: "EVENT NAME",
        description: "Event Description"
      },
    
      {
        img: "/img/events/PastEvents/Frame 10520 (1).png",
        head: "EVENT NAME",
        description: "Event Description"
      },
    
      {
        img: "/img/events/PastEvents/Frame 10520 (1).png",
        head: "EVENT NAME",
        description: "Event Description"
      }]

  return (
    <div className='bg-[#E3E3E3] pb-9'>
            <h1 className='py-10 text-center text-[#012060] text-[45px] font-[700]'>PAST EVENTS</h1>
    <div className='grid md:grid-cols-3 grid-cols-1 justify-between px-16 gap-5 w-full text-center'>
      {events.map((event, i)=> (
        <div key={i} className='border-[2px] rounded-3xl border-[#012060] flex flex-col gap-3 bg-white'>
        <Image src={event.img}  width={300} height={200} className='w-full' alt='img' />
        <h2 className='text-[35px] font-[900] text-[border-[2px] rounded-md text-[#012060]'>{event.head}</h2>
        <p className='text-[#3D3D3D] text-[24px] font-[400]'>{event.description}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default PastEvents
