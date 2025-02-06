export default function ScholarshipSection() {
  return (
    <section className="relative min-h-[400px] bg-[#0A1B4D] overflow-hidden flex flex-col items-center text-center sm:text-left sm:items-start">
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-20">
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            APPLY FOR SCHOLARSHIPS & FINANCE AID
          </h2>
          <p className="text-gray-300 mb-8 text-sm sm:text-base">
            We offer merit-based scholarships, need-based aid, and special scholarships for women and reserved categories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 sm:justify-start w-full sm:w-auto">
            <button className="bg-[#F4833B] hover:bg-[#e67731] text-white font-medium px-6 sm:px-8 py-3 rounded-md transition-colors w-full sm:w-auto">
              APPLY NOW
            </button>
            <button className="bg-[#F4833B] hover:bg-[#e67731] text-white font-medium px-6 sm:px-8 py-3 rounded-md transition-colors w-full sm:w-auto">
              DOWNLOAD BROCHURE
            </button>
          </div>
        </div>
      </div>
      <div
        className="absolute top-0 right-0 sm:right-[72px] w-full sm:w-[33%] h-[250px] sm:h-full bg-cover bg-center hidden sm:block"
        style={{
          backgroundImage: `url('/admission/hero2.png')`,
          backgroundPosition: "center right",
        }}
      >
        {/* Left gradient overlay */}
        <div
          className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0A1B4D] to-transparent"
          aria-hidden="true"
        ></div>
        {/* Right gradient overlay */}
        <div
          className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0A1B4D] to-transparent"
          aria-hidden="true"
        ></div>
      </div>
    </section>
  );
}