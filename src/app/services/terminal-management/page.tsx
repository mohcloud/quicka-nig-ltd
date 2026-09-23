import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import ServiceSidebar from "@/components/ServiceSidebar";
import { CheckCircle2 } from "lucide-react";

export default function TerminalManagementPage() {
  const capabilities = [
    {
      title: "Optimized Yard Planning",
      desc: "Advanced algorithms and strategic layout designs that maximize storage capacity and drastically reduce equipment idle time."
    },
    {
      title: "State-of-the-art Handling",
      desc: "Seamless operation and maintenance of heavy-duty lifters, reach stackers, and automated gantry systems."
    },
    {
      title: "24/7 Security & Monitoring",
      desc: "Comprehensive surveillance and strict access controls to safeguard high-value assets and ensure regulatory compliance."
    },
    {
      title: "Stakeholder Coordination",
      desc: "Acting as the central nervous system connecting shipping lines, customs officials, truck operators, and cargo owners."
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="relative text-white py-24 md:py-32 px-4 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/images/ship2.jpg')" }}></div>
        <div className="absolute inset-0 bg-[#1A2B48]/70 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center mt-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md">
            Terminal Management
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
          <div className="w-full h-[300px] md:h-[400px] bg-cover bg-center mb-8 rounded-md shadow-sm" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop')" }}></div>
          
          <h2 className="text-3xl font-extrabold text-brand-accent mb-6">Overview</h2>
          
          <div className="text-gray-600 leading-relaxed space-y-6 text-[15px]">
            <p>
              At Quicka International Limited, our terminal management services set the industry standard for operational excellence. Judging by the overwhelmingly positive feedback from our global clientele, our ability to orchestrate complex terminal logistics is truly unparalleled.
            </p>
            <p>
              We offer end-to-end management of port and inland terminal operations, focusing on maximizing throughput, enhancing safety, and minimizing vessel and truck turnaround times. Our elite team of terminal managers and logistics engineers deploys cutting-edge technology and rigorous operational frameworks to ensure every container, pallet, and bulk cargo unit is handled with absolute precision.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-brand-accent mb-6">Our Core Terminal Management Capabilities:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {capabilities.map((cap, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded border border-gray-100 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-brand-primary" />
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
