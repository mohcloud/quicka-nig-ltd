import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="bg-brand-accent pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            Get Your Project Done
          </h2>
          <p className="text-brand-primary font-semibold">
            Our logistics experts are standing by to streamline your supply chain.
          </p>
        </div>
        <Link href="/contact" className="bg-brand-primary hover:bg-brand-primary/80 text-white border border-white/20 rounded-md px-10 py-6 font-semibold shadow-lg text-center flex items-center justify-center transition-colors">
          Get A Quote
        </Link>
      </div>
    </section>
  );
}
