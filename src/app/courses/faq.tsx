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
            {/* FAQ Accordion */}
            <div className="flex-1">
              <Accordion type="single" collapsible className="space-y-6">
                
                {/* FAQ Items */}
                {[
                  { id: "mba-vs-pgdm", question: "What is the difference between MBA and PGDM?", answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her." },
                  { id: "career-prospects", question: "What are the career prospects after completing these courses?", answer: "Content for third question goes here." },
                  { id: "scholarships", question: "Are scholarships available?", answer: "Content for fourth question goes here." }
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
                  End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
                </p>
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
