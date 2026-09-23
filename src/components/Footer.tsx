import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-accent text-white pt-20 pb-10 px-4 relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-brand-primary/20 rounded-full blur-3xl -z-10 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

        {/* Brand Col */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-brand-primary font-bold text-xl overflow-hidden">
              <span className="transform -skew-x-12 font-black text-2xl">Q</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl leading-none tracking-tight">QUICKA NIG LTD</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-primary font-semibold">International Logistics</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Quicka Nig Ltd delivers seamless cross-border freight transport and bespoke business solutions. Operating at the highest level of execution, we connect your enterprise to the global marketplace with absolute reliability.
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Our Services</h3>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li><Link href="#" className="hover:text-brand-primary transition-colors">Ocean Freight</Link></li>
            <li><Link href="#" className="hover:text-brand-primary transition-colors">Custom Brokerage</Link></li>
            <li><Link href="#" className="hover:text-brand-primary transition-colors">Road Haulage &amp; Logistics</Link></li>
            <li><Link href="#" className="hover:text-brand-primary transition-colors">Project Forwarding and Consulting</Link></li>
            <li><Link href="#" className="hover:text-brand-primary transition-colors">Terminal Management</Link></li>
            <li><Link href="#" className="hover:text-brand-primary transition-colors">Packaging</Link></li>
            <li><Link href="#" className="hover:text-brand-primary transition-colors">Warehousing &amp; Storage</Link></li>
          </ul>
        </div>

        {/* Official Info */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Official info:</h3>
          <div className="flex flex-col gap-6 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
              <span className="text-gray-400">123 Global Avenue, Commercial District, Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-primary flex-shrink-0" />
              <span className="text-gray-400">+234 (000) 000-0000</span>
            </div>
            <div>
              <div className="font-bold text-white mb-1">Open Hours:</div>
              <div className="text-gray-400">Mon - Sat: 8am - 5pm</div>
              <div className="text-gray-400">Sunday: CLOSED</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
        © 2026 Quicka Nig Ltd. All rights reserved.
      </div>
    </footer>
  );
}
