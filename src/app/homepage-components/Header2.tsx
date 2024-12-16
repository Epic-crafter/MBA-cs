import Image from 'next/image'
import React from 'react'
import media from "../../assets/media-icon.png"
import webinar from "../../assets/webinar.png"
const Header2 = () => {
    return (
        <div className=" hidden lg:flex justify-center mx-auto bg-blue-950 text-gray-400 p-1 mx-auto border-t-4 " style={{borderColor:"#F6851E"}}>


            <ul className="container flex space-x-6  items-center justify-center mx-auto">
                <li>The Center for Distance and Online Education (CDOE)</li>
                <li><Image src={media} alt='' /></li>

                <li><Image src={webinar} alt='' /></li>
                
                <li className='border-r-2 pr-3 border-gray-400'>Webinar</li>
                <li className='border-r-2 pr-3 border-gray-400'>News</li>
                <li><button className='text-white rounded-sm p-2' style={{backgroundColor:"#F6851E"}}>Online MBA</button></li>

            </ul>

        </div>
    )
}

export default Header2