import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import ServiceSidebar from "@/components/ServiceSidebar";
import { CheckCircle2 } from "lucide-react";

export default function PackagingPage() {
  const capabilities = [
    {
      title: "Custom Crating & Palletizing",
      desc: "Heavy-duty wooden crating, heat-treated pallets, and bespoke structural supports for oversized or fragile industrial cargo."
    },
    {
      title: "Specialized Materials",
      desc: "Utilizing high-impact shock absorbers, moisture-barrier wrapping (vacuum sealing), and advanced thermal insulation for sensitive goods."
    },
    {
      title: "HAZMAT Compliance",
      desc: "Expert packaging and labeling strictly adhering to international safety protocols (IATA, IMDG) for dangerous goods."
    },
    {
      title: "Automated Sorting & Boxing",
      desc: "High-speed, precision conveyor systems for rapid, uniform boxing and dispatch of commercial retail goods."
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="relative text-white py-24 md:py-32 px-4 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/images/ship-packaging.jpg')" }}></div>
        <div className="absolute inset-0 bg-[#1A2B48]/70 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center mt-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md">
            Packaging
          </h1>
          <p className="text-brand-primary font-bold tracking-widest text-sm uppercase drop-shadow-md">
            Home &raquo; Service
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow max-w-7xl mx-auto px-4 py-20 w-full flex flex-col lg:flex-row gap-10 relative">
        
        {/* Left Sidebar */}
        <ServiceSidebar />

        {/* Right Main Content */}
        <div className="lg:w-2/3 flex flex-col">
          {/* Main Feature Image */}
          <div className="w-full h-[300px] md:h-[400px] bg-cover bg-center mb-8 rounded-md shadow-sm" style={{ backgroundImage: "url('/images/ship-packaging.jpg')" }}></div>
          
          <h2 className="text-3xl font-extrabold text-brand-accent mb-6">Overview</h2>
          
          <div className="text-gray-600 leading-relaxed space-y-6 text-[15px]">
            <p>
              The integrity of your cargo during transit is our highest priority. At Quicka International Limited, we employ state-of-the-art, extra-careful packaging systems to guarantee that your shipments arrive at their final destination in flawless condition, regardless of the distance or mode of transport.
            </p>
            <p>
              We understand that improper packaging is one of the leading causes of supply chain loss. Therefore, our dedicated packaging engineers analyze the specific requirements of your freight—whether it involves fragile electronics, hazardous materials, temperature-sensitive pharmaceuticals, or oversized industrial equipment—and design bespoke packaging solutions that withstand the rigors of global transit.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-brand-accent mb-6">Our Comprehensive Packaging Solutions Include:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {capabilities.map((cap, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded border border-gray-100 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                      <h4 className="font-bold text-brand-accent text-lg">{cap.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>

      </div>
      
      <Cta />
      <Footer />
    </main>
  );
}
