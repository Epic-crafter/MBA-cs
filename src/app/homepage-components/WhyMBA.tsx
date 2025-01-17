"use client"
import React, { useState } from "react";
import whyMbachart from "../../assets/whyMBAchart.png";
import Image from "next/image";
import { FaAngleDoubleRight, FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const WhyMBA = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    course: "mba",
    queries: "",
  });

  // Handle input changes
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e:any) => {
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
        // Optionally clear the form
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          course:"",
          city: "",
          queries: "",
        });
      } else {
        console.error("Error submitting form:", response.statusText);
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 justify-between">
        {/* Why MBA Section */}
        <div className="flex flex-col items-center ">
          <Image src={whyMbachart} alt="Why MBA" className=" lg:w-auto w-full" />
          <button
            className="flex items-center mt-6 px-6 py-3 text-white font-semibold rounded-lg shadow hover:bg-orange-600"
            style={{ backgroundColor: "#F6851E" }}
          >
            More Insights <FaAngleDoubleRight className="ml-2" />
          </button>
        </div>

        {/* Contact Form */}
        <div className="flex items-center justify-center lg:w-[70%] w-full text-sm">
          <div className="bg-white shadow-lg shadow-blue-300 rounded-lg w-full p-4">
            <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
              Get in Touch with us
            </h2>
            
            <form className="space-y-2" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  className="w-full pl-2 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaUser className="absolute right-3 top-3 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Id*"
                  className="w-full pl-2 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Mobile*"
                  className="w-full pl-2 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaPhoneAlt className="absolute right-3 top-3 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Location"
                  className="w-full pl-2 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaMapMarkerAlt className="absolute right-3 top-3 text-gray-400" />
              </div>
              <div className="relative">
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full pl-2 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="mba">MBA</option>
                  <option value="pcdm">PCDM</option>
                </select>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="queries"
                  value={formData.queries}
                  onChange={handleChange}
                  placeholder="Do you have any query?"
                  className="w-full pl-2 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white font-bold py-2 rounded-lg transition duration-300"
                style={{ backgroundColor: "#F6851E" }}
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
