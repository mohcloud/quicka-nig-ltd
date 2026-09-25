import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import { Phone, Mail } from "lucide-react";

const jobs = [
  {
    title: "1. Front Office Executive",
    sections: [
      {
        heading: "Responsibilities",
        items: [
          "Serve as the first point of contact, warmly welcoming and greeting clients and guests",
          "Professionally manage and route incoming calls and inquiries",
          "Receive, sort, and distribute daily mail, packages, and important documents",
          "Maintain a pristine, fully-equipped, and professional front desk environment",
          "Provide accurate, helpful information regarding our logistics services and operations",
          "Address and resolve customer inquiries and complaints promptly, escalating complex issues to appropriate departments",
          "Maintain accurate daily activity logs, incident reports, and other documentation as required by management",
          "Proactively monitor and manage office supply inventory",
          "Uphold and enforce all office policies and security procedures",
          "Ensure compliance with health, safety, and cleanliness standards in the reception area"
        ]
      },
      {
        heading: "Education, Skills & Experience",
        items: [
          "High school diploma or equivalent; further administrative qualifications are a plus",
          "Proven experience in customer relations or front office roles",
          "Proficiency in modern office software (MS Office suite) and familiarity with booking/payment systems"
        ]
      },
      {
        heading: "Key Competencies",
        items: [
          "Exceptional customer service orientation and interpersonal skills",
          "High attention to detail and accuracy in administrative tasks",
          "Strong ability to multitask, prioritize, and manage time effectively",
          "Excellent verbal and written communication skills",
          "Ability to remain calm, professional, and composed under pressure",
          "Sound judgment and confident decision-making capabilities"
        ]
      }
    ]
  },
  {
    title: "2. Accountant",
    sections: [
      {
        heading: "Job Purpose",
        items: [
          "Manage comprehensive general ledger transactions while ensuring strict compliance with internal controls and financial regulations",
          "Prepare, analyze, and maintain critical financial reports and statements",
          "Oversee tax preparation and ensure timely, accurate filing and payment of all corporate taxes",
          "Evaluate ongoing financial operations to recommend industry best practices and strategic solutions",
          "Provide actionable guidance on cost reduction, revenue enhancement, and profit maximization",
          "Conduct detailed financial forecasting and comprehensive risk analysis"
        ]
      },
      {
        heading: "Qualification",
        items: [
          "BSc or HND in Accounting, Finance, or a related field",
          "Professional certifications (e.g., ICAN, ACCA) and prior experience in the logistics sector will be a significant advantage"
        ]
      }
    ]
  },
  {
    title: "3. Operations Executive",
    subtitle: "(1 Position Available)",
    sections: [
      {
        heading: "Qualification",
        items: [
          "BSc or HND in Logistics, Supply Chain Management, Business Administration, or a related field"
        ]
      }
    ]
  },
  {
    title: "4. Business Development & Relationship Officer",
    sections: [
      {
        heading: "Responsibilities",
        items: [
          "Collaborate with top-level management to implement robust strategies that drive company growth and expand market reach",
          "Cultivate and maintain strong, enduring relationships with key clients and corporate partners",
          "Consistently meet and exceed established corporate sales targets and KPIs",
          "Deliver transparent, concise, and frequent communication to clients regarding service updates and project statuses",
          "Supervise and coordinate marketing team activities to ensure unified efforts in promoting the company's logistics solutions"
        ]
      }
    ]
  },
  {
    title: "5. Facility Cleaner",
    subtitle: "(1 Position Available)",
    sections: [
      {
        heading: "Responsibilities",
        items: [
          "Maintain the cleanliness and hygiene of designated facility areas (including sweeping, vacuuming, mopping, and restroom sanitation)",
          "Conduct routine inspections to ensure the facility meets high health and safety standards",
          "Execute deep-cleaning tasks and participate in special facility maintenance projects",
          "Promptly report any facility deficiencies, damages, or repair needs to management",
          "Perform minor adjustments and basic maintenance as required",
          "Work collaboratively with the broader team to maintain a professional environment",
          "Strictly adhere to all corporate health and safety regulations"
        ]
      },
      {
        heading: "Requirements",
        items: [
          "Proven previous experience in professional cleaning or facility maintenance",
          "Physical capability to handle heavy cleaning equipment and machinery",
          "Thorough knowledge of cleaning chemicals, supplies, and proper usage",
          "Familiarity with standard Material Safety Data Sheets (MSDS)"
        ]
      },
      {
        heading: "Qualification",
        items: [
          "BSc, HND, or equivalent relevant certification"
        ]
      }
    ]
  },
  {
    title: "6. IT Specialist & Social Media Manager",
    sections: [
      {
        heading: "Responsibilities",
        items: [
          "Install, configure, and maintain computer hardware, software, networks, and peripheral devices",
          "Proactively monitor IT systems to ensure optimal performance and security",
          "Provide prompt, effective resolution to technical service requests and system issues",
          "Diagnose and repair hardware or software malfunctions efficiently",
          "Manage corporate social media profiles, including content creation, scheduling, and community engagement",
          "Deliver comprehensive technical support to employees across the organization, both on-site and remotely"
        ]
      },
      {
        heading: "Qualification",
        items: [
          "BSc or HND in Computer Science, Information Technology, or a related field"
        ]
      }
    ]
  },
  {
    title: "7. Human Resources & Administrative Manager",
    sections: [
      {
        heading: "Description",
        items: [
          "This critical leadership role is responsible for driving HR initiatives—designing and delivering comprehensive policies across the talent lifecycle, executing HR strategies, and fostering positive employee relations within our fast-paced logistics operations."
        ]
      },
      {
        heading: "Responsibilities",
        items: [
          "Deliver proactive HR services that align with key corporate objectives while managing day-to-day HR operations",
          "Provide strategic guidance to the leadership team regarding labor optimization, talent management, and employee relations",
          "Build leadership capability across the organization through coaching, productive partnerships, and constructive feedback",
          "Design, implement, and ensure alignment on corporate HR policies and progressive programs",
          "Serve as a thought leader in talent acquisition, succession planning, retention strategies, and organizational development",
          "Counsel business leaders on complex associate relations issues and ensure full compliance with labor laws",
          "Spearhead initiatives that reinforce a high-performance culture, keeping top talent engaged and motivated"
        ]
      },
      {
        heading: "Qualifications",
        items: [
          "Bachelor's degree in Human Resources, Business Administration, or a related field (Master's preferred)",
          "Exceptional organizational skills with a strong attention to detail and follow-through",
          "Demonstrable ability to influence business decisions and build robust professional relationships",
          "Outstanding written and verbal communication capabilities",
          "Extensive experience in managing associate relations and large-scale HR projects",
          "A flexible, creative problem-solver with a high degree of professionalism and strict confidentiality",
          "Strong analytical skills to translate business needs into effective HR practices"
        ]
      }
    ]
  },
  {
    title: "8. Transport & Fleet Manager",
    sections: [
      {
        heading: "Responsibilities",
        items: [
          "Direct and oversee all complex transportation and fleet logistics activities",
          "Develop and sustain strategic relationships with transport partners, vendors, and regulatory bodies",
          "Rigorously monitor and optimize transportation costs to ensure operational efficiency",
          "Negotiate competitive freight rates and transportation contracts",
          "Develop proactive routing strategies to mitigate the effects of traffic congestion and logistical delays",
          "Champion environmental sustainability by implementing eco-friendly transport strategies and monitoring the corporate carbon footprint"
        ]
      },
      {
        heading: "Qualification",
        items: [
          "BSc or HND in Transport Management, Logistics, Supply Chain, or a related field"
        ]
      }
    ]
  },
  {
    title: "9. Professional Driver",
    subtitle: "(1 Position Available, Male Preferred for Heavy Duty)",
    sections: [
      {
        heading: "Duties and Responsibilities",
        items: [
          "Strictly adhere to safe driving practices and defensive driving protocols",
          "Comply with all state and national road safety regulations and transport standards",
          "Accurately navigate routes, maps, and schedules to ensure timely deliveries and passenger transport",
          "Assist passengers with boarding and meticulously load and secure cargo or baggage",
          "Maintain the vehicle's exterior and interior in a pristine, presentable condition at all times",
          "Perform routine vehicle maintenance checks (oil, fluids, tire pressure) and coordinate repairs to ensure optimal safety",
          "Accurately log routes, schedules, mileage, and collect/document payments and receipts when necessary"
        ]
      },
      {
        heading: "Qualification",
        items: [
          "High school diploma or equivalent; valid professional driver's license with an impeccable driving record",
          "Relevant experience, mechanical knowledge, and strong mental acuity for long-distance or heavy-duty driving"
        ]
      }
    ]
  }
];

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-white font-sans flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="relative text-white py-24 md:py-32 px-4 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/images/career.jpg')" }}></div>
        <div className="absolute inset-0 bg-[#1A2B48]/70 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center mt-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md">
            Join Our Growing Team
          </h1>
          <p className="text-brand-primary font-bold tracking-widest text-sm uppercase drop-shadow-md">
            Home / Career
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow max-w-7xl mx-auto px-4 py-20 w-full flex flex-col lg:flex-row gap-12 relative">
        
        {/* Left Column: Job Listings */}
        <div className="lg:w-3/4 flex flex-col gap-12">
          
          {/* Top Image Banner */}
          <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-lg flex items-center mb-6">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/career.jpg')" }}></div>
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            <div className="relative z-10 p-8 md:p-12 max-w-3xl">
              <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-md">Join Our Growing Team</h2>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                At Quicka International Limited, our employees are our most valuable asset. We believe a company is only as strong as its team. Your contributions are essential to achieving our collective goals, and in return, we provide an environment that fosters career satisfaction, continuous growth, and professional excellence.
              </p>
            </div>
          </div>

          {/* Job Mapping */}
          <div className="flex flex-col gap-16">
            {jobs.map((job, index) => (
              <div key={index} className="flex flex-col gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-1">{job.title}</h2>
                  {job.subtitle && <p className="text-gray-600 font-bold text-sm mb-4">{job.subtitle}</p>}
                </div>
                
                {job.sections.map((section, sIndex) => (
                  <div key={sIndex} className="flex flex-col gap-3">
                    <h3 className="font-bold text-[17px] text-brand-accent">{section.heading}:</h3>
                    <ul className="list-disc pl-5 flex flex-col gap-1">
                      {section.items.map((item, iIndex) => (
                        <li key={iIndex} className="text-gray-600 text-[15px] leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                
                <div className="mt-4">
                  <button className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-3 px-8 rounded-md transition-colors shadow-md">
                    Submit CV &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Sticky Contact Info Card */}
        <div className="lg:w-1/4">
          <div className="sticky top-28 bg-brand-primary text-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 z-0"></div>
             
             <div className="relative z-10 flex flex-col items-center">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 text-brand-primary shadow-lg">
                 <Phone className="w-7 h-7" />
               </div>
               
               <h3 className="text-xl font-extrabold mb-6">Contact Info:-</h3>
               
               <div className="flex flex-col gap-4 text-sm font-semibold">
                 <p>Phone: +234 813 885 3645</p>
                 <p>Email: info@quickanig.com</p>
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
