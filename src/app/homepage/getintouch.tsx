'use client'

import React, { useState } from "react";
import Image from "next/image";
import { FaAngleDoubleRight, FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  city: string;
  course: string;
  queries: string;
}

const GetInTouch = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    course: "mba",
    queries: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://crm-server.collegesolution.in/api/leads/create-web", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Response:", result);
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          course: "mba",
          city: "",
          queries: "",
        });
        alert("Form submitted successfully!");
      } else {
        console.error("Error submitting form:", response.statusText);
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form. Please try again later.");
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16" aria-labelledby="get-in-touch-heading">
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 justify-between">
        <div className="flex flex-col items-center">
          <Image 
            src="/homepage/getintouch.png" 
            alt="Students discussing MBA opportunities" 
            width={500} 
            height={300} 
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain"
            }}
          />
        </div>

        <div className="flex items-center justify-center w-full">
          <div className="bg-white shadow-lg shadow-blue-300 rounded-lg w-full max-w-md p-6">
            <h2 id="get-in-touch-heading" className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
              Get in Touch with Us
            </h2>
            
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="relative">
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  className="w-full pl-3 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaUser className="absolute right-3 top-3 text-gray-400" aria-hidden="true" />
              </div>

              <div className="relative">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Id*"
                  className="w-full pl-3 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaEnvelope className="absolute right-3 top-3 text-gray-400" aria-hidden="true" />
              </div>

              <div className="relative">
                <label htmlFor="phoneNumber" className="sr-only">Mobile Number</label>
                <input
                  id="phoneNumber"
                  type="tel"
                  required
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Mobile*"
                  className="w-full pl-3 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaPhoneAlt className="absolute right-3 top-3 text-gray-400" aria-hidden="true" />
              </div>

              <div className="relative">
                <label htmlFor="city" className="sr-only">Location</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Location"
                  className="w-full pl-3 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaMapMarkerAlt className="absolute right-3 top-3 text-gray-400" aria-hidden="true" />
              </div>

              <div className="relative">
                <label htmlFor="course" className="sr-only">Course</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full pl-3 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  <option value="mba">MBA</option>
                  <option value="pgdm">PGDM</option>
                </select>
                <FaAngleDoubleRight className="absolute right-3 top-3 text-gray-400" aria-hidden="true" />
              </div>

              <div className="relative">
                <label htmlFor="queries" className="sr-only">Query</label>
                <textarea
                  id="queries"
                  name="queries"
                  value={formData.queries}
                  onChange={handleChange}
                  placeholder="Do you have any query?"
                  className="w-full pl-3 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows={3}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full text-white font-bold py-3 rounded-lg transition duration-300 bg-[#F6851E] hover:bg-[#E67E22] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
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

export default GetInTouch;

