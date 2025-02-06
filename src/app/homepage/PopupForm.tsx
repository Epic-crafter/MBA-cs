"use client";
import React, { useEffect, useState } from "react";
import { BiCross } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const PopupForm = () => {
  // State for form fields
  const [visible, setVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    course: "mba",
    queries: "",
  });

  useEffect(()=>{
    setInterval(()=>{
        setVisible(true)
    },5000)
  },[])

  // Handle input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://crm-server.collegesolution.in/api/leads/create-web",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Response:", result);
        // Optionally clear the form
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          course: "",
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

  if (!visible) {
    return null;
  }

  return (
    <div className="w-full h-full fixed top-0 left-0 z-[9999] bg-black/20 flex justify-center items-center">
      <form
        className="space-y-2 relative bg-white p-6 pt-8 lg:w-[30%] md:w-[70%] w-[100%] rounded-lg"
        onSubmit={handleSubmit}
      >
        <CgClose onClick={()=>setVisible(false)} className="absolute cursor-pointer top-4 font-bold text-xl  right-4" />
        <div className="relative ">
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
  );
};

export default PopupForm;
