import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-[#012060] relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <Image 
          src="/homepage/ld.png" 
          alt="Decorative background shape"
          className="absolute bottom-[-650px] left-[-50px] sm:left-[-100px] md:left-[-150px] lg:left-0 w-[400px] sm:w-[500px] lg:w-[600px]"
          width={600}
          height={632}
          priority
        />
        <Image 
          src="/homepage/rd.png" 
          alt="Decorative background shape"
          className="absolute top-0 right-[-50px] sm:right-[-100px] md:right-[-150px] lg:right-0 w-[400px] sm:w-[500px] lg:w-[600px]"
          width={600}
          height={600}
          priority
        />
      </div>

      <div className="container mx-auto px-6 py-16 sm:py-32 relative z-10">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8 lg:ml-[91px] sm:ml-0">
            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-lg">
              <p className="text-[#012060] font-extrabold text-l">
                MBA & PGDM admissions consulting
              </p>
            </div>

            <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Shaping Global Leaders of Tomorrow
            </h1>

            <p className="text-lg sm:text-xl text-gray-300">
              Craft competitive MBA and PGDM applications for top schools.
            </p>

            <Link href="/next-step" className="inline-block px-8 py-4  bg-orange-500 hover:bg-[#E76F51] transition-colors rounded-full text-white font-medium text-sm">
              Ready for the Next Step?
            </Link>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] top-[-28px] left-[-50px] lg:left-[85px] rounded-full overflow-hidden">
              <Image
                src="/homepage/ci.png"
                alt="Business professionals collaborating"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
