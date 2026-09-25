import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-light font-sans flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="relative text-white py-24 md:py-32 px-4 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/images/ship2.jpg')" }}></div>
        <div className="absolute inset-0 bg-[#1A2B48]/70 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center mt-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md">
            Contact
          </h1>
          <p className="text-brand-primary font-bold tracking-widest text-sm uppercase drop-shadow-md">
            Home &raquo; Contact
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow max-w-7xl mx-auto px-4 py-20 w-full flex flex-col lg:flex-row gap-12 relative">
        
        {/* Left Column: Contact Info */}
        <div className="lg:w-1/2 flex flex-col">
          <p className="text-brand-primary font-bold text-sm uppercase tracking-wider mb-2">Get a Quote</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-accent mb-10">Get in Touch Let's Do Business</h2>
          
          <div className="flex flex-col gap-6">
            {/* Address */}
            <div className="flex items-center gap-6 p-6 bg-white rounded-md border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-orange-50 rounded flex items-center justify-center flex-shrink-0">
                <MapPin className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-accent mb-2">Office address</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  KM 25 Aleto Farm road by industrial layout, Eleme LGA, Rivers.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-6 p-6 bg-white rounded-md border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-orange-50 rounded flex items-center justify-center flex-shrink-0">
                <Phone className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-accent mb-2">Phone</h3>
                <p className="text-gray-500 text-sm">
                  +234 813 885 3645
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-6 p-6 bg-white rounded-md border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-orange-50 rounded flex items-center justify-center flex-shrink-0">
                <Mail className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-accent mb-2">Email Address</h3>
                <p className="text-gray-500 text-sm">
                  info@quickanig.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div id="contact-form" className="lg:w-1/2 bg-white p-10 rounded-md border border-gray-100 shadow-sm flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold text-brand-accent mb-8 text-center">Write Us A Message</h2>
          
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-[#F8F9FA] border border-gray-200 rounded p-4 text-gray-700 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
              />
              <input 
                type="text" 
                placeholder="Number" 
                className="w-full bg-[#F8F9FA] border border-gray-200 rounded p-4 text-gray-700 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
              />
            </div>
            
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-[#F8F9FA] border border-gray-200 rounded p-4 text-gray-700 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
            />
            
            <textarea 
              placeholder="Your Message" 
              rows={6}
              className="w-full bg-[#F8F9FA] border border-gray-200 rounded p-4 text-gray-700 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-none"
            ></textarea>
            
            <button 
              type="button" 
              className="w-full bg-brand-primary hover:bg-orange-600 text-white font-bold py-4 rounded transition-colors text-lg"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
      
      <Cta />
      <Footer />
    </main>
  );
}
