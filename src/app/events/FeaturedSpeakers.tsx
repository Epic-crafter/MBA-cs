import Image from 'next/image'
import React from 'react'

const FeaturedSpeakers = () => {
  return (
    <div>
      <h1 className='mt-20 text-center text-[#012060] text-[45px] font-[700]'>FEATURED SPEAKERS</h1>
      <div className='flex md:flex-row justify-between flex-col my-16 w-full px-8 gap-3'>
        <Image width={100} height={500} src="/img/events/FeaturedSpeakers/Frame 10522.png" className='bg-contain w-full md:w-1/4' alt='img'/>
        <Image width={100} height={500} src="/img/events/FeaturedSpeakers/Frame 10526.png" className='bg-contain w-full md:w-1/4' alt='img'/>
        <Image width={100} height={500} src="/img/events/FeaturedSpeakers/Frame 10522.png" className='bg-contain w-full md:w-1/4' alt='img'/>
        <Image width={100} height={500} src="/img/events/FeaturedSpeakers/Frame 10526.png" className='bg-contain w-full md:w-1/4' alt='img'/>
      </div>
    </div>
  )
}

export default FeaturedSpeakers
