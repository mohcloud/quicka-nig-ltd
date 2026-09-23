import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Bonded Terminal",
    description: "Providing secure, state-of-the-art terminal facilities to ensure your cargo is safely stored and processed seamlessly.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop",
    num: "1",
  },
  {
    title: "Customs Brokerage",
    description: "Navigating complex regulatory frameworks to expedite your shipments through customs without unnecessary delays.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
    num: "2",
  },
  {
    title: "Road Haulage",
    description: "Offering comprehensive intermodal transportation services capable of moving freight of all sizes across vast distances.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
    num: "3",
  }
];

export default function Services() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Side: Title */}
        <div className="lg:w-1/3 flex flex-col items-start justify-center">
          <div className="flex items-center gap-2 text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">
            <div className="w-10 h-0.5 bg-brand-accent"></div>
            What We Do
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-primary leading-tight mb-8 text-balance">
            Built on Integrity, Driven by Efficiency, Delivered with Promptness.
          </h2>
          <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-md px-8 py-6 font-semibold">
            More on ideas
          </Button>
        </div>

        {/* Right Side: Cards */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} className="overflow-hidden border-none shadow-lg rounded-xl bg-white flex flex-col group cursor-pointer hover:shadow-xl transition-shadow relative">
              <div className="h-48 w-full relative overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow relative overflow-hidden">
                <h3 className="font-bold text-lg text-brand-primary mb-2 relative z-10">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-4 relative z-10">{service.description}</p>
                <div className="mt-auto flex items-center text-brand-primary font-bold text-sm relative z-10">
                  More Info <ArrowRight className="w-4 h-4 ml-1" />
                </div>
                
                {/* Number Badge */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-light rounded-full flex items-center justify-center text-3xl font-extrabold text-gray-300 group-hover:text-brand-accent group-hover:bg-orange-100 transition-colors z-0">
                  <span className="pr-4 pb-4">{service.num}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Pagination dots simulation */}
      <div className="flex justify-center items-center gap-2 mt-12">
        <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
        <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
        <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
        <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
      </div>
    </section>
  );
}
