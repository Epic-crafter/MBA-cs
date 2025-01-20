"use client"
import { useState } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import Link from 'next/link';

type Program = 'MBA' | 'PGDM';

const programDetails: Record<Program, string[]> = {
  MBA: ['Marketing', 'Finance', 'HR', 'Operations', 'Materials and Plants', 'Equipment and Machinery'],
  PGDM: ['Business Analytics', 'International Business', 'Entrepreneurship', 'Supply Chain Management', 'Digital Marketing', 'Information Technology']
};

export default function ProgramsOffered() {
  const [activeProgram, setActiveProgram] = useState<Program>('MBA');

  return (
    <section className="bg-gray-100 py-12 sm:py-16 px-4 sm:px-6" aria-labelledby="programs-offered-heading">
      <div className="container mx-auto">
        <h2 id="programs-offered-heading" className="text-center text-3xl sm:text-4xl font-bold text-black mb-8 sm:mb-12">
          Programs Offered
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-start max-w-6xl mx-auto gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="flex gap-4 mb-6 sm:mb-10">
              {(['MBA', 'PGDM'] as const).map((program) => (
                <button
                  key={program}
                  onClick={() => setActiveProgram(program)}
                  className={`text-sm sm:text-lg font-medium px-4 sm:px-8 py-2 sm:py-3 rounded-md transition ${
                    activeProgram === program
                      ? 'bg-blue-900 text-white'
                      : 'border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'
                  }`}
                  aria-pressed={activeProgram === program}
                >
                  {program}
                </button>
              ))}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              {activeProgram} Program Overview
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Our {activeProgram} program is designed to equip you with the skills and knowledge needed to excel in today's dynamic business environment. With a focus on practical learning and industry-relevant coursework, you'll be prepared to take on leadership roles in various sectors.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
              The curriculum covers a wide range of business disciplines, allowing you to gain a comprehensive understanding of modern business practices while also specializing in your area of interest.
            </p>
            <Link href={`/programs/${activeProgram.toLowerCase()}`} className="inline-block bg-orange-500 text-white text-base sm:text-lg font-medium px-6 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-orange-600 transition">
              Learn More About {activeProgram}
            </Link>
          </div>

          <div className="w-full lg:w-1/3 bg-blue-900 text-white p-6 rounded-lg shadow-lg mt-8 lg:mt-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-6">{activeProgram} Specializations</h3>
            <ul className="space-y-0">
              {programDetails[activeProgram].map((specialization, index) => (
                <li key={index} className="flex items-center border-b border-white last:border-b-0 py-3 text-base sm:text-lg">
                  <FaRegCheckCircle className="text-white text-xl mr-3" aria-hidden="true" />
                  <span>{specialization}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

