import Image from 'next/image'
import React from 'react'

const TalkWithUs = () => {
  return (
    <div className='bg-white p-8 flex flex-col md:flex-row'>
      <div className="section-1 px-10 w-full md:w-1/2 flex flex-col items-center mb-8 md:mb-0">
      <h1 className='text-center text-[#012060] text-[30px] font-[700] mb-5'>Let&apos;s talk with us</h1>
        <p className='text-[#011334] text-[18px] font-[400] mb-5 max-w-sm'>Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.</p>
        <div className='md:text-[20px] text-[17px] font-[700] flex flex-col gap-2'>
          <div className='flex flex-row'>
          <Image src='/img/contact/icons/Group 3893.png' alt='img' width={100} height={100} className='w-8 h-8 px-1' />
          <p className=''>1055 Arthur ave Elk Groot, 67. <br />
          New Palmas South Carolina.</p>
          </div>
          <p className='inline-flex text-nowrap'><Image src='/img/contact/icons/noun_Phone_3612570 1.png' alt='img' width={100} height={100} className='w-auto h-auto px-1' />+1 234 678 9108 99</p>
          <p className='inline-flex text-nowrap'><Image src='/img/contact/icons/Group.png' alt='img' width={100} height={100} className='w-auto h-auto px-1' />Contact@moralizer.com</p>
        </div>
      </div>

      <div className="section-2 shadow-[-10px_10px] shadow-[#012060] rounded-[10px]">
        <form action="" className='p-6 border-[2px] border-[#012060] flex flex-col gap-3'>
          <div className='flex flex-col md:flex-row gap-2'>
            <input name='first_name' type="text" className='px-5 py-2 md:w-1/2 w-full placeholder-[#828282] focus:outline-[#B356C1] border-[#828282] border-[2px] rounded-[10px]' placeholder='First Name*' />
            <input name='last_name' type="text" className='px-5 py-2 md:w-1/2 w-full placeholder-[#828282] focus:outline-[#B356C1] border-[#828282] border-[2px] rounded-[10px]' placeholder='Last Name*' />
          </div>

          <input type="mail" name='email' className='px-5 py-2 w-full placeholder-[#828282] focus:outline-[#B356C1] border-[#828282] border-[2px] rounded-[10px]' placeholder='Email*' />

          <input type="number" name='phone_number' className='px-5 py-2 w-full placeholder-[#828282] focus:outline-[#B356C1] border-[#828282] border-[2px] rounded-[10px]' placeholder='Phone Number*' />

          <textarea name="message" rows={5} id="message" className='px-5 py-2 w-full placeholder-[#828282] focus:outline-[#B356C1] border-[#828282] border-[2px] rounded-[10px]' placeholder='Your message...' ></textarea>
          <button className='w-full bg-[#F6851E] rounded-[10px] text-[20px] font-[600] text-white px-6 py-3'>Send Message</button>
          </form>
      </div>
    </div>
  )
}

export default TalkWithUs
