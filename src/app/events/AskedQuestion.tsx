"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const AskedQuestion = () => {
  const [accordionOpen, setAccordionOpen] = useState(Array(4).fill(false)); // Create an array for individual accordion states

  const toggleAccordion = (index: number) => {
    setAccordionOpen((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : false)) // Toggle clicked accordion and close others
    );
  };

  const questions = [
    { id: 0, question: "How do I register for an event?", answer: "Visit the event listing and click 'Register Now'." },
    { id: 1, question: "Are events free or paid?", answer: "Some events are free, while others may require payment. Check the details on the event page." },
    { id: 2, question: "Can I access recordings of past webinars?", answer: "Yes, recordings are available for registered participants." },
    { id: 3, question: "What is the refund policy for paid events?", answer: "Refunds depend on the event organizer's policy. Please check the event details." },
  ];

  return (
    <div className="bg-[#E9E9E9] py-12">
      <h1 className='mb-6 text-center text-[#012060] text-[45px] font-[700]'>FREQUENTLY ASKED QUESTIONS</h1>
      <div className="flex md:flex-row flex-col w-full">
        <div className="section-1 md:w-2/3 flex flex-col gap-5 w-full my-10 px-5">
          {questions.map((item, index) => (
            <div key={item.id} className='border-[#012060] border-[2px] rounded-lg'>
              <button onClick={() => toggleAccordion(index)} className='flex justify-between bg-white px-4 rounded-md py-4 w-full'>
                <span className='text-[22px] font-[800] text-black'>{item.question}</span>
                {accordionOpen[index] ? (
                  <span className='text-[22px] font-[800] text-black'>-</span>
                ) : (
                  <span className="text-[22px] font-[800] text-black">+</span>
                )}
              </button>
              <div className={`grid overflow-hidden transition-all duration-300 ease-in-out bg-white text-start px-6 ${
                accordionOpen[index] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}>
                <div className='overflow-hidden py-2 bg-white'>{item.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-2 bg-white md:w-1/3 w-full border-[2px] border-[#012060] rounded-lg p-6 flex flex-col justify-between items-center gap-6">
          <Image width={100} height={100} src="/img/events/AskedQuestions/Vector 355.png" alt='img' />
          <h3 className="text-[22px] text-[#012060] font-[800] text-center px-3">Do you have more questions?</h3>
          <p className='text-[16px] font-[600] text-black text-center'>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
          <button className='bg-[#F6851E] rounded-[10px] mt-16 text-[14px] font-[700] text-white w-1/2 py-5'>REGISTER NOW</button>
        </div>
      </div>
    </div>
  );
};

export default AskedQuestion;
