import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Link from "next/link";
import Image from "next/image";

export default function HealthAndSafetyPage() {
  return (
    <main className="min-h-screen bg-brand-light font-sans">
      <Header />
      
      {/* Page Header */}
      <div className="relative text-white py-24 md:py-32 px-4 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/images/safety.jpg')" }}></div>
        <div className="absolute inset-0 bg-[#1A2B48]/70 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center mt-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md">
            Health And Safety
          </h1>
          <p className="text-brand-primary font-bold tracking-widest text-sm uppercase drop-shadow-md">
            Home / Health And Safety
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row gap-10">
        
        {/* Left Column: Cards */}
        <div className="lg:w-2/3 flex flex-col gap-10">
          
          {/* Card 1 */}
          <div className="bg-white rounded-md shadow-md overflow-hidden border border-gray-100">
            <div className="w-full h-64 sm:h-80 bg-cover bg-center" style={{ backgroundImage: "url('/images/safety.jpg')" }}></div>
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-accent mb-4">Uncompromising Commitment to Safety</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Quicka International Limited, industry-leading safety performance is the absolute cornerstone of our operations. We believe that every logistical success begins with a secure, hazard-free environment. 
              </p>
              <ul className="list-disc pl-5 text-gray-600 flex flex-col gap-2 mb-4">
                <li><strong>Behavior-Based Safety:</strong> Our initiatives are deeply ingrained in our corporate culture, transforming safety from a policy into a daily way of life.</li>
                <li><strong>Continuous Training:</strong> Every team member, from frontline operators to senior management, undergoes rigorous, ongoing safety education.</li>
                <li><strong>Stop Work Authority:</strong> Every employee is fully empowered—and expected—to immediately halt operations if they identify any potential hazards, without fear of reprisal.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                By investing heavily in modern safety infrastructure and prioritizing human well-being above all else, we ensure a secure environment for our staff, partners, and the communities we serve.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-md shadow-md overflow-hidden border border-gray-100">
            <div className="w-full h-64 sm:h-80 bg-cover bg-center" style={{ backgroundImage: "url('/images/safety.jpg')" }}></div>
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-accent mb-4">Proactive Incident Prevention</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Safe and highly productive work environments are achieved through deliberate, calculated action, not chance. Quicka utilizes a predictive, data-driven approach to identify and mitigate risks before they materialize.
              </p>
              <ul className="list-disc pl-5 text-gray-600 flex flex-col gap-2 mb-4">
                <li><strong>Rigorous Risk Assessments:</strong> Comprehensive evaluations are conducted across all transit routes, warehouses, and terminal operations.</li>
                <li><strong>Collaborative Culture:</strong> Fostering an internal environment focused on rigorous teamwork, mutual accountability, and strict adherence to safety protocols.</li>
                <li><strong>Award-Winning Record:</strong> Our unwavering dedication to incident prevention has consistently earned Quicka industry-wide recognition and annual safety excellence awards.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Our ultimate goal is zero harm. Through continuous operational auditing and adopting global best practices, we safeguard our most valuable assets—our people and your cargo.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Sidebar CTA */}
        <div className="lg:w-1/3">
          <div className="bg-brand-primary relative overflow-hidden rounded-md shadow-xl text-center p-10 py-16 flex flex-col items-center justify-center">
            {/* World Map Background (Subtle) */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-20"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-white rounded p-2 mb-8 shadow-lg inline-block rotate-0">
                <Image 
                  src="/images/quicka1.png" 
                  alt="Quicka Nig Ltd Logo" 
                  width={100} 
                  height={40} 
                  className="w-[80px] h-auto object-contain"
                />
              </div>
              
              <h3 className="text-white text-3xl font-extrabold mb-8 leading-tight drop-shadow-md">
                Get an easy quotation for your industry
              </h3>
              
              <Link href="/contact#contact-form" className="bg-white text-brand-accent hover:text-brand-primary hover:bg-gray-50 transition-colors font-extrabold px-8 py-4 rounded-md shadow-lg w-full max-w-[250px] uppercase tracking-wide inline-block">
                Contact Now
              </Link>
            </div>
          </div>
        </div>

      </div>
      
      <Cta />
      <Footer />
    </main>
  );
}
