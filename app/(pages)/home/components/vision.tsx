import React from 'react';

export default function OurVision() {
  return (
    <section className="relative w-full bg-[#F7ECE0] px-6 py-12 md:px-12 lg:px-[clamp(24px,8vw,120px)] lg:py-20 font-sans overflow-hidden box-border">
      
      {/* BACKGROUND DECORATIVE SHAPE */}
      {/* Abstract geometric architectural outline shape, top-right cropped, ~10% opacity */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] pointer-events-none opacity-10 select-none translate-x-12 -translate-y-6 hidden sm:block" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#7A7580] stroke-[1px]">
          <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" />
        </svg>
      </div>

      <div className="mx-auto max-w-[960px] relative z-10">
        
        {/* CENTERED INTRO TEXT BLOCK */}
        <div className="text-center max-w-[640px] mx-auto mb-6 md:mb-20 flex flex-col items-center">
          {/* Eyebrow Label: Upper-case, widely spaced */}
          <span className="text-[10px] font-semibold text-[#272980] tracking-[0.14em] uppercase mb-4 block">
            Our Vision
          </span>
          
          {/* Section Headline: Regular weight (400) gives a quiet, editorial confidence */}
          <h2 className="m-0 font-bold tracking-[-0.01em] mb-4 text-[#272980] leading-[1.2]" style={{ fontSize: 'clamp(28px, 3vw, 38px)' }}>
          Securing and maintaining corporate excellence by creating a workforce ecosystem built on trust, quality, and reliability.
          </h2>
          
          {/* Supporting Body Column */}
          <p className="text-[13px] md:text-[14px] font-normal leading-[1.65] text-[#7A7580] m-0 max-w-[540px]">
          We believe facility support and site protection are no longer just about filling open shifts. True operational scale requires unyielding workforce quality, strict compliance, and a national network of dependable operatives ready to deploy.
          </p>
          {/* Short Navy Underline Rule */}
        <div className="rounded-[2px]" style={{ width: '40px', height: '2px', backgroundColor: '#272980', marginTop: '16px' }} aria-hidden="true" />
        </div>

        {/* 3-COLUMN STAGGERED FEATURE CARD GRID */}
        {/* On mobile: standard vertical block stack. On desktop: 3 equal thirds grid with a raised middle card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 md:pt-0">
          
          {/* Vision Card 1 (Baseline - Left) */}
          <div className="group bg-[#2B2D82] rounded-[16px] p-7 md:px-6 md:py-7 flex flex-col items-start text-left min-h-[220px] shadow-[0_16px_48px_rgba(39,41,128,0.12)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_20px_52px_rgba(39,41,128,0.22)]">
            {/* Outline SVG Icon */}
            <div className="text-white mb-4 w-7 h-7" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <circle cx="12" cy="12" r="10" />
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h3 className="text-[15px] font-semibold text-white leading-tight m-0 mb-[10px]">
            Workforce Quality
            </h3>
            <p className="text-[12px] font-normal leading-[1.65] text-white/80 m-0">
            Going significantly beyond basic qualifications to evaluate reliability, field expertise, and hands-on capability long before our team arrives on your site.
            </p>
          </div>

          {/* Vision Card 2 (Elevated Center Card Variant) */}
          {/* translateY(-32px) on desktop viewports + deeper background tint to generate visual focus */}
          <div className="group bg-[#272980] rounded-[16px] p-7 md:px-6 md:py-7 flex flex-col items-start text-left min-h-[220px] shadow-[0_24px_56px_rgba(39,41,128,0.20)] transition-all duration-200 ease-out md:-translate-y-8 hover:md:-translate-y-9 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(39,41,128,0.30)] relative z-20">
            {/* Outline SVG Icon */}
            <div className="text-white mb-4 w-7 h-7" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 className="text-[15px] font-semibold text-white leading-tight m-0 mb-[10px]">
              Systemic Speed
            </h3>
            <p className="text-[12px] font-normal leading-[1.65] text-white/80 m-0">
            Eliminating operational gaps through rigorous screening, instant compliance deployment, and maintaining high standards across cleaning and workforce management.
            </p>
            
          </div>

          {/* Vision Card 3 (Baseline - Right) */}
          <div className="group bg-[#2B2D82] rounded-[16px] p-7 md:px-6 md:py-7 flex flex-col items-start text-left min-h-[220px] shadow-[0_16px_48px_rgba(39,41,128,0.12)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_20px_52px_rgba(39,41,128,0.22)]">
            {/* Outline SVG Icon */}
            <div className="text-white mb-4 w-7 h-7" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12a10 10 0 0 1 10-10z" />
                <path d="M12 8v8M8 12h8" />
              </svg>
            </div>
            <h3 className="text-[15px] font-semibold text-white leading-tight m-0 mb-[10px]">
            Certified Reliability
            </h3>
            <p className="text-[12px] font-normal leading-[1.65] text-white/80 m-0">
            Managing fully compliant staffing deployments—from SIA-licensed security operatives to CSCS-certified construction teams—ensuring your operations stay legal and safe.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
}