import Image from "next/image";
import { Maximize2 } from "lucide-react";

const images = [
  { label: "IN THE AIR", src: "/images/air.jpg" },
  { label: "ON THE OCEAN", src: "/images/ocean.jpg" },
  { label: "OVER LAND", src: "/images/overland.jpg" },
  { label: "IN GLOBAL TRADE", src: "/images/global-trade.jpg" },
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
          
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div>
              <div className="w-2 h-2 bg-brand-accent mb-2 rounded-sm hidden md:block"></div>
              <h3 className="text-white font-bold tracking-wider text-sm md:text-base">{item.label}</h3>
            </div>
            <div className="w-8 h-8 border border-white/50 rounded flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:bg-brand-accent group-hover:border-brand-accent transition-colors">
              <Maximize2 className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
