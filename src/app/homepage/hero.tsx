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
          className="absolute bottom-0 left-0 w-[600px] bottom-[-632px]"
          width={600}
          height={632}
          priority
        />
        <Image 
          src="/homepage/rd.png" 
          alt="Decorative background shape"
          className="absolute top-0 right-0 w-[600px]"
          width={600}
          height={600}
          priority
        />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-lg">
              <p className="text-[#012060] font-medium text-sm">
                MBA & PGDM admissions consulting
              </p>
            </div>

            <h1 id="hero-heading" className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Shaping Global Leaders of Tomorrow
            </h1>

            <p className="text-lg text-gray-300">
              Craft competitive MBA and PGDM applications for top schools.
            </p>

            <Link href="/next-step" className="inline-block px-8 py-4 bg-[#F4A261] hover:bg-[#E76F51] transition-colors rounded-lg text-white font-medium text-sm">
              Ready for the Next Step?
            </Link>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden">
              <Image
                src="/homepage/ci.png"
                alt="Business professionals collaborating"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                priority
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute -top-2 -right-2 -bottom-2 -left-2 border-2 border-white/10 rounded-full"></div>
              <div className="absolute -top-4 -right-4 -bottom-4 -left-4 border-2 border-white/5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

