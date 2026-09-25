"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header className="w-full flex flex-col relative z-50">
      {/* TOP BAR */}
      <div className="hidden md:flex relative w-full h-[45px] bg-brand-primary text-white justify-between items-center text-xs sm:text-sm pl-4 pr-0 lg:pl-10">

        {/* Left Side: Contact Info */}
        <div className="flex flex-col sm:flex-row gap-6 items-center h-full w-full lg:w-auto">
          <div className="flex items-center gap-2 hover:text-white/80 transition-colors cursor-pointer">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">info@quickanig.com</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white/80 transition-colors cursor-pointer">
            <MapPin className="w-4 h-4" />
            <span className="hidden sm:inline">No 5, Location Road off Boskel road Elelenwo, obioakpor LGA, Port Harcourt, Rivers State, Nigeria.</span>
          </div>
        </div>

        {/* Slanted Separator - Only visible on md+ */}
        <div className="hidden lg:block absolute left-[65%] top-0 bottom-0 w-[5px] bg-brand-accent transform -skew-x-[25deg] shadow-sm z-10"></div>

        {/* Right Side: White Phone Box overlaying Top Bar & Nav */}
        <div className="absolute right-0 top-0 h-[65px] bg-white text-gray-900 items-center gap-3 px-6 lg:px-8 rounded-bl-[35px] z-20 shadow-sm hidden md:flex border-l-[6px] border-brand-accent/10">
          <div className="w-9 h-9 rounded-full border-[1.5px] border-gray-300 flex items-center justify-center bg-white text-gray-600 hover:border-brand-primary transition-colors cursor-pointer">
            <Phone className="w-4 h-4" strokeWidth={2} />
          </div>
          <div className="flex flex-col leading-tight pt-1">
            <span className="text-[11px] font-bold text-gray-500">Get In Touch</span>
            <span className="font-extrabold text-[15px] text-brand-accent tracking-tight">+234 813 885 3645</span>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="relative w-full h-[85px] bg-brand-accent text-white flex justify-between items-center pl-4 pr-4 lg:pl-10 lg:pr-10 shadow-lg">

        {/* Left Side: Logo & Slash */}
        <div className="flex items-center h-full">
          <Link href="/" className="flex items-center mr-2 sm:mr-8 cursor-pointer group">
            <Image 
              src="/images/Quicka2.svg" 
              alt="Quicka Nig Ltd Logo" 
              width={150} 
              height={50} 
              className="w-[70px] sm:w-[100px] h-auto object-contain"
              priority
              unoptimized
            />
          </Link>

          {/* Slanted separator line for the Main Nav */}
          <div className="hidden lg:block w-[5px] h-[65px] bg-brand-primary transform -skew-x-[25deg] mx-4 shadow-sm"></div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10 text-[15px] font-semibold h-full flex-grow justify-center lg:pr-32 xl:pr-48">
          <Link href="/" className={`transition-colors ${pathname === '/' ? 'text-brand-primary' : 'hover:text-brand-primary'}`}>Home</Link>
          <div className="relative group h-full flex items-center">
            <Link href="#" className={`transition-colors flex items-center gap-1.5 cursor-pointer ${pathname.includes('/company-overview') ? 'text-brand-primary' : 'hover:text-brand-primary'}`}>
              About Us <span className="text-brand-primary font-black text-lg leading-none">+</span>
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 w-[250px] bg-white text-brand-accent shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col">
              <Link href="/company-overview" className="px-6 py-4 text-[15px] font-bold border-b border-gray-100 hover:text-brand-primary hover:bg-gray-50 transition-colors">
                Company Overview
              </Link>
              <Link href="/health-and-safety" className="px-6 py-4 text-[15px] font-bold border-b border-gray-100 hover:text-brand-primary hover:bg-gray-50 transition-colors">
                Health and Safety
              </Link>
              <Link href="/ceos-note" className="px-6 py-4 text-[15px] font-bold border-b border-gray-100 hover:text-brand-primary hover:bg-gray-50 transition-colors">
                CEO's Note On Covid 19
              </Link>
              <Link href="/career" className="px-6 py-4 text-[15px] font-bold hover:text-brand-primary hover:bg-gray-50 transition-colors">
                Career
              </Link>
            </div>
          </div>
          <div className="relative group h-full flex items-center">
            <Link href="#" className={`transition-colors flex items-center gap-1.5 cursor-pointer ${pathname.includes('/services') ? 'text-brand-primary' : 'hover:text-brand-primary'}`}>
              Services <span className="text-brand-primary font-black text-lg leading-none">+</span>
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 w-[280px] bg-white text-brand-accent shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col">
              <Link href="/services/bonded-terminal" className="px-6 py-4 text-[15px] font-bold border-b border-gray-100 hover:text-brand-primary hover:bg-gray-50 transition-colors">
                Bonded Terminal
              </Link>
              <Link href="/services/customs-brokerage" className="px-6 py-4 text-[15px] font-bold border-b border-gray-100 hover:text-brand-primary hover:bg-gray-50 transition-colors">
                Customs Brokerage
              </Link>
              <Link href="/services/road-haulage" className="px-6 py-4 text-[15px] font-bold border-b border-gray-100 hover:text-brand-primary hover:bg-gray-50 transition-colors">
                Road Haulage & logistics
              </Link>
              <Link href="/services/freight-forwarding" className="px-6 py-4 text-[15px] font-bold border-b border-gray-100 hover:text-brand-primary hover:bg-gray-50 transition-colors">
                Freight Forwarding (Air and Sea freight)
              </Link>
              <Link href="/services/terminal-management" className="px-6 py-4 text-[15px] font-bold border-b border-gray-100 hover:text-brand-primary hover:bg-gray-50 transition-colors">
                Terminal Management
              </Link>
              <Link href="/services/packaging" className="px-6 py-4 text-[15px] font-bold border-b border-gray-100 hover:text-brand-primary hover:bg-gray-50 transition-colors">
                Packaging
              </Link>
              <Link href="/services/warehousing" className="px-6 py-4 text-[15px] font-bold hover:text-brand-primary hover:bg-gray-50 transition-colors">
                Warehousing & Storage
              </Link>
            </div>
          </div>
          <Link href="/contact" className={`transition-colors ${pathname === '/contact' ? 'text-brand-primary' : 'hover:text-brand-primary'}`}>Contact Us</Link>
        </nav>

        {/* Right: Button & Mobile Menu */}
        <div className="flex items-center relative z-10 h-full lg:mr-[240px] xl:mr-[280px]">
          <Link href="/contact" className="hidden lg:flex border-white text-white hover:bg-white hover:text-brand-accent bg-transparent rounded-[30px] px-8 py-5 font-bold border-2 transition-all items-center justify-center whitespace-nowrap">
            Get Free Quote
          </Link>

          <Button
            variant="ghost"
            className="lg:hidden w-14 h-14 p-0 flex items-center justify-center text-white bg-brand-dark hover:bg-brand-dark/80 active:bg-brand-dark/60 transition-colors rounded-md shadow-sm border border-white/5"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
          </Button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-brand-accent/95 z-[100] flex flex-col pt-6 pb-6 px-4 overflow-y-auto lg:hidden backdrop-blur-md transition-all">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Image 
                src="/images/Quicka2.svg" 
                alt="Quicka Nig Ltd Logo" 
                width={120} 
                height={40} 
                className="w-[70px] h-auto object-contain"
                unoptimized
              />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-brand-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </Button>
          </div>

          <nav className="flex flex-col gap-6 text-xl font-bold text-white mt-4">
            <Link href="/" className="hover:text-brand-primary transition-colors border-b border-white/10 pb-4" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

            <div className="flex flex-col border-b border-white/10 pb-4">
              <button
                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                className="flex items-center justify-between text-brand-primary w-full text-left font-bold"
              >
                <span>About Us</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileAboutOpen && (
                <div className="flex flex-col gap-3 pl-4 text-[17px] font-semibold text-gray-300 mt-4">
                  <Link href="/company-overview" className="hover:text-brand-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Company Overview</Link>
                  <Link href="/health-and-safety" className="hover:text-brand-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Health and Safety</Link>
                  <Link href="/ceos-note" className="hover:text-brand-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>CEO's Note</Link>
                  <Link href="/career" className="hover:text-brand-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Career</Link>
                </div>
              )}
            </div>

            <div className="flex flex-col border-b border-white/10 pb-4">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between text-brand-primary w-full text-left font-bold"
              >
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="flex flex-col gap-3 pl-4 text-[17px] font-semibold text-gray-300 mt-4">
                  <Link href="/services/bonded-terminal" className="hover:text-brand-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Bonded Terminal</Link>
                  <Link href="/services/customs-brokerage" className="hover:text-brand-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Customs Brokerage</Link>
                  <Link href="/services/road-haulage" className="hover:text-brand-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Road Haulage & Logistics</Link>
                  <Link href="/services/freight-forwarding" className="hover:text-brand-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Freight Forwarding</Link>
                  <Link href="/services/terminal-management" className="hover:text-brand-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Terminal Management</Link>
                  <Link href="/services/packaging" className="hover:text-brand-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Packaging</Link>
                  <Link href="/services/warehousing" className="hover:text-brand-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Warehousing & Storage</Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="hover:text-brand-primary transition-colors pb-4" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>

            <Link href="/contact" className="mt-4 bg-brand-primary text-white text-center rounded px-6 py-4 font-bold border-2 border-brand-primary hover:bg-transparent transition-all" onClick={() => setIsMobileMenuOpen(false)}>
              Get Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
