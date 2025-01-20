"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MessageSquare } from 'lucide-react'
import Head from 'next/head'

export default function FAQSection() {
  // FAQ Schema for structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between MBA and PGDM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her."
        }
      },
      {
        "@type": "Question",
        "name": "What are the career prospects after completing these courses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Content for third question goes here."
        }
      },
      {
        "@type": "Question",
        "name": "Are scholarships available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Content for fourth question goes here."
        }
      }
    ]
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      
      <section 
        className="w-full bg-gray-100 p-8"
        aria-label="Frequently Asked Questions"
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[#0A2472] text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* FAQ Accordion */}
            <div className="flex-1">
              <Accordion 
                type="single" 
                collapsible 
                className="space-y-4"
                aria-label="FAQ Accordion"
              >
                <AccordionItem value="mba-vs-pgdm" className="border-none">
                  <AccordionTrigger 
                    className="bg-white rounded-lg px-6 py-4 text-left hover:no-underline [&[data-state=open]]:rounded-b-none"
                    aria-controls="answer-mba-vs-pgdm"
                  >
                    <span className="text-xl font-bold">What is the difference between MBA and PGDM?</span>
                  </AccordionTrigger>
                  <AccordionContent 
                    className="bg-white px-6 py-4 rounded-b-lg mt-[1px]"
                    id="answer-mba-vs-pgdm"
                  >
                    Offending belonging promotion provision an be oh consulted ourselves it. Blessing
                    welcomed ladyship she met humoured sir breeding her.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="career-prospects" className="border-none">
                  <AccordionTrigger 
                    className="bg-white rounded-lg px-6 py-4 text-left hover:no-underline [&[data-state=open]]:rounded-b-none"
                    aria-controls="answer-career-prospects"
                  >
                    <span className="text-xl font-bold">What are the career prospects after completing these courses?</span>
                  </AccordionTrigger>
                  <AccordionContent 
                    className="bg-white px-6 py-4 rounded-b-lg mt-[1px]"
                    id="answer-career-prospects"
                  >
                    Content for third question goes here.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="scholarships" className="border-none">
                  <AccordionTrigger 
                    className="bg-white rounded-lg px-6 py-4 text-left hover:no-underline [&[data-state=open]]:rounded-b-none"
                    aria-controls="answer-scholarships"
                  >
                    <span className="text-xl font-bold">Are scholarships available?</span>
                  </AccordionTrigger>
                  <AccordionContent 
                    className="bg-white px-6 py-4 rounded-b-lg mt-[1px]"
                    id="answer-scholarships"
                  >
                    Content for fourth question goes here.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Contact Section */}
            <aside className="lg:w-[400px]">
              <div className="bg-white p-8 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#0A2472] p-4 rounded-lg">
                    <MessageSquare className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                <h2 className="text-[#0A2472] text-2xl font-bold mb-4">
                  Do you have more questions?
                </h2>
                <p className="text-gray-600 mb-8">
                  End-to-end payments and financial management in a single solution. Meet the
                  right platform to help realize.
                </p>
                <button 
                  className="w-full bg-[#E98A15] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#d17913] transition-colors"
                  aria-label="Send us an email"
                >
                  Shoot a Direct Mail
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}