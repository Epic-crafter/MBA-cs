"use client"
import { useMediaQuery } from "react-responsive"

export default function AdmissionProcess() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

  return (
    <div className={`relative w-full max-w-6xl mx-auto px-4 py-12 font-[Inter] ${isMobile ? "h-auto" : "h-[1950px]"}`}>
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-[#1a237e] text-2xl md:text-3xl font-bold mb-4">WELCOME TO THE ADMISSION PROCESS</h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-sm md:text-base">
          Discover the steps to join our programs. From eligibility to final enrollment, we guide you at every stage.
          Scholarships and fast-track options are available for qualified candidates.
        </p>
      </div>

      {/* Road Map Container */}
      <div className={`relative w-[95%] mx-auto ${isMobile ? "h-auto" : "h-[2200px]"}`}>
        {/* Road path images - only visible on desktop */}
        {!isMobile && (
          <>
            <div className="absolute top-[118px] left-[-75px] w-[90%] h-[1000px]">
              <img src="/admission/roadpath.png" alt="Road Path" className="w-full h-full object-contain rotate-180" />
            </div>
            <div className="absolute top-[813px] left-[-7%] w-[90%] h-[1000px]">
              <img src="/admission/roadpath2.png" alt="Road Path" className="w-full h-full object-contain" />
            </div>
          </>
        )}

        {/* Steps */}
        <div className={`${isMobile ? "flex flex-col gap-8" : ""}`}>
          {/* Step 1 */}
          <div
            className={`${isMobile ? "" : "absolute top-0 right-[8%]"} w-full md:w-[400px] bg-white rounded-lg border-[1px] border-[#012060] p-5 z-10 shadow-[7px_6px_#AA81D2]`}
          >
            <h2 className="font-bold mb-2 text-center">STEP 1: CHECK ELIGIBILITY</h2>
            <p className="text-sm mb-2">Ensure you meet the following criteria:</p>
            <ul className="text-sm list-disc pl-4 mb-2">
              <li>Bachelor&apos;s degree with a minimum of 50% (45% for reserved categories).</li>
              <li>Accepted exams: CAT, XAT, GMAT, MAT, CMAT.</li>
              <li>Work experience (if required).</li>
            </ul>
            <button className="bg-[#f4a261] text-white px-4 py-2 rounded text-sm">CHECK ELIGIBILITY</button>
          </div>

          {/* Step 2 */}
          <div
            className={`${isMobile ? "" : "absolute top-[12%] left-[-100px]"} w-full md:w-[280px] bg-white rounded-lg border-[1px] border-[#012060] p-5 z-10 shadow-[-6px_6px_#F5989B]`}
          >
            <h2 className="font-bold mb-2 text-center">STEP 2: SUBMIT YOUR APPLICATION</h2>
            <p className="text-sm mb-2">Apply online with these documents:</p>
            <ul className="text-sm list-disc pl-4 mb-2">
              <li>Academic transcripts.</li>
              <li>Entrance exam scorecard.</li>
              <li>ID proof (e.g., Aadhar passport).</li>
              <li>Passport-sized photo.</li>
            </ul>
            <button className="bg-[#f4a261] text-white px-4 py-2 rounded text-sm">START APPLYING</button>
          </div>

          {/* Step 3 */}
          <div
            className={`${isMobile ? "" : "absolute top-[26%] right-[12%]"} w-full md:w-[340px] bg-white rounded-lg border-[1px] border-[#012060] p-5 z-10 shadow-[7px_6px_#EBE847]`}
          >
            <h2 className="font-bold mb-2 text-center">STEP 3: SHORTLISTING BASED ON ENTRANCE EXAM SCORES</h2>
            <p className="text-sm text-center">Shortlisted candidates will be notified via email or portal updates.</p>
          </div>

          {/* Step 4 */}
          <div
            className={`${isMobile ? "" : "absolute top-[35%] left-[2%]"} w-full md:w-[339px] bg-white rounded-lg border-[1px] border-[#012060] p-5 z-10 shadow-[-6px_6px_#BBD5FF]`}
          >
            <h2 className="font-[900] mb-2 text-center">STEP 4: PERSONAL INTERVIEW (PI) AND GROUP DISCUSSION (GD)</h2>
            <p className="text-center text-sm">
              Participate in evaluations covering communication, problem-solving, and leadership potential. GD topics
              will be shared in advance.
            </p>
          </div>

          {/* Step 5 */}
          <div
            className={`${isMobile ? "" : "absolute top-[53%] left-[-2%]"} w-full md:w-[368px] bg-white rounded-lg border-[1px] border-[#012060] p-5 z-10 shadow-[-6px_6px_#AA81D2]`}
          >
            <h2 className="font-bold mb-2 text-center">STEP 5: FINAL SELECTION</h2>
            <p className="text-sm text-center">
              Final selection is based on entrance scores, academic record, and performance in PI/GD. Selected
              candidates receive a provisional admission letter.
            </p>
          </div>

          {/* Step 6 */}
          <div
            className={`${isMobile ? "" : "absolute bottom-[25%] right-[11%]"} w-full md:w-[340px] bg-white rounded-lg border-[1px] border-[#012060] p-5 z-10 shadow-[7px_6px_#F5989B]`}
          >
            <h2 className="font-bold mb-2 text-center">STEP 6: COMPLETE ADMISSION FORMALITIES</h2>
            <p className="text-sm mb-2">Confirm your admission by:</p>
            <ul className="text-sm list-disc pl-4">
              <li>Paying admission fees.</li>
              <li>Submitting original documents for verification.</li>
              <li>Signing declaration forms.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

