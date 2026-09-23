import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import ServiceSidebar from "@/components/ServiceSidebar";

export default function BondedTerminalPage() {
  return (
    <main className="min-h-screen bg-white font-sans flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="relative text-white py-24 md:py-32 px-4 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/images/bonded-terminal.jpg')" }}></div>
        <div className="absolute inset-0 bg-[#1A2B48]/70 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center mt-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md">
            Bonded Terminal
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
          <div className="w-full h-[300px] md:h-[400px] bg-cover bg-center mb-8 rounded-md shadow-sm" style={{ backgroundImage: "url('/images/bonded-terminal.jpg')" }}></div>
          
          <h2 className="text-3xl font-extrabold text-brand-accent mb-6">Overview</h2>
          
          <div className="text-gray-600 leading-relaxed space-y-6 text-[15px]">
            <p>
              Efficiency and security are the cornerstones of global logistics. Quicka International Limited proudly operates a state-of-the-art, fully functional bonded terminal strategically located in the industrial hub of Port Harcourt, Rivers State, Nigeria. 
            </p>
            <p>
              Operating in strict compliance with the Federal Government of Nigeria and the Nigeria Customs Service, our facility serves as a highly secure, expedited extension of the nation's primary seaports and airports. By transferring laden containers and air cargo in-bond directly to our terminal, we bypass traditional port congestion, executing all customs clearance processes swiftly and efficiently.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-brand-accent mb-4">Terminal Capacity & Capabilities:</h3>
              <ul className="list-disc pl-5 space-y-3">
                <li><strong>Massive Yard Capacity:</strong> Our expansive yard boasts a holding capacity of up to 2,000 TEUs, enabling us to handle massive freight volumes for major industrial clients.</li>
                <li><strong>Advanced Infrastructure:</strong> The facility seamlessly handles 400 TEUs of active throughput, supported by a highly secure 750-square-meter warehouse designed for sensitive and high-value cargo.</li>
                <li><strong>Heavy-Duty Equipment:</strong> We deploy modern material handling equipment and fully-equipped on-site workshops, entirely managed by our elite team of highly trained engineers and technicians.</li>
                <li><strong>Integrated Customs Presence:</strong> With resident customs officers and government-approved agencies stationed directly on-site, we guarantee proactive, forward-looking stakeholder relationships that result in the immediate release of your cargo.</li>
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
