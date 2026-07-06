import React from 'react';

export default function Hero() {
  return (
    <section className="bg-[#FFFFFF] p-[16px_clamp(20px,4vw,32px)_48px] flex flex-col-reverse md:flex-row relative w-full gap-10 md:gap-0">
      
      {/* LEFT COLUMN - Portrait Image Card Setup with Inverse Overlay UI Chips */}
      <div className="w-full md:w-[42%] relative">
        <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.05)] relative bg-white">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
            alt="Professional executive background setup" 
            className="w-full h-full object-cover mix-blend-multiply grayscale contrast-[1.05] brightness-95"
          />

          {/* Floating UI Overlay 1: Top-Left Job Pill Chip */}
          <div className="absolute top-4 left-4 bg-white rounded-full p-[8px_14px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center gap-1.5 whitespace-nowrap z-10">
            <div className="w-[18px] h-[18px] rounded-[4px] bg-[#272980] flex items-center justify-center text-white text-[9px] font-bold pl-1">◈</div>
            <span className="text-xs font-semibold text-[#272980]">Company X</span>
            <span className="text-[#7A7580] text-xs">•</span>
            <span className="text-xs font-normal text-[#7A7580]">SIA Security Officer</span>
            <span className="text-[#7A7580] text-xs">•</span>
            <span className="text-[11px] font-normal text-[#7A7580] bg-[#F7ECE0] px-2 py-0.5 rounded-full">MCR</span>
          </div>

          {/* Floating UI Overlay 2: Bottom-Left Social Proof Pill Chip */}
          <div className="absolute bottom-4 left-4 bg-white rounded-xl p-[10px_14px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center gap-3 z-10">
            <div className="flex items-center">
              {[
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
              ].map((src, index) => (
                <img 
                  key={index}
                  src={src} 
                  alt="User Avatar"
                  className="w-6 h-6 rounded-full border-2 border-white -ml-1.5 first:ml-0 object-cover"
                />
              ))}
            </div>
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="text-[15px] font-bold text-[#272980]">1K+</span>
              <span className="text-[11px] font-normal text-[#7A7580] whitespace-nowrap">certified professionals trust us</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN - Clean Left-Aligned Text Content Stack & Signature Badge */}
      <div className="w-full md:w-[58%] md:pl-10 flex flex-col justify-center relative">
        
        {/* Signature Circular Rotating Text Badge Container (Desktop) */}
        <div className="hidden md:flex absolute top-0 right-0 w-[106px] h-[106px] items-center justify-center bg-transparent rounded-full border-[1.5px] border-[#272980] z-20 scale-100">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-badge">
            <defs>
              <path id="badgeTextPath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text className="text-[9.2px] font-medium fill-[#272980] tracking-[0.06em] uppercase">
              <textPath href="#badgeTextPath" startOffset="0%">
                proven placement expertise • vetted • 
              </textPath>
            </text>
          </svg>
          <div className="absolute text-2xl font-bold text-[#272980] tracking-tight top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            15+
          </div>
        </div>

        {/* Small Eyebrow Label Layout */}
        <div className="flex items-center gap-1.5 mb-3">
          <span className="text-xs text-[#272980]">✦</span>
          <span className="text-xs font-medium text-[#7A7580] tracking-wide">
            We Help You Find Skilled Talent
          </span>
        </div>

        {/* Heading and Mobile Badge Container */}
        <div className="relative mb-5 max-w-[540px]">
          <h1 className="text-[clamp(36px,4.8vw,60px)] font-bold leading-[1.10] tracking-[-0.02em] text-[#272980]">
            Facilities, Security & Workforce Solutions You Can Trust
          </h1>
          
          {/* Signature Circular Rotating Text Badge Container (Mobile) */}
          <div className="md:hidden mb-2 absolute -bottom-12 -right-2 w-[100px] h-[100px] flex items-center justify-center bg-transparent rounded-full border-[1.5px] border-[#272980] z-20 scale-[0.6]">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-badge">
              <defs>
                <path id="badgeTextPathMobile" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text className="text-[9.2px] font-medium fill-[#272980] tracking-[0.06em] uppercase">
                <textPath href="#badgeTextPathMobile" startOffset="0%">
                  proven placement expertise • vetted • 
                </textPath>
              </text>
            </svg>
            <div className="absolute text-2xl font-bold text-[#272980] tracking-tight top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              15+
            </div>
          </div>
        </div>


        {/* Short Editorial Body Paragraph */}
        <p className="text-[clamp(14px,1.2vw,15px)] font-normal leading-relaxed text-[#7A7580] mb-8 max-w-[460px]">
        Providing professional cleaning services, SIA-licensed security staff, and CSCS-certified labour supply across Manchester and the UK.
        </p>

        {/* Compound Pill Shape CTA Button with Inline Circle Arrow */}
        <div className='flex gap-4'>
          <button className="group bg-[#272980] text-white rounded-full pl-6 pr-3 py-3 text-sm font-semibold tracking-wide flex items-center justify-center transition-colors duration-200 hover:bg-[#2B2D82] cursor-pointer">
          Hire Staff
            <div className="w-7 h-7 bg-[#272980] rounded-full flex items-center justify-center text-white text-sm font-bold ml-2.5 border border-white/15 transition-transform duration-200 group-hover:translate-x-0.5">
              ↗
            </div>
          </button>

          <button className="group bg-[#272980] text-white rounded-full pl-6 pr-3 py-3 text-sm font-semibold tracking-wide flex items-center justify-center transition-colors duration-200 hover:bg-[#2B2D82] cursor-pointer">
          Contact Us
            <div className="w-7 h-7 bg-[#272980] rounded-full flex items-center justify-center text-white text-sm font-bold ml-2.5 border border-white/15 transition-transform duration-200 group-hover:translate-x-0.5">
              ↗
            </div>
          </button>
        </div>

        <div>
          
        </div>

      </div>
    </section>
  );
}
