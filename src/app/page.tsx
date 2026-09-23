import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import ImageGrid from "@/components/ImageGrid";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-light font-sans">
      <Header />
      <Hero />
      <Services />
      <Stats />
      <ImageGrid />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
