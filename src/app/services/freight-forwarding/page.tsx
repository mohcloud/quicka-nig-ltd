import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import ServiceSidebar from "@/components/ServiceSidebar";

export default function FreightForwardingPage() {
  return (
    <main className="min-h-screen bg-white font-sans flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="relative text-white py-24 md:py-32 px-4 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/images/freight.jpg')" }}></div>
        <div className="absolute inset-0 bg-[#1A2B48]/70 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center mt-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md">
            Freight Forwarding (Air and Sea)
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
          
          {/* Main Feature Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="h-[200px] md:h-[420px] bg-cover bg-center rounded-md shadow-sm row-span-2" style={{ backgroundImage: "url('/images/freight.jpg')" }}></div>
            <div className="h-[200px] bg-cover bg-center rounded-md shadow-sm" style={{ backgroundImage: "url('/images/logistic.jpg')" }}></div>
            <div className="h-[200px] bg-cover bg-center rounded-md shadow-sm" style={{ backgroundImage: "url('/images/freight.jpg')" }}></div>
          </div>
          
          <h2 className="text-3xl font-extrabold text-brand-accent mb-6">Overview</h2>
          
          <div className="text-gray-600 leading-relaxed space-y-8 text-[15px]">
            
            <div>
              <h3 className="text-xl font-bold text-brand-accent mb-3">Comprehensive Import Services</h3>
              <p className="mb-3">
                We provide end-to-end, door-to-door import solutions. From coordinating origin port transit and arranging highly secure intermediate storage, to expertly navigating complex customs clearance procedures directly to your facility doors. 
              </p>
              <p>
                Our logistics teams possess unparalleled global reach combined with deep local expertise, aggressively mitigating supply chain risks. Quicka works in lockstep with government agencies to ensure absolute adherence to strict federal regulations. Our import infrastructure spans from origin freight forwarding to dedicated Custom House Brokerage, supported by stringent pre- and post-shipment auditing processes led by industry veterans.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-accent mb-3">Seamless Export Logistics</h3>
              <p>
                Internationally, we mirror our flawless import operations for all your export needs. We cover total door-to-door outward shipments, including warehousing, staging, and navigating rigorous export customs inspections. While exportable goods from Nigeria enjoy tax-free status, our teams expertly handle the nuanced financial documentation, including ensuring all capital is properly repatriated through the Nigeria Export Proceed (NXP) protocols.
              </p>
            </div>

            <div className="bg-brand-light p-6 rounded border-l-4 border-brand-primary">
              <p className="font-semibold italic text-brand-accent">
                "You need a partner who is flexible, versatile, and can adapt to the needs of a dynamic business in an ever-changing world."
              </p>
              <p className="mt-3">
                Our international shipping team crafts bespoke industry solutions to fit your exact business needs, regardless of shipment volume. We operate as the critical trade intermediary between Nigeria and major global markets including Asia, the Americas, Europe, and the UK. Our regulatory compliance experts simplify the complexity of the global trade environment so you can focus on growth.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-accent mb-3">Import and Export Documentation Expertise</h3>
              <p className="mb-3">
                As an elite international freight forwarding firm, we possess specialized expertise in the rapid preparation and processing of complex customs documentation. Our precision in handling paperwork prevents costly delays at the border.
              </p>
              <p className="font-semibold text-gray-700">Crucial documentation meticulously reviewed and processed by our teams includes:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Commercial and Proforma Invoices</li>
                <li>Combined Certificate of Value & Origin (CCVO)</li>
                <li>Product Certificates & Import Permits</li>
                <li>SONCAP Certificates & Freight Insurance</li>
                <li>Pre-Arrival Assessment Reports (PAAR)</li>
                <li>Shipper's Export Declarations & NXP Forms</li>
                <li>Bills of Lading / Air Waybills</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
      
      <Cta />
      <Footer />
    </main>
  );
}
