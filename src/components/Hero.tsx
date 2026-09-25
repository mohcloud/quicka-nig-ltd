"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    title: "Custom Brokerage",
    image: "/images/customs-brokerage.jpg",
  },
  {
    title: "Road Haulage",
    image: "/images/ship1.jpg",
  },
  {
    title: "Freight Forwarding",
    image: "/images/freight.jpg",
  },
  {
    title: "Terminal Management",
    image: "/images/ship2.jpg",
  },
  {
    title: "Packaging",
    image: "/images/ship-packaging.jpg",
  },
  {
    title: "Warehousing",
    image: "/images/storage.jpg",
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const goToSlide = useCallback((index: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 500); // 500ms fade transition
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % slides.length);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Increased interval for full image slider to 5s

    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden group">
      {/* Background images with crossfade and zoom */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            currentIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`absolute inset-0 transition-transform duration-[20000ms] ease-out origin-center ${
            currentIndex === index ? 'scale-110' : 'scale-100'
          }`}>
            <Image 
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
          </div>
        </div>
      ))}

      {/* Textured Dark Overlay matching the image */}
      <div className="absolute inset-0 bg-[#1A2B48]/70 mix-blend-multiply z-0"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 z-0 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A2B48]/90 z-0 pointer-events-none"></div>

      {/* Navigation Arrows */}
      {/* <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button> */}

      <div className="relative z-10 text-center flex flex-col items-center px-4 max-w-4xl mx-auto mt-10">
        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-extrabold text-white mb-2 tracking-tight drop-shadow-xl font-sans transition-all">
          We Offer
        </h1>
        <div className="h-[70px] md:h-[90px] flex items-center justify-center">
          <span className={`block text-brand-primary text-4xl md:text-6xl lg:text-[70px] font-extrabold tracking-tight drop-shadow-xl transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
            {slides[currentIndex].title}
          </span>
        </div>

        <p className="text-white text-base md:text-xl mt-6 mb-12 max-w-2xl font-semibold drop-shadow-md leading-relaxed">
          Delivering tailored, world-class logistics and supply chain solutions designed to meet your time-critical shipping requirements with precision and reliability.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
          <button className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-[4px] px-8 py-3.5 font-bold text-[15px] transition-colors shadow-lg">
            Our Services
          </button>

          <button className="flex items-center gap-3 text-white font-bold hover:text-brand-primary transition-colors group/btn">
            <div className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center group-hover/btn:border-brand-primary transition-colors">
              <ChevronRight className="w-5 h-5 text-white group-hover/btn:text-brand-primary transition-colors" strokeWidth={3} />
            </div>
            <span className="text-[15px] tracking-wide">About Us</span>
          </button>
        </div>
      </div>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-8 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-brand-primary w-8' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
