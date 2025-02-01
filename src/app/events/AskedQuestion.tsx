"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";
import Head from "next/head";

export default function FAQSection() {
  return (
    <>
      <Head>
        <title>FAQs</title>
      </Head>

      <section className="w-full bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[#0A2472] text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <Accordion type="single" collapsible className="space-y-6">
                
                {[
                  { id: "can i regsiter", question: "Where can I register for these events?", answer: "Usually, registration information for events can be communicated to the student community by email, the official website, or by organizations involved in such activities. Make sure to check these sources for the latest information on upcoming events." },
                  { id: "career development", question: "Are the career development webinars free?", answer: "Most webinars related to career development are offered at no additional cost, especially since most have the institution as their host. However, certain specialized workshops or certification courses may have a fee. Be sure to check the event details regarding the costs." },
                  { id: "can i visit", question: "Can I visit a number of programs during one Integrated Program Cycle?", answer: "While large numbers of events are staggered, it is best to check the event calendar to see if there are any overlaps in registering for events." },
                  { id: "recieve a certificate", question: "Will I receive a certificate for attending a guest lecture or webinar?", answer: "Normally, guest lectures and webinars do not promote certificate programs. However, several workshops and career development objectives do offer a certificate of accomplishment upon completion. Check the event description for more details." },
                  { id: "part in cultural", question: "Can I take part in cultural events even when I am not a club member?", answer: "Sure! Cultural events are available to all students, and many actively encourage participation from persons who are outside of particular clubs or teams. This is a great chance to showcase your talent and get involved in campus life." },
                  { id: "become a great speaker", question: "How can I become a guest speaker or guest lecturer?", answer: "If you actually are an expert in your field or have an intriguing tale to tell, feel free to get an audience with the event organizing team/your faculty members. Many institutions look out for guest speakers, and they are often open to student nominations as well." },
                ].map(({ id, question, answer }) => (
                  <AccordionItem 
                    key={id} 
                    value={id} 
                    className="border-2 border-[#012060] shadow-[6px_6px_0px_#012060] rounded-lg"
                  >
                    <AccordionTrigger className="bg-white px-6 py-4 text-left hover:no-underline [&[data-state=open]]:rounded-b-none">
                      <span className="text-xl font-bold">{question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-6 py-4 rounded-b-lg mt-[1px]">
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}

              </Accordion>
            </div>

            {/* Contact Section */}
            <aside className="lg:w-[400px]">
              <div className="bg-white p-8 rounded-lg text-center border-2 border-[#012060]">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#0A2472] p-4 rounded-lg">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="text-[#0A2472] text-2xl font-bold mb-4">
                  Do you have more questions?
                </h2>
                <p className="text-gray-600 mb-8">
                End-to-end payments and financial management in a single solution. Meet the right platform to help realize.                </p>
                <button 
                  className="w-full bg-[#E98A15] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#d17913] transition-colors"
                >
                  Shoot a Direct Mail
                </button>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
