import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "IN THE AIR",
    description: "Experience highly reliable airfreight solutions, including customized charter flights tailored perfectly to your most urgent shipment requirements.",
    image: "/images/air.jpg",
    num: "1",
  },
  {
    title: "ON THE OCEAN",
    description: "From seamless Full Container Loads to cost-effective consolidations, our premium ocean freight options perfectly balance speed with your budget.",
    image: "/images/ocean.jpg",
    num: "2",
  },
  {
    title: "OVER LAND",
    description: "Advanced, tech-driven overland transport delivering real-time tracking and steadfast reliability right down to the final mile of delivery.",
    image: "/images/overland.jpg",
    num: "3",
  },
  {
    title: "IN GLOBAL TRADE",
    description: "Navigate global trade effortlessly with expert customs clearance and compliance strategies designed to minimize delays and unlock true cost efficiency.",
    image: "/images/global-trade.jpg",
    num: "4",
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
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} className="overflow-hidden border-none shadow-lg rounded-xl bg-white flex flex-col group cursor-pointer hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative">
              <div className="h-48 w-full relative overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow relative overflow-hidden">
                <h3 className="font-bold text-lg text-brand-primary group-hover:text-brand-accent transition-all duration-300 mb-2 relative z-10 w-fit bg-gradient-to-r from-brand-accent to-brand-accent bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] pb-1">
                  {service.title}
                </h3>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out relative z-10">
                  <div className="overflow-hidden">
                    <p className="text-gray-500 group-hover:text-gray-800 transition-all duration-300 text-sm mb-4 pt-1 opacity-0 group-hover:opacity-100 delay-100">{service.description}</p>
                  </div>
                </div>
                <div className="mt-auto flex items-center text-brand-primary font-bold text-sm relative z-10 group-hover:text-brand-accent transition-colors duration-300">
                  More Info <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
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
