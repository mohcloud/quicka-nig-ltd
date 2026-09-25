import { ClipboardList, Users, User, Award, ShieldCheck, Lightbulb, Target, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function AboutOverview() {
  return (
    <section className="w-full bg-white font-sans">
      {/* Top Section: Who We Are */}
      <div className="max-w-7xl mx-auto px-4 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h4 className="text-brand-primary font-bold tracking-widest text-sm uppercase mb-4">
            About QUICKA
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-accent mb-6 leading-tight">
            Who We Are & <br/> What <span className="text-brand-primary">We do</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Quicka International Limited is a logistics and supply chain company based in Port Harcourt, River state Nigeria. Over the years, we've built a solid reputation across West Africa for reliable service, sound business practices, and consistent quality.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our leadership team brings deep, hands-on knowledge of the industry to every job. That experience is what turns complicated supply chain problems into real, workable solutions for our clients. We combine practical port operations expertise with a strong understanding of local trade, so your time-critical shipments move on schedule, every time.
          </p>
        </div>

        <div className="lg:w-1/2 relative h-[400px] sm:h-[500px] w-full mt-10 lg:mt-0 pl-4 sm:pl-10 pt-4 sm:pt-10">
          {/* Decorative Blocks */}
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-brand-primary z-0"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-brand-accent z-0"></div>
          
          {/* Image */}
          <div className="relative z-10 w-full h-full shadow-2xl border-4 border-white overflow-hidden">
             <Image 
                src="/images/ship4.jpeg"
                alt="Quicka Logistics Operation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center z-0"
             />
             {/* Center Logo Box */}
             <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center transform border border-gray-100 p-2 rounded">
                   <Image 
                     src="/images/quicka1.png" 
                     alt="Quicka Nig Ltd Logo" 
                     width={100} 
                     height={40} 
                     className="w-[80px] sm:w-[100px] h-auto object-contain"
                   />
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-brand-light py-12 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <ClipboardList className="w-10 h-10 text-brand-primary mb-4" strokeWidth={1.5} />
            <div className="text-3xl md:text-4xl font-extrabold text-brand-accent mb-2">32+</div>
            <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">Project Completed</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="w-10 h-10 text-brand-primary mb-4" strokeWidth={1.5} />
            <div className="text-3xl md:text-4xl font-extrabold text-brand-accent mb-2">28</div>
            <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">Satisfied Clients</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <User className="w-10 h-10 text-brand-primary mb-4" strokeWidth={1.5} />
            <div className="text-3xl md:text-4xl font-extrabold text-brand-accent mb-2">6+</div>
            <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">Employees</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award className="w-10 h-10 text-brand-primary mb-4" strokeWidth={1.5} />
            <div className="text-3xl md:text-4xl font-extrabold text-brand-accent mb-2">26.4%</div>
            <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Our Values */}
      <div className="max-w-7xl mx-auto px-4 py-20 lg:py-28 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-5/12 h-[400px] sm:h-[500px] lg:h-[700px] w-full relative overflow-hidden shadow-lg rounded-sm">
           <Image 
              src="/images/value1.jpg"
              alt="Our Values"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
           />
        </div>
        
        <div className="lg:w-7/12 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-[2px] bg-brand-primary"></div>
             <h4 className="text-brand-primary font-bold tracking-widest text-sm uppercase">
               More About Us
             </h4>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-accent mb-10">
            Our Values
          </h2>

          <div className="flex flex-col gap-6">
            {/* Value Card 1 */}
            <div className="bg-white rounded-lg p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50 flex gap-6 items-start hover:-translate-y-1 transition-transform duration-300">
               <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7 text-brand-accent" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-brand-accent mb-2">Customer Service</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   We deliver essential goods when and where our customers need them. That reliability is what earns their trust and keeps them coming back.
                 </p>
               </div>
            </div>
            {/* Value Card 2 */}
            <div className="bg-white rounded-lg p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50 flex gap-6 items-start hover:-translate-y-1 transition-transform duration-300">
               <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                  <Lightbulb className="w-7 h-7 text-brand-accent" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-brand-accent mb-2">Entrepreneurship</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   We stay ahead by adopting new methods and technology quickly, rather than waiting for the market to catch up around us.
                 </p>
               </div>
            </div>
            {/* Value Card 3 */}
            <div className="bg-white rounded-lg p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50 flex gap-6 items-start hover:-translate-y-1 transition-transform duration-300">
               <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                  <Target className="w-7 h-7 text-brand-accent" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-brand-accent mb-2">Excellence</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   We're a large team working toward one goal: the best possible service for our customers and stakeholders. That means teamwork, on-time delivery, respect, and rewarding people on merit.
                 </p>
               </div>
            </div>
            {/* Value Card 4 */}
            <div className="bg-white rounded-lg p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50 flex gap-6 items-start hover:-translate-y-1 transition-transform duration-300">
               <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                  <TrendingUp className="w-7 h-7 text-brand-accent" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-brand-accent mb-2">Leadership</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">
                   We aim to lead, not just compete, in our business, our markets, and our communities. We get there through continuous improvement, strong partnerships, and professionalism.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
