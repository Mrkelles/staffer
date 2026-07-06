import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
//import { CourseCard } from '@/components/course-card';
//import { courses, instructors, bundles } from '@/lib/data';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  Users, 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  CheckCircle2, 
  Star,
  Quote
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Foot } from './components/layout/footer';
import { Head } from './components/layout/header';
import Navbar from './components/layout/navbar';
import Hero from './(pages)/home/components/Hero';
import WhyChooseUs from './(pages)/home/components/chooseUs';
import OurVision from './(pages)/home/components/vision';
import WhatWeDo from './(pages)/home/components/whatWeDo';
import WhoWeAre from './(pages)/home/components/whoWeAre';
import Talent from './(pages)/home/components/talent';
import CtaCarousel from './(pages)/home/components/ctaSlider';
import DualCta from './(pages)/home/components/dualCTA';
import CoreValuesSection from './(pages)/home/components/values';

export default function Home() {
  //const featuredCourses = courses.slice(0, 3);

  const stats = [
    { label: 'Active Students', value: '50,000+', icon: Users },
    { label: 'Job Placement', value: '94%', icon: Briefcase },
    { label: 'Expert Mentors', value: '100+', icon: GraduationCap },
    { label: 'Success Stories', value: '10k+', icon: Trophy },
  ];

  const testimonials = [
    {
      "name": "Arthur Pendelton",
      "role": "Project Director at Vanguard Commercial Build",
      "content": "Commonwealth has completely redefined our site security. Their SIA static guards are punctual, highly professional, and their response time for emergency shift cover has been flawless.",
      "avatar": "https://picsum.photos/seed/arthur/400/400"
    },
    {
      "name": "Fiona Gallagher",
      "role": "Operations Manager at Apex Property Developers",
      "content": "Finding reliable, CSCS-certified labourers on short notice used to be a massive headache. Commonwealth delivers fully vetted operatives exactly when we need them, keeping our project timelines perfectly on track.",
      "avatar": "https://picsum.photos/seed/fiona/400/400"
    },
    {
      "name": "Simon Vance",
      "role": "Facilities Director at Horizon Management",
      "content": "Our end-of-build handovers require an intense level of detail. The commercial cleaning teams supplied by Commonwealth are meticulous, structured, and always arrive fully uniformed and ready to deliver.",
      "avatar": "https://picsum.photos/seed/simon/400/400"
    },
    {
      "name": "Gary Lineker",
      "role": "Logistics Hub Manager at Matrix Warehousing",
      "content": "With Commonwealth, compliance is a guarantee, not a gamble. Knowing that every single operative deployed to our facility has undergone comprehensive Right to Work and background verifications gives us absolute peace of mind.",
      "avatar": "https://picsum.photos/seed/gary/400/400"
    }
  ];

  const faqs = [
    {
      "q": "What areas across the UK do you cover?",
      "a": "While our main operations are focused heavily across Manchester, we provide integrated facilities management, security, and workforce solutions to clients nationwide across the UK."
    },
    {
      "q": "How quickly can you deploy staff to a site?",
      "a": "We specialize in rapid deployment. Thanks to our deep local talent pools, we can frequently supply urgent site cover or emergency staffing requests within 24 hours of your initial inquiry."
    },
    {
      "q": "How do you verify the compliance and legal status of your operatives?",
      "a": "Compliance is our baseline. Every single operative undergoes rigorous internal vetting before deployment, which includes comprehensive Right to Work verifications, active SIA license checks for security personnel, and valid CSCS card validation for construction labourers."
    },
    {
      "q": "Can you provide both short-term temporary cover and long-term staffing?",
      "a": "Yes. We offer fully flexible workforce configurations tailored to your project timeline, whether you need a temporary clean-up team for an end-of-build handover or a permanent static security team for a multi-year development."
    },
    {
      "q": "Are your cleaning and security teams fully equipped and managed?",
      "a": "Absolutely. We supply structured, thoroughly trained, and fully uniformed teams. Our management infrastructure takes full accountability for their on-site performance, equipment, and service delivery."
    },
    {
      "q": "What sectors do you currently support?",
      "a": "We regularly support construction sites, commercial office properties, residential developments, warehousing facilities, and complex logistics hubs with integrated cleaning, security, and labour services."
    }
  ];

  return (
    <>
    {/* <Head />   */}
    <div className="min-h-screen w-full flex items-start justify-center relative overflow-hidden antialiased pb-[80px]">
      {/* 3D Visual Ghost Background Brand Canvas Elements */}
      <div className="absolute top-5 left-10 text-[140px] text-[#F7ECE0]/15 pointer-events-none z-0">◈</div>
      <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 text-[clamp(80px,18vw,200px)] font-bold text-[#F7ECE0]/[0.12] tracking-[-0.02em] whitespace-nowrap pointer-events-none z-0 lowercase">commonwealth</div>
      <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-[clamp(80px,18vw,200px)] font-bold text-[#F7ECE0]/[0.12] tracking-[-0.02em] whitespace-nowrap pointer-events-none z-0 lowercase">commonwealth</div>

      {/* Floating Application Frame wrapper    */}
      <main className="w-full bg-[#F7ECE0] max-w-[1200px] shadow-[0_32px_80px_rgba(0,0,0,0.20)] rounded-2xl relative z-10 overflow-hidden">
        <Hero />
        <OurVision />
        <div className="w-4/5 h-[0.5px] border-t border-black/[0.08] mx-auto" />
        <WhoWeAre />
        <WhyChooseUs />
        <CoreValuesSection />
        <Talent />
        <CtaCarousel />
        

              {/* Testimonials Slider */}
      <section className="w-full py-12 md:py-12 lg:py-16 bg-[#F7ECE0]">
        <div className="container px-4 md:px-6">
          <h2 className="m-0 font-bold text-center tracking-[-0.01em] text-[#272980] pb-4 leading-[1.2]" style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}>What Our Clients Say</h2>

          {/* Short White Underline Rule */}
        <div className="rounded-[2px] mx-auto" style={{ width: '80px', height: '2px', backgroundColor: '#272980', marginTop: '8px', marginBottom: '8px' }} aria-hidden="true" />

          <div className="max-w-5xl mx-auto px-4 sm:px-12">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((t, i) => (
                  <CarouselItem key={i}>
                    <Card className="border-none bg-white shadow-2xl overflow-hidden mx-2 my-4">
                      <CardContent className="p-6 md:p-10">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start text-center md:text-left">
                          <div className="shrink-0">
                            <Image
                              src={t.avatar}
                              alt={t.name}
                              width={240}
                              height={240}
                              className="w-24 h-24 md:w-60 md:h-60 rounded-2xl object-cover shadow-xl border-4 border-white"
                            />
                          </div>
                          <div className="flex-1 space-y-4 relative">
                            <Quote className="h-10 w-10 md:h-12 md:w-12 text-[#272980] opacity-20 absolute -top-4 -left-4 md:-top-6 md:-left-6" />
                            <p className="text-base md:text-xl italic text-[#7A7580] leading-relaxed">
                              &quot;{t.content}&quot;
                            </p>
                            <div className="pt-4 md:pt-6 border-t border-[#D8B7C2]">
                              <div className="font-bold text-lg md:text-2xl text-[#272980]">{t.name}</div>
                              <div className="text-[#272980] font-medium text-base md:text-lg">{t.role}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-12 h-12 w-12 bg-[#272980] text-white hover:bg-[#272980]/90 border-none shadow-lg" />
              <CarouselNext className="hidden sm:flex -right-12 h-12 w-12 bg-[#272980] text-white hover:bg-[#272980]/90 border-none shadow-lg" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-12 lg:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="m-0 font-bold text-center tracking-[-0.01em] text-[#272980] leading-[1.2]" style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}>Frequently Asked Questions</h2>

            {/* Short Navy Underline Rule */}
            <div className="rounded-[2px] mx-auto" style={{ width: '80px', height: '2px', backgroundColor: '#272980', marginTop: '16px', marginBottom: '8px' }} aria-hidden="true" />

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-semibold text-[#272980]">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-[#7A7580]">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/*<DualCta /> */}
      <Foot />
      </main>
    </div>
    
      {/* Hero Section 
      <Navbar />
      <section className="w-full py-6 md:py-12 lg:py-16 bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                  Code Your Future, Build the New World
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Learn high-impact tech skills from world-class engineers. Master AI, Web Development, and Cloud Infrastructure today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/courses">Explore Tech Courses</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/bundles">View Career Paths</Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto aspect-video overflow-hidden rounded-xl bg-muted lg:order-last lg:w-full">
              <Image
                src="https://picsum.photos/seed/tech-hero/600/400"
                data-ai-hint="software engineering"
                width={600}
                height={400}
                alt="Developer working on complex code"
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      */}
      
      

      {/* Stats Section 
      <section className="w-full py-6 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center space-y-2 text-center">
                <div className="p-3 bg-primary-foreground/10 rounded-full">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm font-medium opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* About Section 
      <section className="w-full py-6 md:py-12 lg:py-16 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
              <Image
                src="https://picsum.photos/seed/about/600/600"
                data-ai-hint="collaboration tech"
                width={600}
                height={600}
                alt="Students collaborating"
                className="relative rounded-2xl shadow-2xl object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Why Skill Bloom?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by industry veterans, Skill Bloom isn&apos;t just another video platform. We provide curated, rigorous learning paths designed to bridge the gap between academic theory and industry reality.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-world projects that mirror industry challenges.",
                  "Mentorship from engineers at top-tier tech companies.",
                  "Active community of 50k+ ambitious developers.",
                  "Verified certificates recognized globally."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="default" size="lg">
                <Link href="/instructors">Meet Our Instructors</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      */}
      


      {/* Career Paths  Section */}



       {/* Courses Section 
      <section className="w-full py-6 md:py-12 lg:py-16 bg-primary text-primary-foreground">
        
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Ready to start your tech journey?</h2>
            <p className="text-xl opacity-90">
              Join 50,000+ students building the future. Get started today and get your first course at 50% off.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Button asChild size="lg" variant="secondary" className="px-8">
                <Link href="/courses">Sign Up Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 bg-transparent hover:bg-white/10">
                <Link href="/bundles">View Bundles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      */}

      
    </>
  );
}
