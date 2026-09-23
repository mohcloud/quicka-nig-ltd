import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import ServiceSidebar from "@/components/ServiceSidebar";
import { CheckCircle2 } from "lucide-react";

export default function RoadHaulagePage() {
  const truckingServices = [
    "Door-to-door service",
    "Groupage & full load (LTL/FTL)",
    "Courier & express services",
    "Daily shuttle system",
    "Fixed transit times",
    "Cross-dock operations",
    "Advanced Tracking & Tracing (EDI)",
    "Integrated customs clearance & consultancy",
  ];

  return (
    <main className="min-h-screen bg-white font-sans flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="relative text-white py-24 md:py-32 px-4 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/images/logistic.jpg')" }}></div>
        <div className="absolute inset-0 bg-[#1A2B48]/70 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center mt-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md">
            Road Haulage & Logistics
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
          <div className="w-full h-[300px] md:h-[400px] bg-cover bg-center mb-8 rounded-md shadow-sm" style={{ backgroundImage: "url('/images/logistic.jpg')" }}></div>
          
          <h2 className="text-3xl font-extrabold text-brand-accent mb-6">Overview</h2>
          
          <div className="text-gray-600 leading-relaxed space-y-6 text-[15px]">
            <p>
              At Quicka International Limited, we deliver superior road haulage and ground logistics solutions, guaranteeing the highly secure and timely delivery of your consignments. We offer a comprehensive suite of transportation and business intelligence solutions tailored for both domestic and intra-regional shippers.
            </p>
            <p>
              Understanding that every supply chain is unique, our dedicated logistics team functions as a seamless extension of your operations. We empower you with the strategic insights, advanced tracking tools, and robust infrastructure necessary to achieve absolute command and control over your ground transportation processes, ultimately optimizing your total landed costs and improving your bottom line.
            </p>

            <h3 className="text-2xl font-bold text-brand-accent mt-8 mb-4">Advanced Trucking & Security</h3>
            <p>
              Quicka features a dedicated, global-standard fleet of heavy-duty bonded trucks, fully equipped with state-of-the-art GPS tracking. We strictly minimize transit times—for example, guaranteeing a two-hour maximum transit window from the Onne seaport directly to our warehouse. We ensure that all cargo is securely tendered and delivered with absolute precision.
            </p>
            <p>
              Security is our paramount concern. Our comprehensive security protocol includes armed escort trucks, individual GPS trackers on specialized containers and pallets, meticulous OS&D (Over, Short, and Damaged) inspections, and tamper-evident security tape. Our live-tracking digital platform ensures you always know the exact location and estimated time of arrival of your valuable freight.
            </p>

            <div className="mt-8 bg-gray-50 p-8 rounded-md border border-gray-100">
              <h3 className="text-xl font-bold text-brand-accent mb-6">Our Domestic & International Trucking Services Include:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {truckingServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    <span className="font-semibold text-gray-700">{service}</span>
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
