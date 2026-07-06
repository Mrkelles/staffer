import React from 'react';

export default function WhatWeDo() {
  // Step data shared cleanly between the left list and right network nodes
  const steps = [
    { id: 1, title: 'Precision Search', body: 'Deep programmatic tracking across hidden engineering repositories to isolate elite technical performers.', isActive: true },
    { id: 2, title: 'Synergistic Connect', body: 'Evaluating cultural archetypes and code-delivery metrics through automated pipeline assessments.', isActive: false },
    { id: 3, title: 'Frictionless Engage', body: 'Managing international tax compliance and regional data legalities for immediate production scaling.', isActive: false }
  ];

  return (
    <section className="relative w-full bg-[#FFFFFF] px-6 pb-20 md:px-12 lg:px-[clamp(24px,6vw,80px)] lg:pb-24 font-sans overflow-hidden box-border">
      
      {/* ANGLED TRANSITION BAND */}
      {/* Sits at the absolute top of this white section to catch the bleed of a preceding dark module */}
      <div 
        className="absolute top-0 left-0 right-0 w-full h-[100px] bg-[#272980] z-10 select-none pointer-events-none margin-bottom-[-1px]" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 55%, 0 100%)' }}
        aria-hidden="true"
      />

      {/* SECTION CONTENT CONTAINER */}
      <div className="mx-auto max-w-[1100px] pt-32 relative z-20">
        
        {/* CENTERED TITLE BLOCK */}
        <div className="text-center flex flex-col items-center mb-14 md:mb-16">
          <h2 className="text-[26px] sm:text-[30px] md:text-[clamp(26px,3vw,38px)] font-bold tracking-[-0.01em] text-[#272980] m-0 leading-[1.2]">
            Engineered Talent Infrastructure
          </h2>
          <p className="text-[13px] font-normal text-[#7A7580] m-0 mt-2 max-w-[420px] leading-[1.5]">
            How we map, validate, and integrate global technical leadership into enterprise systems.
          </p>
          {/* Heading Underline Rule */}
          <div className="w-[40px] h-[2px] bg-[#272980] rounded-[2px] mt-3 block" />
        </div>

        {/* 2-COLUMN CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[45fr_55fr] gap-12 md:gap-10 items-center">
          
          {/* LEFT COLUMN: PROCESS STEP LIST */}
          <div className="flex flex-col gap-10">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start gap-4 group">
                {/* Circle Icon Badge */}
                <div 
                  className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                    step.isActive ? 'bg-[#272980]' : 'bg-[#7A7580]'
                  }`}
                >
                  {step.id === 1 && (
                    <svg className="w-[18px] h-[18px] text-white stroke-current stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  )}
                  {step.id === 2 && (
                    <svg className="w-[18px] h-[18px] text-white stroke-current stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )}
                  {step.id === 3 && (
                    <svg className="w-[18px] h-[18px] text-white stroke-current stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m22 4-10 10.01-3-3" />
                    </svg>
                  )}
                </div>

                {/* Step Description Content */}
                <div className="text-left">
                  <h3 className="text-[16px] font-bold text-[#272980] m-0 mb-1.5 leading-[1.3]">
                    {step.title}
                  </h3>
                  <p className="text-[12px] font-normal text-[#7A7580] m-0 leading-[1.65] max-w-[280px]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: SVG PROCESS NODE CONSTELLATION DIAGRAM */}
          <div className="relative w-full h-[320px] bg-transparent flex items-center justify-center">
            
            {/* SVG Connection Lines Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
              {/* Top-Left Line to Center Hub */}
              <line x1="22%" y1="25%" x2="50%" y2="50%" stroke="#272980" strokeOpacity="0.35" strokeWidth="1.5" />
              {/* Bottom-Left Line to Center Hub */}
              <line x1="22%" y1="75%" x2="50%" y2="50%" stroke="#272980" strokeOpacity="0.35" strokeWidth="1.5" />
              {/* Bottom-Right Line to Center Hub */}
              <line x1="78%" y1="70%" x2="50%" y2="50%" stroke="#272980" strokeOpacity="0.35" strokeWidth="1.5" />
            </svg>

            {/* SCATTERED NETWORK DECORATIVE DOTS */}
            <div className="absolute top-[15%] right-[25%] w-1.5 h-1.5 rounded-full bg-[#272980]" aria-hidden="true" />
            <div className="absolute top-[40%] left-[15%] w-2.5 h-2.5 rounded-full bg-[#272980]/45" aria-hidden="true" />
            <div className="absolute bottom-[20%] left-[38%] w-[14px] h-[14px] rounded-full bg-[#272980]/20" aria-hidden="true" />
            <div className="absolute bottom-[35%] right-[15%] w-1.5 h-1.5 rounded-full bg-[#272980]" aria-hidden="true" />
            <div className="absolute top-[65%] right-[32%] w-2.5 h-2.5 rounded-full bg-[#272980]/45" aria-hidden="true" />

            {/* PROCESS NODE PILLS */}
            {/* Top-Left Pill */}
            <div 
              className="absolute bg-white border-[1.5px] border-[#272980] rounded-[100px] px-4 py-1.5 text-[12px] font-semibold text-[#272980] shadow-[0_2px_8px_rgba(39,41,128,0.12)] transition-transform duration-200 hover:-translate-y-0.5"
              style={{ top: '20%', left: '5%' }}
            >
              Precision Search
            </div>

            {/* Bottom-Left Pill */}
            <div 
              className="absolute bg-white border-[1.5px] border-[#272980] rounded-[100px] px-4 py-1.5 text-[12px] font-semibold text-[#272980] shadow-[0_2px_8px_rgba(39,41,128,0.12)] transition-transform duration-200 hover:-translate-y-0.5"
              style={{ bottom: '20%', left: '5%' }}
            >
              Synergistic Connect
            </div>

            {/* Bottom-Right Pill */}
            <div 
              className="absolute bg-white border-[1.5px] border-[#272980] rounded-[100px] px-4 py-1.5 text-[12px] font-semibold text-[#272980] shadow-[0_2px_8px_rgba(39,41,128,0.12)] transition-transform duration-200 hover:-translate-y-0.5"
              style={{ bottom: '25%', right: '5%' }}
            >
              Frictionless Engage
            </div>

            {/* CENTRAL ANCHOR HUB RING */}
            <div className="absolute w-[76px] h-[76px] bg-white border-2 border-[#272980] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(39,41,128,0.15)] z-20">
              {/* Abstract Brand Core Icon */}
              <svg className="w-8 h-8 text-[#272980]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v1a2 2 0 11-4 0v-1a1 1 0 00-1-1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}