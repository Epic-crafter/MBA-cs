import React from "react";
import whyMbachart from "../../assets/whyMBAchart.png"
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";

import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; 
const WhyMBA = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 justify-between">
        {/* Why MBA Section */}
        <div className="flex flex-col items-center ">
          <Image
            src={whyMbachart}
            alt="Why MBA"
            className=" lg:w-auto w-full"
          />
          <button className="flex items-center mt-6 px-6 py-3 text-white font-semibold rounded-lg shadow hover:bg-orange-600" style={{backgroundColor:"#F6851E"}}>
            More Insights <FaAngleDoubleRight className='ml-2' />
          </button>
        </div>

        {/* Contact Form */}
        <div className="  flex items-center justify-center lg:w-[70%] w-full text-sm">
      {/* Container */}
      <div className="bg-white shadow-lg shadow-blue-300 rounded-lg w-full  p-4">
        {/* Heading */}
        <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
          Get in Touch with us
        </h2>

        {/* Form */}
        <form  className="space-y-2 ">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Name"
          
              className="w-full pl-2 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaUser className="absolute right-3 top-3 text-gray-400" />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email Id"
           
              className="w-full pl-2 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
          </div>

          {/* Mobile */}
          <div className="relative">
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile"

              className="w-full pl-2 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaPhoneAlt className="absolute right-3 top-3 text-gray-400" />
          </div>

          {/* Location */}
          <div className="relative">
            <input
              type="text"
              name="location"
              placeholder="Location"
           
              className="w-full pl-2 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaMapMarkerAlt className="absolute right-3 top-3 text-gray-400" />
          </div>

          {/* Description */}
          <div className="relative">
            <input
              type="text"
              name="description"
              placeholder="What best describes you?"
             
              className="w-full pl-2 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
           
          </div>

          {/* Interest */}
          <div className="relative">
            <input
              type="text"
              name="interest"
              placeholder="What is your area of interest?"
              
              className="w-full pl-2 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start text-xs">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 h-4 w-4 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="terms"
              className="ml-2 text-gray-600  "
            >
              I read the Terms and Conditions and accept the Privacy Policy and
              authorize IFHE to contact me with updates via email, SMS, and
              phone.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-white font-bold py-2 rounded-lg transition duration-300" style={{backgroundColor:"#F6851E"}}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
      </div>
    </section>
  );
};

export default WhyMBA;
