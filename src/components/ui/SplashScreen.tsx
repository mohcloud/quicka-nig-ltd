"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Show splash screen on route change
    setShow(true);
    
    // Increased duration to 3.5 seconds to significantly slow down the truck
    const timer = setTimeout(() => {
      setShow(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-500 overflow-hidden">
      <style>{`
        @keyframes drive {
          0% { 
            transform: translateX(-100vw); 
          }
          30% { 
            transform: translateX(0); 
          }
          70% { 
            transform: translateX(0); 
          }
          100% { 
            transform: translateX(100vw); 
          }
        }
        @keyframes rumble {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-drive {
          /* Increased to 3.5s to slow down the truck even more */
          animation: drive 3.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animate-rumble {
          animation: rumble 0.15s ease-in-out infinite;
        }
      `}</style>
      <div className="flex flex-col items-center justify-center w-full">
        {/* The wrapper drives across the screen */}
        <div className="animate-drive">
          {/* The truck itself rumbles up and down slightly to simulate driving */}
          <div className="animate-rumble">
            <Image 
              src="/images/quicka2.png" 
              alt="Quicka Nig Ltd Logo" 
              width={160} 
              height={50} 
              className="w-20 md:w-32 h-auto object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
