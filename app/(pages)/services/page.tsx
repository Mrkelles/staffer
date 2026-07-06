
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: 'Cleaning Services',
    icon: '🧼',
    description: 'We provide professional cleaning services for commercial and residential properties. Our services include regular cleaning, deep cleaning, and specialized cleaning for all types of facilities. We offer',
    image: 'https://picsum.photos/seed/cleaning/800/600',
    points: [
        'Commercial office cleaning',
        'Construction site cleaning',
        'End-of-build cleans',
        'Residential block cleaning',
        'Contract cleaning services'
    ]
  },
  {
    title: 'Security Services (SIA Licensed)',
    icon: '🛡',
    description: 'Our SIA-licensed security staff provide a range of security solutions, including manned guarding, mobile patrols, and event security. We ensure the safety and security of your premises, assets, and people. We offer',
    image: 'https://picsum.photos/seed/security/800/600',
    points: [
      'Construction site security',
      'Static guarding',
      'Manned guarding',
      'Front-of-house security',
      'Night patrol services'
    ]
  },
  {
    title: 'CSCS Labour Supply',
    icon: '🏗',
    description: 'We supply CSCS-certified labour for the construction industry. Our reliable and skilled workforce is available for short-term and long-term contracts, ensuring your projects are completed on time and to the highest standards. We offer',
    image: 'https://picsum.photos/seed/labour/800/600',
    points: [
        'General site labourers',
        'Construction operatives',
        'Clean-up teams',
        'Skilled assistants',
        'Temporary & long-term staffing'
    ]
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#F7ECE0] min-h-screen">
      <header className="py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-serif text-[#272980]">Our Services</h1>
          <nav>
            <Link href="/" legacyBehavior>
              <a className="text-[#7A7580] hover:text-[#272980]">Home</a>
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <section className="text-center">
          <h2 className="text-sm text-[#8E8C96] uppercase tracking-widest">WHAT WE DO</h2>
          <p className="text-4xl md:text-5xl font-serif text-[#272980] mt-4 max-w-3xl mx-auto">
            Comprehensive Solutions, Tailored for You
          </p>
          <div className="flex justify-center my-8">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10H38" stroke="#2B2D82" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="20" cy="10" r="3" fill="#F0A582"/>
            </svg>
          </div>
        </section>

        <section className="mt-16 space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 !== 0 ? 'md:col-start-2' : ''}>
                <Image src={service.image} alt={service.title} width={800} height={600} className="rounded-lg object-cover w-full" />
              </div>
              <div className={index % 2 !== 0 ? 'md:col-start-1' : ''}>
                <h3 className="text-3xl font-serif text-[#272980]">{service.icon} {service.title}</h3>
                <p className="text-[#7A7580] mt-4 text-lg">{service.description}</p>
                <ul className="text-[#7A7580] mt-4 space-y-2">
                    {service.points.map((point, i) => (
                        <li key={i} className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-[#272980]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            {point}
                        </li>
                    ))}
                </ul>
                 <Button asChild className="mt-6 bg-transparent text-[#272980] border border-[#272980] hover:bg-[#EFE7E1] rounded-full px-8">
                    <Link href="/quote">Request a Quote</Link>
                </Button>
              </div>
            </div>
          ))}
        </section>

        <section className="my-24 bg-[#EFE7E1] rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-serif text-[#272980]">Ready to get started?</h3>
            <p className="text-[#7A7580] mt-4 max-w-xl mx-auto">Let us know your needs, and we’ll provide a tailored solution and a competitive quote for your review.</p>
            <Button asChild className="mt-8 bg-[#272980] text-white hover:bg-[#2B2D82] rounded-full px-12 py-4 text-lg">
                <Link href="/quote">Get a Free Quote</Link>
            </Button>
        </section>

      </main>
    </div>
  );
}
