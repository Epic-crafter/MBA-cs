import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 px-4 sm:px-6" aria-labelledby="testimonial-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="testimonial-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          Graduate Admissions Testimonials
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8 md:w-2/3">
            <blockquote className="text-base sm:text-lg text-gray-800 italic mb-4 sm:mb-6">
              <p>
                "After completing twelve classes, making a few meaningful
                friendships, and spending two and a half years at Penn, I've come
                to realize that I've never properly expressed my gratitude for the
                transformative journey you've helped me embark on. I must also
                extend my heartfelt appreciation to you. Your introduction to the
                MCIT program was a pivotal moment that profoundly changed my life.
                The depth of knowledge I've gained has not only made me a better
                person but also shifted my perspectives in meaningful ways.
                Receiving my diploma yesterday was a significant milestone, and
                for that, I owe you immense gratitude. Thank you very much!"
              </p>
            </blockquote>
            <cite className="not-italic">
              <p className="font-bold text-gray-800">Alex M.</p>
              <p className="text-sm text-gray-600">
                Admitted to the MCIT program at the University of Pennsylvania's
                School of Engineering and Applied Science
              </p>
            </cite>

            <div className="mt-4 w-24 sm:w-32">
              <Image
                src="/homepage/penn.png"
                alt="Penn Engineering logo"
                width={128}
                height={64}
              />
            </div>
          </div>

          <div className="relative md:w-1/3 bg-gray-100 flex items-center justify-center p-6 sm:p-8">
            <div className="absolute w-36 h-36 sm:w-48 sm:h-48 bg-green-500 rounded-full -z-10" aria-hidden="true"></div>
            <div className="relative w-full max-w-xs">
              <Image
                src="/homepage/testominial.png"
                alt="Graduate student smiling"
                width={320}
                height={320}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-6" role="navigation" aria-label="Testimonial navigation">
          <button className="w-3 h-3 bg-green-500 rounded-full" aria-current="true" aria-label="Testimonial 1"></button>
          <button className="w-3 h-3 bg-gray-300 rounded-full" aria-label="Testimonial 2"></button>
          <button className="w-3 h-3 bg-gray-300 rounded-full" aria-label="Testimonial 3"></button>
          <button className="w-3 h-3 bg-gray-300 rounded-full" aria-label="Testimonial 4"></button>
        </div>
      </div>
    </section>
  );
}

