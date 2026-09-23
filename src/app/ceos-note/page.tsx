import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import { Feather } from "lucide-react";

export default function CeosNotePage() {
  return (
    <main className="min-h-screen bg-brand-light font-sans flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="relative text-white py-24 md:py-32 px-4 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/images/ship2.jpg')" }}></div>
        <div className="absolute inset-0 bg-[#1A2B48]/70 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center mt-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md">
            Health And Safety
          </h1>
          <p className="text-brand-primary font-bold tracking-widest text-sm uppercase drop-shadow-md">
            Home / Health And Safety / CEO's Note
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow max-w-4xl mx-auto px-4 py-20 w-full">
        
        <div className="bg-white shadow-xl flex flex-col">
          {/* Note Banner */}
          <div className="bg-brand-primary text-white py-12 px-8 md:px-16 flex items-center justify-between overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 z-0"></div>
             <h2 className="text-3xl md:text-5xl font-light z-10 tracking-wide drop-shadow-sm">
               A Note from the CEO
             </h2>
             <Feather className="w-20 h-20 md:w-32 md:h-32 text-white/20 z-10 -mr-6 md:-mr-10 -my-10 transform -rotate-12" strokeWidth={1} />
          </div>

          {/* Letter Body */}
          <div className="p-8 md:p-16 flex flex-col gap-6 text-gray-700 leading-relaxed text-[15px] italic border-x border-b border-gray-100">
            <h3 className="font-bold text-lg text-brand-accent not-italic mb-2">Dear All,</h3>
            
            <p>
              The global landscape continues to present unprecedented challenges, and the lessons learned from recent global crises remain central to our operational strategy. At Quicka International Limited, the health, safety, and well-being of our staff, associates, and clients remain our highest priority.
            </p>
            
            <p>
              During times of profound global shifts, I am consistently inspired by the resilience, adaptability, and unwavering dedication of our workforce. We have pioneered flexible work environments and integrated advanced digital logistics systems, allowing our team to seamlessly balance professional excellence with personal well-being while maintaining uninterrupted service.
            </p>
            
            <p>
              <strong className="text-brand-accent">Our Commitment to Operational Resilience:</strong><br/>
              We have implemented robust, long-term health and safety protocols across all our facilities and global logistics networks. Our crisis-management frameworks ensure that, regardless of external disruptions, Quicka's supply chain operations remain agile, secure, and highly dependable. 
            </p>
            
            <p>
              <strong className="text-brand-accent">Partnership and Forward Momentum:</strong><br/>
              We are deeply grateful for the continuous support of our strategic partners and loyal clients who have shown immense trust as we evolved our operations. Though global challenges have reshaped the logistics industry, they have only strengthened our resolve. We remain aggressively committed to expanding our transport infrastructure, forging sustainable global partnerships, and delivering innovative, world-class supply chain solutions.
            </p>

            <p>
              Together, we have built a far more resilient organization. Quicka International Limited will continue to lead by example, upholding our core mission of providing top-tier, secure, and reliable logistics services to the world. We will navigate the future with confidence, transparency, and an unwavering commitment to excellence.
            </p>

            <div className="mt-8 not-italic">
              <p className="font-extrabold text-brand-accent text-lg">Eberechukwu Banny,</p>
              <p className="font-bold text-gray-500 text-sm">Quicka International Limited</p>
            </div>
          </div>
        </div>

      </div>
      
      <Cta />
      <Footer />
    </main>
  );
}
