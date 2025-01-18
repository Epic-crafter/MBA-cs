"use client";
import Image from "next/image";

export default function ProgramHighlights() {
  return (
    <section
      className="bg-white py-12"
      aria-labelledby="program-highlights-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="program-highlights-heading"
          className="text-3xl font-bold text-blue-900 mb-8 text-center"
        >
          PROGRAM HIGHLIGHTS
        </h2>
        <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-md">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <ul className="list-disc pl-6 text-gray-700 space-y-4">
              <li>
                <strong>Duration:</strong> 2 years full-time
              </li>
              <li>
                <strong>Eligibility:</strong> Graduation with a minimum of 50%
                and entrance exams like CAT, XAT, GMAT
              </li>
              <li>
                <strong>Learning Methodology:</strong> Experiential learning
                through simulations, live projects, and internships
              </li>
              <li>
                <strong>International Exposure:</strong> Opportunities for
                exchange programs or overseas internships
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-48 h-48 md:w-56 md:h-56 relative">
              <Image
                src="/courses/ph.png"
                alt="Program Highlights"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
