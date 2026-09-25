import Image from "next/image";
import { Maximize2 } from "lucide-react";

const images = [
  { 
    label: "IN THE AIR", 
    src: "/images/air.jpg",
    description: "Experience highly reliable airfreight solutions, including customized charter flights tailored perfectly to your most urgent shipment requirements."
  },
  { 
    label: "ON THE OCEAN", 
    src: "/images/ocean.jpg",
    description: "From seamless Full Container Loads to cost-effective consolidations, our premium ocean freight options perfectly balance speed with your budget."
  },
  { 
    label: "OVER LAND", 
    src: "/images/overland.jpg",
    description: "Advanced, tech-driven overland transport delivering real-time tracking and steadfast reliability right down to the final mile of delivery."
  },
  { 
    label: "IN GLOBAL TRADE", 
    src: "/images/global-trade.jpg",
    description: "Navigate global trade effortlessly with expert customs clearance and compliance strategies designed to minimize delays and unlock true cost efficiency."
  },
];

export default function ImageGrid() {
  return (
    <section className="w-full flex flex-col md:flex-row h-96 md:h-80">
      {images.map((item, i) => (
        <div key={i} className="flex-1 relative group cursor-pointer overflow-hidden border-r border-gray-800 last:border-r-0 h-1/4 md:h-full">
          <Image 
            src={item.src} 
            alt={item.label}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-brand-primary/40 group-hover:bg-brand-primary/20 transition-colors duration-500"></div>
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex justify-between items-end">
              <div>
                <div className="w-2 h-2 bg-brand-accent mb-2 rounded-sm hidden md:block"></div>
                <h3 className="text-white font-bold tracking-wider text-sm md:text-base">{item.label}</h3>
              </div>
              <div className="w-8 h-8 flex-shrink-0 border border-white/50 rounded flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:bg-brand-accent group-hover:border-brand-accent transition-colors">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>
            </div>
            
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
              <div className="overflow-hidden">
                <p className="text-white/90 text-xs md:text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
