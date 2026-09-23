import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Package, ShieldCheck } from "lucide-react";

export default function Faq() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* FAQ Section */}
        <div className="lg:w-1/2">
          <div className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-2">
            Frequently Asked Question
          </div>
          <h2 className="text-3xl font-extrabold text-brand-accent mb-8">
            Got Questions? We Have Answers.
          </h2>
          
          <Accordion className="w-full">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6 mb-4 data-[state=open]:border-brand-primary data-[state=open]:shadow-sm">
              <AccordionTrigger className="text-left font-bold text-brand-accent hover:no-underline">
                Real-Time Cargo Tracking
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 leading-relaxed pt-2 pb-6">
                As a highly capable 3PL provider, we offer comprehensive tracking solutions. You receive real-time updates and complete visibility over your supply chain from origin to destination.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6 mb-4 data-[state=open]:border-brand-primary">
              <AccordionTrigger className="text-left font-bold text-brand-accent hover:no-underline">
                How can I partner with Quicka Nig Ltd?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 leading-relaxed pt-2 pb-6">
                Partnering with us is simple. Contact our dedicated sales team for an initial consultation, and we will design a logistics strategy perfectly tailored to your business needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6 mb-4 data-[state=open]:border-brand-primary">
              <AccordionTrigger className="text-left font-bold text-brand-accent hover:no-underline">
                How do you handle service concerns?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 leading-relaxed pt-2 pb-6">
                We prioritize customer satisfaction. Any concerns are addressed immediately by our 24/7 support team through our dedicated ticketing system, ensuring swift resolutions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6 mb-4 data-[state=open]:border-brand-primary">
              <AccordionTrigger className="text-left font-bold text-brand-accent hover:no-underline">
                Are you currently hiring?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 leading-relaxed pt-2 pb-6">
                We are always looking for driven professionals to join our growing logistics network. Check our careers page for the latest opportunities in operations and administration.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Why Choose Us */}
        <div className="lg:w-1/2">
          <div className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-2">
            Why Choose Us
          </div>
          <h2 className="text-3xl font-extrabold text-brand-accent mb-8">
            Why Choose Quicka Nig Ltd?
          </h2>
          
          <div className="flex flex-col gap-6 mt-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-start gap-4 transform transition-transform hover:-translate-y-1">
              <div className="p-3 bg-orange-50 rounded-lg text-brand-primary">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="font-extrabold text-xl text-brand-accent">Uncompromising Quality</h3>
              <p className="text-gray-500">
                Your cargo is handled by elite professionals. Our rigorously trained drivers and dispatch personnel work in perfect synergy to guarantee safe and immediate delivery.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-start gap-4 transform transition-transform hover:-translate-y-1">
              <div className="p-3 bg-orange-50 rounded-lg text-brand-primary">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-extrabold text-xl text-brand-accent">A Proven Track Record</h3>
              <p className="text-gray-500">
                We partner with industry-leading shipping lines and corporations worldwide, demonstrating unmatched reliability and deep expertise across all major trade lanes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
