"use client"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    quote:
      "After completing twelve classes, making a few meaningful friendships, and spending two and a half years at Penn, I've come to realize that I've never properly expressed my gratitude for the transformative journey you've helped me embark on. I must also extend my heartfelt appreciation to you. Your introduction to the MCIT program was a pivotal moment that profoundly changed my life. The depth of knowledge I've gained has not only made me a better person but also shifted my perspectives in meaningful ways. Receiving my diploma yesterday was a significant milestone, and for that, I owe you immense gratitude. Thank you very much!",
    author: "Alex M.",
    role: "Admitted to the MCIT program at the University of Pennsylvania's School of Engineering and Applied Science",
    image: "/homepage/testominial.png",
    logo: "/homepage/penn.png",
  },
  {
    id: 2,
    quote: "This is another testimonial text. It highlights the amazing experience of another student.",
    author: "Jane Doe",
    role: "Admitted to the MBA program at Harvard University",
    image: "/homepage/testominial2.png",
    logo: "/homepage/harvard.png",
  },
  // Add more testimonials as needed
]

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="bg-gray-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="testimonial-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="testimonial-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          Graduate Admissions Testimonials
        </h2>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id}>
                <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6 sm:p-8 md:w-2/3">
                    <blockquote className="text-sm sm:text-base md:text-lg text-gray-800 italic mb-4 sm:mb-6">
                      <p className="line-clamp-6 md:line-clamp-none">{testimonial.quote}</p>
                    </blockquote>
                    <cite className="not-italic">
                      <p className="font-bold text-gray-800">{testimonial.author}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                    </cite>

                    <div className="mt-4 w-24 sm:w-32">
                      <Image
                        src={testimonial.logo || "/placeholder.svg"}
                        alt="University logo"
                        width={128}
                        height={64}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="relative md:w-1/3 bg-gray-100 flex items-center justify-center p-6 sm:p-8">
                    <div
                      className="absolute w-36 h-36 sm:w-48 sm:h-48 bg-green-500 rounded-full -z-10"
                      aria-hidden="true"
                    ></div>
                    <div className="relative w-full max-w-xs">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt="Graduate student smiling"
                        width={320}
                        height={320}
                        className="w-full h-auto"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
          </div>
        </Carousel>

        {/* Dot indicators for mobile */}
        <div className="flex justify-center mt-4 sm:hidden">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${currentSlide === index ? "bg-green-500" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

