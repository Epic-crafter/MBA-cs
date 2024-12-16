// components/HeroSection.js
import Image from 'next/image';
import { FaAngleDoubleRight } from 'react-icons/fa';
import group from "../../assets/grp-pic.jpg"
import { RiDownloadCloud2Line } from 'react-icons/ri';
import youTube from "../../assets/yt-gray.png"
import naac from "../../assets/naac.png"
import ugc from "../../assets/ugc.png"
import aicte from "../../assets/aicte.png"
export default function HeroSection() {
  return (
    <section className="bg-gray-200 py-12 w-full ">

      <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:items-start items-center  gap-2 ">
        <div className='lg:w-1/3 w-full  text-center flex justify-center'>
          <Image src={group} alt='' className=' rounded-full' />
        </div>
        <div className="lg:w-2/3 w-full text-left space-y-4">
          <h2 className="text-3xl font-bold text-blue-950">Thinking of an Online MBA or PGDM?</h2>
          <h2 className="text-3xl font-bold mb-4 text-blue-950">Here&apos;s Why You Should Reach Us</h2>

          <p className="mb-4 text-lg border-l-2 border-orange-500 pl-2">2 year fully online program<br />Master of Business Administration</p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <button className="flex items-center text-sm border border-gray-600 bg-white text-gray-500 px-3 py-1 rounded-lg shadow hover:bg-gray-100">
              <RiDownloadCloud2Line className='mr-2' /> Download Prospectus
            </button>
            <button className="flex text-sm items-center text-white px-3 py-1 rounded-lg shadow hover:bg-orange-700" style={{backgroundColor:"#F6851E"}}>
              Apply Now <FaAngleDoubleRight className='ml-2' />
            </button>
            <button className=''>
              <Image src={youTube} alt="w-full" />
            </button>
          </div>
          <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
            <div className='flex-1 flex shadow-lg px-3 py-4 bg-white items-center gap-3 rounded-lg shadow-gray-400'>
              <div><Image src={naac} alt='' className='h-16 w-16' /></div>
              <div className='text-sm'>
                <p>NAAC</p>
                <p>Accredited A++</p>
              </div>
            </div>
            <div className='flex-1 flex shadow-lg px-3 py-4 bg-white items-center gap-3 rounded-lg shadow-gray-400'>
              <div><Image src={ugc} alt='' className='h-16 w-16' /></div>
              <div className='text-sm'>
                <p>UGC</p>
                <p>Entitled</p>
              </div>
            </div>
            <div className='flex-1 flex shadow-lg px-3 py-4 bg-white items-center gap-3 rounded-lg shadow-gray-400'>
              <div><Image src={aicte} alt='' className='h-16 w-16' /></div>
              <div className='text-sm'>
                <p>AICTE</p>
                <p>Approved</p>
              </div>
            </div>
          </div>
          <div className='text-gray-600 '>
            <p className='text-lg'><span className='text-orange-500 font-semibold'>Best University</span> among India&apos;s top 25 Online MBA Institutions</p>
          </div>
        </div>
      </div>
    </section>
  );
}