import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import ServiceSidebar from "@/components/ServiceSidebar";

export default function CustomsBrokeragePage() {
  return (
    <main className="min-h-screen bg-white font-sans flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="relative text-white py-24 md:py-32 px-4 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/images/customs-brokerage.jpg')" }}></div>
        <div className="absolute inset-0 bg-[#1A2B48]/70 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center mt-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md">
            Customs Brokerage
          </h1>
          <p className="text-brand-primary font-bold tracking-widest text-sm uppercase drop-shadow-md">
            Home &raquo; Services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow max-w-7xl mx-auto px-4 py-20 w-full flex flex-col lg:flex-row gap-10 relative">
        
        {/* Left Sidebar */}
        <ServiceSidebar />

        {/* Right Main Content */}
        <div className="lg:w-2/3 flex flex-col">
          <div className="w-full h-[300px] md:h-[400px] bg-cover bg-center mb-8 rounded-md shadow-sm" style={{ backgroundImage: "url('/images/customs-brokerage.jpg')" }}></div>
          
          <h2 className="text-3xl font-extrabold text-brand-accent mb-6">Overview</h2>
          
          <div className="text-gray-600 leading-relaxed space-y-6 text-[15px]">
            <p>
              Navigating the complexities of international trade regulations requires deep expertise and relentless attention to detail. At Quicka International Limited, we operate as your dedicated Customs Brokers, acting as a seamless intermediary between your business and critical government agencies, including the Nigeria Customs Service. 
            </p>
            <p>
              Our primary mission is to eliminate bureaucratic friction from your supply chain. We meticulously manage all documentation, duty calculations, tax payments, and regulatory compliance requirements for both imports and exports, ensuring your cargo moves across borders without delay.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-brand-accent mb-4">Our Core Brokerage Competencies:</h3>
              <ul className="list-disc pl-5 space-y-3">
                <li><strong>Strategic Intermediation:</strong> We aggressively defend our clients' consignments, leveraging our relationships with customs authorities to ensure absolute fairness and accuracy in all tariff and tax assessments.</li>
                <li><strong>Precision HS Classification:</strong> The foundation of our process is precision. We meticulously classify every imported item under the correct Harmonized System (HS) code, securing the most favorable and legally compliant tariff rates.</li>
                <li><strong>Regulatory Compliance:</strong> We stay ahead of shifting federal regulations, ensuring your business is fully protected from costly penalties, seizures, or compliance audits.</li>
                <li><strong>Expedited Clearance:</strong> Through proactive documentation and pre-arrival processing, we guarantee that your cargo clears customs swiftly, minimizing port dwell times and accelerating your speed to market.</li>
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
