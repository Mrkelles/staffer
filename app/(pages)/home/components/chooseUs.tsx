import React from 'react';

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#272980] px-6 py-12 md:px-12 md:py-16 lg:px-18 lg:py-20 font-sans box-border">
      
      {/* CONTENT GRID - Stacked on mobile, 3-Zone on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-[28fr_22fr_50fr] gap-8 md:gap-6 items-start">
        
        {/* Zone 1: Left Text Block & Left Image Stack */}
        <div className="text-left flex flex-col gap-6 md:gap-0">
          <div>
            <div className="inline-flex items-center gap-[6px] mb-3 text-[12px] font-medium text-[#F7ECE0] tracking-[0.04em]">
              <span className="text-[11px]">◆</span> WHY CHOOSE US
            </div>
            <h2 className="text-[30px] md:text-[32px] lg:text-[44px] font-bold text-white leading-[1.15] tracking-[-0.02em] max-w-[320px] m-0 normal-case">
            Workforce Delivery, Redefined.
            </h2>

            {/* Short Navy Underline Rule */}
        <div className="rounded-[2px]" style={{ width: '40px', height: '2px', backgroundColor: '#FFFFFF', marginTop: '16px' }} aria-hidden="true" />
          </div>

          {/* Tall Portrait Image: Placed below header on mobile/tablet, shifts to middle zone block space via grid placement on desktop */}
          <div className="block md:hidden w-full aspect-[3/4] rounded-[10px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.25)] bg-[#2B2D82]">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
              alt="Hiring manager reviewing candidate pipeline" 
              className="w-full h-full object-cover block" 
            />
          </div>
        </div>

        {/* Zone 2: Tall Portrait Image desktop container */}
        <div className="hidden md:block text-left">
          <div className="w-full aspect-[3/4] rounded-[10px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.25)] bg-[#2B2D82]">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
              alt="Hiring manager reviewing candidate pipeline" 
              className="w-full h-full object-cover block" 
            />
          </div>
        </div>

        {/* Zone 3: Right Content Block */}
        <div className="text-left flex flex-col justify-between h-full">
          
          {/* Landscape Duo Row */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            <div className="aspect-[4/3] rounded-[10px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.25)] bg-[#2B2D82]">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" 
                alt="Collaborative recruitment team meeting" 
                className="w-full h-full object-cover block" 
              />
            </div>
            <div className="aspect-[4/3] rounded-[10px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.25)] bg-[#2B2D82]">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" 
                alt="SaaS recruitment analytics dashboard" 
                className="w-full h-full object-cover block" 
              />
            </div>
          </div>

          {/* Short Body Text */}
          <p className="text-[13px] lg:text-[14px] font-normal leading-[1.65] text-white/70 m-0 mb-5">
          We bridge the gap between high-demand operations and dependable, vetted personnel. By combining comprehensive compliance checks with rapid local deployment across Manchester and the UK, Commonwealth ensures your sites scale smoothly without sacrificing safety, cleanliness, or operational standards.
          </p>

          {/* Pill CTA Button */}
          <div>
            <a 
              href="#demo" 
              className="inline-block bg-[#F7ECE0] text-[#272980] rounded-[100px] px-[22px] py-[10px] text-[13px] font-semibold tracking-[0.01em] no-underline border-none transition-colors duration-150 ease-out hover:bg-[#EFE7E1]"
            >
              Request a Quote
            </a>
          </div>
        </div>

      </div>

      {/* 4-COLUMN DATA-DRIVEN STAT STRIP - 2x2 grid on mobile, 4-row grid on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-8 border-t border-white/12 pt-10 mt-12">
        
        {/* Stat Item 1 */}
        <div className="text-left flex flex-col">
          <span className="text-[36px] lg:text-[52px] font-bold leading-none tracking-[-0.02em] text-white">100%</span>
          <span className="text-[11px] md:text-[12px] lg:text-[13px] font-normal leading-[1.4] text-white/65 max-w-[140px] mt-[6px]">
          Fully vetted and compliant personnel.
          </span>
        </div>

        {/* Stat Item 2 */}
        <div className="text-left flex flex-col">
          <span className="text-[36px] lg:text-[52px] font-bold leading-none tracking-[-0.02em] text-white">24 Hours</span>
          <span className="text-[11px] md:text-[12px] lg:text-[13px] font-normal leading-[1.4] text-white/65 max-w-[140px] mt-[6px]">
          Average rapid deployment time for urgent site cover.
          </span>
        </div>

        {/* Stat Item 3 */}
        <div className="text-left flex flex-col">
          <span className="text-[36px] lg:text-[52px] font-bold leading-none tracking-[-0.02em] text-white">100% </span>
          <span className="text-[11px] md:text-[12px] lg:text-[13px] font-normal leading-[1.4] text-white/65 max-w-[140px] mt-[6px]">
          Mananged end-to-end service across Cleaning, Security, and Labour.
          </span>
        </div>

        {/* Stat Item 4 */}
        <div className="text-left flex flex-col">
          <span className="text-[36px] lg:text-[52px] font-bold leading-none tracking-[-0.02em] text-white">24/7</span>
          <span className="text-[11px] md:text-[12px] lg:text-[13px] font-normal leading-[1.4] text-white/65 max-w-[140px] mt-[6px]">
          Dedicated operational and compliance support.
          </span>
        </div>

      </div>
    </section>
  );
}