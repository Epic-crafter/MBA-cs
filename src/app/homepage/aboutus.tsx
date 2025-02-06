import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white" aria-labelledby="about-us-heading">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="relative w-full h-64 sm:h-80 lg:h-[400px]">
            <Image
              src="/homepage/laptopimage.png"
              alt="Laptop displaying a video call with MBA consultants"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
          <h2 id="about-us-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            About Us
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
            <p>
              Earning your Master&apos;s in Business Administration is a crucial step towards achieving your long-term career goals. However, navigating the complexities of the MBA admissions process can be challenging.
            </p>
            <p>
              At Bschool4u, we specialize in guiding aspiring MBA candidates through every step of the application process. Our team of experienced consultants provides personalized strategies to help you stand out in a competitive applicant pool.
            </p>
            <p>
              From selecting the right programs to crafting compelling essays and preparing for interviews, we&apos;re here to maximize your chances of admission to top MBA programs worldwide.
            </p>
          </div>
          <Link href="/about" className="inline-block bg-orange-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-orange-600 transition-colors duration-300 font-semibold text-sm sm:text-base">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}

