"use client";

import { useEffect, useState, useRef } from "react";

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const stats = [
    { percent: 95, label: "Custom Brokerage" },
    { percent: 85, label: "Freights" },
    { percent: 90, label: "Bonded Terminal" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand-light py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-[45%]">
          <div className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-2">
            Quicka Nig Ltd
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-primary leading-tight mb-6 text-balance">
            Your Premier Global Logistics Partner. Delivering Excellence Everywhere.
          </h2>
          <p className="text-gray-500 font-medium leading-relaxed">
            With decades of combined experience, our industry-leading metrics prove our commitment to reliability, speed, and absolute client satisfaction in every shipment.
          </p>
        </div>
        
        <div className="lg:w-[55%] flex flex-col sm:flex-row justify-between gap-6 w-full">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white py-10 px-4 rounded-sm shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] flex-1 text-center transform transition-transform hover:-translate-y-2 border border-gray-50">
              <div className="relative w-[110px] h-[110px] mx-auto mb-6">
                <svg className="w-full h-full -rotate-90 drop-shadow-sm" viewBox="0 0 36 36">
                  {/* Subtle background track */}
                  <path
                    className="text-gray-100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  {/* Progress ring */}
                  <path
                    className="text-brand-primary transition-all duration-[2000ms] ease-out"
                    strokeDasharray={`${isVisible ? stat.percent : 0}, 100`}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[26px] font-extrabold text-brand-accent tracking-tight">{stat.percent}%</span>
                </div>
              </div>
              <div className="text-[17px] font-extrabold text-brand-accent tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
