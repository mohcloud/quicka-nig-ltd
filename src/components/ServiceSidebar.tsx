"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, FileText } from "lucide-react";
import Image from "next/image";

export default function ServiceSidebar() {
  const pathname = usePathname();

  const services = [
    { name: "Bonded Terminal", path: "/services/bonded-terminal" },
    { name: "Customs Brokerage", path: "/services/customs-brokerage" },
    { name: "Road Haulage & logistics", path: "/services/road-haulage" },
    { name: "Freight Forwarding (Air and Sea freight)", path: "/services/freight-forwarding" },
    { name: "Terminal Management", path: "/services/terminal-management" },
    { name: "Packaging", path: "/services/packaging" },
    { name: "Warehousing & Storage", path: "/services/warehousing" },
  ];

  return (
    <div className="lg:w-1/3 flex flex-col gap-8">
      {/* All Services Menu */}
      <div className="bg-[#F8F9FA] p-8 rounded-md border border-gray-100">
        <h3 className="text-xl font-extrabold text-brand-accent mb-6">All Service</h3>
        <div className="flex flex-col gap-3">
          {services.map((service, index) => {
            const isActive = pathname === service.path;
            return (
              <Link
                key={index}
                href={service.path}
                className={`flex items-center justify-between p-4 rounded bg-white border border-gray-100 transition-colors ${isActive
                    ? "text-white bg-brand-accent border-brand-accent"
                    : "text-brand-accent hover:text-brand-primary"
                  }`}
              >
                <span className="font-bold text-[14px]">{service.name}</span>
                <ArrowRight className={`w-4 h-4 ${isActive ? "text-white" : "text-brand-primary"}`} strokeWidth={3} />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-brand-primary text-white p-8 rounded-md text-center relative overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] opacity-20"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-6 inline-block">
            <Image
              src="/images/Quicka3.svg"
              alt="Quicka Nig Ltd Logo"
              width={100}
              height={40}
              className="w-[80px] h-auto object-contain"
              unoptimized
            />
          </div>
          <h3 className="text-2xl font-bold mb-6 drop-shadow-sm leading-tight">
            Get an easy quotation for your industry
          </h3>
          <Link href="/contact#contact-form" className="bg-white text-brand-accent font-bold py-3 px-8 rounded hover:text-brand-primary transition-colors inline-block">
            Contact Now
          </Link>
        </div>
      </div>

      {/* Download Box */}
      <div className="bg-[#F8F9FA] p-8 rounded-md border border-gray-100">
        <h3 className="text-xl font-extrabold text-brand-accent mb-6">Download Now</h3>
        <a href="/company-profile.pdf" download="Company_Profile.pdf" className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded hover:shadow-md transition-shadow group">
          <div className="flex items-center gap-3">
            <span className="text-[13px] text-gray-500 font-semibold group-hover:text-brand-primary transition-colors">Company Profile (PDF)</span>
            <span className="text-[11px] text-gray-400 font-bold">(12MB)</span>
          </div>
          <div className="w-8 h-8 bg-orange-50 text-brand-primary flex items-center justify-center rounded">
            <FileText className="w-4 h-4" />
          </div>
        </a>
      </div>
    </div>
  );
}
