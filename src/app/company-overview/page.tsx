import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutOverview from "@/components/AboutOverview";
import Cta from "@/components/Cta";

export default function CompanyOverviewPage() {
  return (
    <main className="min-h-screen bg-brand-light font-sans">
      <Header />
      
      {/* Page Header */}
      <div className="relative text-white py-24 md:py-32 px-4 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/images/ship2.jpg')" }}></div>
        <div className="absolute inset-0 bg-[#1A2B48]/70 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center mt-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md">
            Company Overview
          </h1>
          <p className="text-brand-primary font-bold tracking-widest text-sm uppercase drop-shadow-md">
            Home / About Us / Company Overview
          </p>
        </div>
      </div>

      {/* Main Content */}
      <AboutOverview />
      
      <Cta />
      <Footer />
    </main>
  );
}
