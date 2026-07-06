import React from 'react';

export default function Talent() {
  const specializations = [
    {
      title: "Enquiry & Initial Consultation",
      body: "Your operational continuity starts with a streamlined onboarding touchpoint. Submit your resource requests, timeline objectives, and coverage vulnerabilities through our rapid intake interface, allowing our triage team to isolate immediate risk areas and capacity gaps.",
      ctaLabel: "Initiate Request",
      /* Message Desk / Incoming Request Icon: Multi-stroke sketch/blueprint style */
      icon: (
        <svg className="w-11 h-11 text-[#D8B7C2]" fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 8h10M7 12h7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Requirements Matrix Confirmation",
      body: "We translate complex site variables into actionable service level agreements. Our logistics analysts confirm site-specific protocols, operating hour compliance, safety profiles, and precise skill mandates, creating a bulletproof operational blueprint for deployment.",
      ctaLabel: "Lock Requirements",
      /* Settings Matrix / Blueprint Gears Icon: Multi-stroke sketch/blueprint style */
      icon: (
        <svg className="w-11 h-11 text-[#D8B7C2]" fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Vetted Tactical Deployment",
      body: "Risk mitigation meets execution. Every security, cleaning, or maintenance operator assigned to your infrastructure is meticulously verified, fully ticketed, and background-cleared. We embed verified professionals directly onto your property ready for high-performance integration.",
      ctaLabel: "Deploy Personnel",
      /* Shield Verification Icon: Multi-stroke sketch/blueprint style */
      icon: (
        <svg className="w-11 h-11 text-[#D8B7C2]" fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 11l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Continuous Supervision & Adaptive Cover",
      body: "We actively monitor on-site delivery through a resilient management ecosystem. Our infrastructure features multi-layered compliance audits and deep local labor reserves, ensuring instant replacement dispatch to secure your timeline from sudden staffing shocks.",
      ctaLabel: "Secure Resilience",
      /* Loop / Ongoing Optimization Icon: Multi-stroke sketch/blueprint style */
      icon: (
        <svg className="w-11 h-11 text-[#D8B7C2]" fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Structured Commercial Settlement",
      body: "Enjoy absolute fiscal transparency with tailored billing frameworks. We align operational delivery metrics with custom weekly or monthly billing cycles, distributing comprehensive data auditing records alongside clear, clean, and compliance-ready invoices.",
      ctaLabel: "Review Accounts",
      /* Billing Ledger / Analytics Document Icon: Multi-stroke sketch/blueprint style */
      icon: (
        <svg className="w-11 h-11 text-[#D8B7C2]" fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#272980] px-6 py-[72px] md:px-12 lg:px-[clamp(24px,6vw,80px)] lg:pb-20 font-sans box-border">
      
      {/* BACKGROUND TEXTURE: Subdued photographic layer under a multiply/normal color overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center mix-blend-multiply opacity-[0.12]"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80')`,
          backgroundColor: 'rgba(39,41,128,0.88)'
        }}
        aria-hidden="true"
      />

      {/* DECORATIVE CURVED ARROW: Top right section element */}
      <div className="absolute top-6 right-6 md:top-10 md:right-16 w-[100px] h-[70px] z-10 pointer-events-none opacity-25 hidden sm:block">
        <svg className="w-full h-full text-white" fill="none" viewBox="0 0 100 70">
          <path 
            d="M 10,15 C 45,5 75,20 85,50" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round"
            markerEnd="url(#arrow-head)"
          />
          <defs>
            <marker id="arrow-head" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="currentColor" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* CORE CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1100px]">
        
        {/* CENTERED HEADLINE BLOCK */}
        <div className="mx-auto mb-12 max-w-[600px] text-center text-white flex flex-col items-center">
        <span className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-4 block">
            How we Work
          </span>
          
          <h2 className="m-0 font-bold tracking-[-0.01em] leading-[1.2]" style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}>
          A Frictionless, Multi-Layered Approach to Securing Operational Continuity
          </h2>
          <p className="m-0 mt-2.5 text-[13px] font-normal leading-[1.5]">
          From your initial intake assessment to verified tactical deployment and adaptive timeline monitoring, our structured operational lifecycle mitigates client risk at every touchpoint.
          </p>

          {/* Short Navy Underline Rule */}
        <div className="rounded-[2px]" style={{ width: '40px', height: '2px', backgroundColor: '#FFFFFF', marginTop: '16px' }} aria-hidden="true" />
        </div>

        {/* 3-COLUMN EQUAL CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {specializations.map((spec, index) => (
            <div 
              key={index}
              className="group bg-[#F7ECE0] rounded-[14px] border border-black/[0.06] p-7 flex flex-col justify-between min-h-[340px] text-left transition-all duration-200 ease-out shadow-[0_4px_24px_rgba(0,0,0,0.10)] hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] box-border"
            >
              {/* Top Content Stack */}
              <div className="flex flex-col items-start text-left w-full">
                {/* Outline Icon Placeholder/Container */}
                <div className="mb-5 flex items-center justify-center bg-transparent select-none">
                  {spec.icon}
                </div>
                
                {/* Card Title */}
                <h3 className="m-0 text-[17px] font-bold text-[#272980] tracking-[-0.01em] leading-[1.25] mb-3">
                  {spec.title}
                </h3>
                
                {/* Card Body */}
                <p className="m-0 text-[12px] font-normal text-[#7A7580] leading-[1.70] mb-6">
                  {spec.body}
                </p>
              </div>

              {/* Full Width Outlined Pill CTA Button */}
              <button 
                type="button"
                className="w-full bg-transparent border-[1.5px] border-[#272980] rounded-[100px] pt-2.5 pb-2.5 pl-[18px] pr-2.5 flex flex-row items-center justify-between cursor-pointer group/btn transition-colors duration-200 ease-out group-hover:border-[#D8B7C2] box-border"
              >
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#272980] transition-colors duration-200 ease-out group-hover:text-[#D8B7C2]">
                  {spec.ctaLabel}
                </span>
                
                {/* Dark filled trailing icon circle */}
                <div className="w-7 h-7 rounded-full bg-[#272980] flex items-center justify-center transition-colors duration-200 ease-out group-hover:bg-[#D8B7C2] flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}