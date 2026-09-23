import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import ServiceSidebar from "@/components/ServiceSidebar";
import { CheckCircle2 } from "lucide-react";

export default function WarehousingPage() {
  const warehouseServices = [
    "Customized pick, pack, and ship fulfillment",
    "Retail and channel distribution services",
    "Reverse logistics management",
    "Tailored, scalable storage systems",
    "24/7 CCTV surveillance with 30-day retention",
    "Fenced, ultra-secure high-value storage zones",
    "Hi-tech digital security and live tracking systems",
    "24/7 intrusion and fire systems with remote monitoring",
    "Strict adherence to global safety and security standards",
  ];

  return (
    <main className="min-h-screen bg-white font-sans flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="relative text-white py-24 md:py-32 px-4 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/images/storage.jpg')" }}></div>
        <div className="absolute inset-0 bg-[#1A2B48]/70 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center mt-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md">
            Warehousing & Storage
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
          <div className="w-full h-[300px] md:h-[400px] bg-cover bg-center mb-8 rounded-md shadow-sm" style={{ backgroundImage: "url('/images/storage.jpg')" }}></div>
          
          <h2 className="text-3xl font-extrabold text-brand-accent mb-6">Overview</h2>
          
          <div className="text-gray-600 leading-relaxed space-y-8 text-[15px]">
            <p>
              At Quicka International Limited, we provide highly secure, world-class bonded warehouse facilities strategically situated just 15 kilometers along the Onne seaport expressway. Our state-of-the-art warehouses are engineered to accommodate full container loading and unloading, acting as a seamless and secure extension of your supply chain operations.
            </p>

            <div className="bg-gray-50 p-8 rounded-md border border-gray-100">
              <h3 className="text-xl font-bold text-brand-accent mb-6">Our Premium Warehousing & Logistics Services Include:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {warehouseServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-accent mb-3">On-Demand Agile Storage</h3>
              <p>
                In response to dynamic market fluctuations, we offer highly flexible on-demand warehousing solutions. This explicitly connects businesses experiencing temporary, seasonal, or unexpected spikes in sales with rapidly scalable warehouse space. Operating under stringent private enterprise customs bonds, we guarantee maximum agility for your inventory without ever compromising strict government regulatory compliance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-accent mb-3">Strategic Procurement & Value Creation</h3>
              <p className="mb-4">
                Quicka goes far beyond traditional storage; we operate as true strategic partners within your supply chain. Our crowning achievement is our ability to source globally, consolidate economically, freight expeditiously, and deliver locally with absolute precision.
              </p>
              <p>
                Leveraging decades of deep operational experience within the Nigerian business climate, we understand the intricate nuances of the regional market. We consistently deliver tangible economic value to our partners' bottom lines while actively championing the capacity building and training of our dedicated local workforce.
              </p>
            </div>
            
          </div>
        </div>

      </div>
      
      <Cta />
      <Footer />
    </main>
  );
}
