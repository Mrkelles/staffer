
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const perks = [
  {
    title: "Flexible Working",
    description: "Work from home or in our modern, collaborative office spaces.",
    icon: "/icons/flexible-work.svg",
  },
  {
    title: "Competitive Salary",
    description: "We offer competitive salaries and a generous benefits package.",
    icon: "/icons/competitive-salary.svg",
  },
  {
    title: "Career Growth",
    description: "Opportunities for professional development and career advancement.",
    icon: "/icons/career-growth.svg",
  },
  {
    title: "Supportive Culture",
    description: "A friendly and supportive team that values collaboration and innovation.",
    icon: "/icons/supportive-culture.svg",
  },
];

export default function CareersPage() {
  return (
    <div className="bg-[#F7ECE0] min-h-screen">
      <header className="py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-serif text-[#272980]">Our Careers</h1>
          <nav>
            <Link href="/jobs" legacyBehavior>
              <a className="text-[#7A7580] hover:text-[#272980]">All open positions</a>
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <section className="text-center">
          <h2 className="text-sm text-[#8E8C96] uppercase tracking-widest">JOIN OUR TEAM</h2>
          <p className="text-4xl md:text-5xl font-serif text-[#272980] mt-4 max-w-3xl mx-auto">
            Become a Part of a Team That Values Your Security Expertise
          </p>
          <div className="flex justify-center my-8">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10H38" stroke="#2B2D82" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="20" cy="10" r="3" fill="#F0A582"/>
            </svg>
          </div>
        </section>

        <section className="my-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <Image src="https://picsum.photos/seed/career1/600/800" alt="Team photo 1" width={600} height={800} className="rounded-lg object-cover w-full h-full" />
            </div>
            <div className="md:col-span-3 grid grid-cols-2 gap-4">
              <Image src="https://picsum.photos/seed/career2/600/400" alt="Team photo 2" width={600} height={400} className="rounded-lg object-cover w-full" />
              <Image src="https://picsum.photos/seed/career3/600/400" alt="Team photo 3" width={600} height={400} className="rounded-lg object-cover w-full" />
              <div className="col-span-2">
                <Image src="https://picsum.photos/seed/career4/1200/400" alt="Team photo 4" width={1200} height={400} className="rounded-lg object-cover w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="my-24">
          <div className="text-left max-w-xl">
            <h3 className="text-sm text-[#8E8C96] uppercase tracking-widest">WHY JOIN US?</h3>
            <p className="text-3xl font-serif text-[#272980] mt-4">
              We offer more than just a job. We offer a career.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {perks.map((perk, index) => (
              <Card key={index} className={`rounded-2xl p-6 text-center ${index === 1 ? 'bg-[#FFC695]' : 'bg-[#EFE7E1]'}`}>
                <CardContent>
                  <div className="flex justify-center mb-4">
                    {/* Placeholder for icons */}
                  </div>
                  <h4 className={`text-lg font-semibold ${index === 1 ? 'text-[#C2624A]' : 'text-[#272980]'}`}>{perk.title}</h4>
                  <p className="text-sm text-[#7A7580] mt-2">{perk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="my-24 text-center">
            <h2 className="text-3xl font-serif text-[#272980]">Ready to start your career with us?</h2>
            <p className="text-[#7A7580] mt-4 max-w-xl mx-auto">
                We are always looking for talented individuals to join our team. Browse our open positions and find the perfect role for you.
            </p>
            <Button asChild className="mt-8 bg-[#272980] text-white hover:bg-[#2B2D82] rounded-full px-8 py-3">
                <Link href="/jobs">
                    See all open positions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </section>
      </main>
    </div>
  );
}
