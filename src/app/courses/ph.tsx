"use client";
import Image from "next/image";

export default function ProgramHighlights() {
  return (
    <section className="bg-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#00205B] mb-8">
          PROGRAM HIGHLIGHTS
        </h2>
        <div className="relative">
          <div className="max-w-[70%]">
            <ul className="space-y-6 text-lg text-[#4A4A4A]">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <div>
                  <span className="font-semibold text-[#333333]">Duration:</span> 2 years full-time
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <div>
                  <span className="font-semibold text-[#333333]">Eligibility:</span> Graduation with a minimum of 50% and entrance exams like CAT, XAT, GMAT
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <div>
                  <span className="font-semibold text-[#333333]">Learning Methodology:</span> Experiential learning through simulations, live projects, and internships
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <div>
                  <span className="font-semibold text-[#333333]">International Exposure:</span> Opportunities for exchange programs or overseas internships
                </div>
              </li>
            </ul>
          </div>
          <div className="absolute top-[-40px] right-0 w-64 h-64">
            <Image
              src="/courses/ph.png"
              alt="Students studying"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}