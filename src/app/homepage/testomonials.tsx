"use client"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    quote:
      "Thanks to BeSchool4U, I made it to IIM Ahmedabad! The team helped in choosing the right schools and was a great support throughout the essay-writing and the interview prep. Their expertise was the icing on the cake!",
    author: "John Doe",
    role: "IIM Ahmedabad",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 2,
    quote: "I was stuck in a tussle between schools; but fortunately, with the personalized counseling, I made an informed choice and got into SPJIMR. The attention to detail was amazing!",
    author: "Jane Smith",
    role: "SPJIMR",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 3,
    quote: "The whole process of MBA applications can be intimidating; however, [Your Firm Name] assured me through it all. Their essay editing and interview prep were perfect. I highly recommended their services.",
    author: "Michael Johnson",
    role: "ISB",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 4,
    quote: "I had a wonderful experience working with [Your Firm Name]. The whole point was that they helped me with my story and their coaching took away the stress of the interview. And now, I am a proud XLRI student!",
    author: "Emma Davis",
    role: "XLRI",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 5,
    quote: "The consultants were knowledgeable; they were always on call to answer any of my questions. Because of them, I got into Harvard Business School, my dream school!",
    author: "William Brown",
    role: "Harvard Business School",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 6,
    quote: "I never thought I had a chance to get into any upper-tier schools. [Your Firm Name] guided me in strengthening my application to enter INSEAD.",
    author: "Sophia Wilson",
    role: "INSEAD",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 7,
    quote: "I had absolutely no idea how to even proceed with my MBA-specific application, but the team listed everything step by step for me. The insights were extremely helpful, and now I am a student at MIT Sloan!",
    author: "James Taylor",
    role: "MIT Sloan",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 8,
    quote: "I would never have been able to traverse my admissions process without [Your Firm Name]'s guidance. They were highly expert and dedicated in their advice. And I am now going to Wharton!",
    author: "Olivia Harris",
    role: "Wharton School of Business",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 9,
    quote: "The personalized attention certainly made things easier. I am sincerely grateful to them to help me make it to IIM Bangalore.",
    author: "Benjamin Clark",
    role: "IIM Bangalore",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 10,
    quote: "The support I received throughout my application journey from the team was amazing: from school selection to essay editing. I am now at London Business School!",
    author: "Amelia Lewis",
    role: "London Business School",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    logo: "/homepage/penn.png",
  },
  {
    id: 11,
    quote: "I cannot thank [Your Firm Name] enough for their unwavering support. They provided ample insight into my profile and great advice on the way forward. As a result, I did get into one of the best business schools in the world!",
    author: "David Walker",
    role: "Stanford Graduate School of Business",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    logo: "/homepage/penn.png",
  },
]

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="bg-gray-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="testimonial-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="testimonial-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          Graduate Admissions Testimonials
        </h2>

        <Carousel className="w-[90%]">
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
